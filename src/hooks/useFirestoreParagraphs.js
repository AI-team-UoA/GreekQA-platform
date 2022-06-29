import { useReducer, useEffect, useState } from 'react';
import { db } from 'firebase/config';
import { collectionGroup, query, where, limit, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'READ_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case "UPDATED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true,  error: null }
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload }
    default:
      return state
  }
}

export const useFirestoreParagraphs = () => {
  const [response, dispatch] = useReducer(firestoreReducer, {
    document: null,
    isPending: false,
    error: null,
    success: null,
  })
  const [isCancelled, setIsCancelled] = useState(false);

  const paragraphsRef = collectionGroup(db, 'paragraphs');

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const getDocument = async (user_uid) => { // DONE
    dispatchIfNotCancelled({ type: 'IS_PENDING' });

    try {
      var title;
      var paragraph;

      var q = query(paragraphsRef, where("completed", '==', "false"), where("assigned_user", '==', user_uid), limit(1));
      var querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        q = query(paragraphsRef, where("completed", '==', "false"), where("assigned_user", '==', ""), limit(1));
        querySnapshot = await getDocs(q);
      }

      querySnapshot.forEach((doc) => {
          title = doc.ref.parent.parent.id;
          paragraph = doc.data();
          if (paragraph.assigned_user === "") {
            updateDoc(doc.ref, { assigned_user: user_uid });
          }
      });

      dispatchIfNotCancelled({ type: 'READ_DOCUMENT', payload: { title, paragraph } });
    }
    catch (err) {
      console.log(err.message);
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  const updateQas = async (document, user_uid) => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });
  
    try {
      var newParagraphData = {
        completed: true,
        qas: document.paragraph.qas
      }
      await updateDoc(doc(db, 'articles', document.title, 'paragraphs', document.paragraph.uid), newParagraphData);

      // Update User Statistics
      const userSnap = await getDoc(doc(db, 'users', user_uid));
      var userData = userSnap.data();

      var newUserData = {
        numQas : userData.numQas + newParagraphData.qas.length,
        numParagraphs : userData.numParagraphs + 1
      }

      await updateDoc(doc(db, 'users', user_uid), newUserData);

      // Update General Statistics
      const statisticsSnap = await getDoc(doc(db, 'statistics', 'greekqa'));
      var statisticsData = statisticsSnap.data();

      var newStatisticsData = {
        "numQas": statisticsData.numQas += newParagraphData.qas.length,
        "numParagraphsCompleted": statisticsData.numParagraphsCompleted += 1
      }

      await updateDoc(doc(db, 'statistics', 'greekqa'), newStatisticsData);

      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: { uid: document.title.paragraph.uid } });
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { getDocument, updateQas, response }

}