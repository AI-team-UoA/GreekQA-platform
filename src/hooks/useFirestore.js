import { useReducer, useEffect, useState } from 'react';
import { doc, getDoc, getDocs, limit, collection, query, where, collectionGroup, getParent } from 'firebase/firestore';
import { db } from 'firebase/config';
import { useFirestoreContext } from 'hooks/useFirestoreContext';

export const useFirestore = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { response, dispatch } = useFirestoreContext();

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
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  // const addDocument = async (doc) => {
  //   dispatch({ type: 'IS_PENDING' })

  //   try {
  //     const createdAt = timestamp.fromDate(new Date())
  //     const addedDocument = await ref.add({ ...doc, createdAt })
  //     dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
  //   }
  //   catch (err) {
  //     dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
  //   }
  // }

  // // delete a document
  // const deleteDocument = async (id) => {
  //   dispatch({ type: 'IS_PENDING' })

  //   try {
  //     await ref.doc(id).delete()
  //     dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
  //   }
  //   catch (err) {
  //     dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
  //   }
  // }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { getDocument, response }

}