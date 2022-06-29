import { useReducer, useState } from 'react';
import { db } from 'firebase/config';
import { getDocs, setDoc, updateDoc, getDoc, doc, collection } from 'firebase/firestore';

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

export const useFirestoreUsers = () => {
  const [response, dispatch] = useReducer(firestoreReducer, {
    document: null,
    isPending: false,
    error: null,
    success: null,
  })
  const [isCancelled, setIsCancelled] = useState(false);

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const addUser = async (user) => {
    dispatchIfNotCancelled({ type: 'IS_PENDING' });
    try {
      const userData = {
        displayName: user.displayName,
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
      var newUserData = {
        displayName : user.displayName,
        email : user.email
      }

      await updateDoc(doc(db, 'users', user.uid), newUserData);

      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', });
    }
    catch (err) {

      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  // const updateUserStats = async (uid, newNumQas) => {
  //   dispatchIfNotCancelled({ type: 'IS_PENDING' });

  //   try {
  //     const userSnap = await getDoc(doc(db, 'users', uid));
  //     var userData = userSnap.data();

  //     var newUserData = {
  //       numQas : userData.numQas + newNumQas,
  //       numParagraphs : userData.numParagraphs + 1
  //     }

  //     await updateDoc(doc(db, 'users', uid), newUserData);

  //     dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: { uid: uid } });
  //   }
  //   catch (err) {
  //     dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
  //   }
  // }

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
      var userData = userSnap.data();
          
      dispatchIfNotCancelled({ type: 'READ_DOCUMENT', payload: { user: userData } });

    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  return { addUser, getUser, getUsers, updateUserInfo, response }

}