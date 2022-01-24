import { useEffect, useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth, firebaseErrors } from 'firebase/config';

export const useVerifyEmail = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isPending, setIsPending] = useState(false)
  
  const verifyEmail = async () => {
    setError(null)
    setIsPending(true)

    try {
      // Send email verification
      await sendEmailVerification(auth.currentUser)
      
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

  return { verifyEmail, error, success, isPending }
}