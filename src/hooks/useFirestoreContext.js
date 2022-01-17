import { FirestoreContext } from 'contexts/FirestoreContext';
import { useContext } from 'react';

export const useFirestoreContext = () => {
  const context = useContext(FirestoreContext);

  if(!context) {
    throw Error('useFirestoreContext must be used inside an FirestoreContextProvider');
  }

  return context;
}