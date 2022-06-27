import { useReducer, useEffect, useState } from 'react';
import { db } from 'firebase/config';
import { collectionGroup, query, where, limit, getDocs, setDoc, getDoc, doc, collection } from 'firebase/firestore';

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

export const useFirestore = () => {
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

  const getDocument = async () => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });

    try {
      var title;
      var paragraph;
      const q = query(paragraphsRef, where("completed", '==', "false"),  limit(1));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          title = doc.ref.parent.parent.id;
          paragraph = doc.data();
      });

      dispatchIfNotCancelled({ type: 'READ_DOCUMENT', payload: { title, paragraph } });
    }
    catch (err) {

      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  const updateDocument = async (title, qas) => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });

    try {
      const q = query(paragraphsRef, where("title", '==', title),  limit(1));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          doc.ref.update({ completed: true, qas: qas });
      });

      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: { title, qas } });
    }
    catch (err) {

      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  const addUser = async (user) => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });
    try {
      const userData = {
        name: user.displayName,
        email: user.email,
        numQas: 0,
        numParagraphs: 0
      }
      await setDoc(doc(db, 'users', user.uid), userData);

      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: { uid: user.uid } });
    }
    catch (err) {
      console.log(err.message)
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  const updateUserInfo = async (user) => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });

    try {
      const docRef = db.collection('users').doc(user.uid);
      await docRef.update({
        displayName: user.displayName,
        email: user.email
      });

      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: { uid: user.uid } });

    }
    catch (err) {

      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  const updateUserStats = async (user, newNumQas) => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });

    try {
      const docRef = db.collection('users').doc(user.uid);
      await docRef.update({
        numQas: user.numQas + newNumQas,
        numParagraphs: user.numParagraphs + 1
      });

      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: { uid: user.uid } });
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  const getUsers = async () => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });

    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      var users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });

      dispatchIfNotCancelled({ type: 'READ_DOCUMENT', payload: { users } });

    }
    catch (err) {

      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  const getUser = async (uid) => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });

    try {
      const userSnap = await getDoc(doc(db, 'users', uid));
      var user = userSnap.data();
          
      dispatchIfNotCancelled({ type: 'READ_DOCUMENT', payload: { user } });

    }
    catch (err) {
      console.log("ERROR: " + err.message)
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addUser, updateUserInfo, updateUserStats, getUser, getUsers, getDocument, updateDocument, response }

}