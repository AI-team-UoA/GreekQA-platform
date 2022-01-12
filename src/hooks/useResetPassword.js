import { useEffect, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth, firebaseErrors } from 'firebase/config';

export const useResetPassword = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  
  const resetPassword = async (email) => {
    setError(null)
    setIsPending(true)

    try {
      // Send email verification
      await sendPasswordResetEmail(auth, email)
      
      // Update state
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

  return { resetPassword, error, isPending }
}