import { useState, useEffect } from 'react';
import { auth, firebaseErrors } from 'firebase/config';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { useAuthContext } from 'hooks/useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, firstname, lastname) => {
    setError(null)
    setIsPending(true)
  
    try {
      // Signup
      const res = await createUserWithEmailAndPassword(auth, email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // Add display name
      await updateProfile(res.user, { displayName: `${firstname} ${lastname}` })

      // Send verification email
      await sendEmailVerification(res.user)

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

  return { signup, error, isPending }
}