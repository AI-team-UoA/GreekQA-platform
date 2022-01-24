import { useEffect, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth, firebaseErrors } from 'firebase/config';

export const useResetPassword = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
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
        setSuccess(true)
      } 
    }
    catch(err) {
      if (!isCancelled) {
        setSuccess(null)
        setError(firebaseErrors[err.code])
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { resetPassword, error, success, isPending }
}