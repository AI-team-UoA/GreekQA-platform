import { useEffect, useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth, firebaseErrors } from 'firebase/config';

export const useVerifyEmail = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
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

  return { verifyEmail, error, isPending }
}