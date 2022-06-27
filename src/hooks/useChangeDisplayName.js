import { useEffect, useState } from 'react';
import { auth, firebaseErrors } from 'firebase/config';
import { updateProfile } from 'firebase/auth';
import { useAuthContext } from 'hooks/useAuthContext';

export const useChangeDisplayName = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const changeDisplayName = async (firstname, lastname) => {
    setError(null)
    setIsPending(true)

    try {
      // Update display name
      await updateProfile(auth.currentUser, { displayName: `${firstname} ${lastname}` })
      
      dispatch({ type: 'LOGIN', payload: auth.currentUser })

      // Update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
        setSuccess(true)
      }

      return auth.currentUser
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

  return { changeDisplayName, error, success, isPending }
}