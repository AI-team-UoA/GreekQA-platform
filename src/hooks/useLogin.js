import { useState, useEffect } from 'react';
import { auth, firebaseErrors } from 'firebase/config';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, browserLocalPersistence } from 'firebase/auth';
import { useAuthContext } from 'hooks/useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password, remember) => {
    setError(null);
    setIsPending(true);
  
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: 'LOGIN', payload: res.user })
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(firebaseErrors[err.code]);
        setIsPending(false);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, [])

  return { login, error, isPending }
}