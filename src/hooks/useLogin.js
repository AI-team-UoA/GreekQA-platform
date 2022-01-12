import { useState, useEffect } from 'react';
import { auth, firebaseErrors } from 'firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from 'hooks/useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      // Login
      const res = await signInWithEmailAndPassword(auth, email, password)

      // Dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(firebaseErrors[err.code])
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, error, isPending }
}