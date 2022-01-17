import { createContext, useReducer, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export const FirestoreContext = createContext();

export const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'READ_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'EDITED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload }
    default:
      return state
  }
}

export const FirestoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(firestoreReducer, {
    document: null,
    isPending: false,
    error: null,
    success: null
  });

  // useEffect(() => {

  // }, [])
  
  return (
    <FirestoreContext.Provider value={{ ...state, dispatch }}>
      { children }
    </FirestoreContext.Provider>
  )

}