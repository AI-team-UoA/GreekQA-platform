import { useEffect, useState } from 'react'
import { auth, firebaseErrors } from 'firebase/config'
import { updatePassword } from 'firebase/auth'
import { useAuthContext } from 'hooks/useAuthContext'

export const useChangePassword = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const changePassword = async (newPassword) => {
    setError(null)
    setIsPending(true)

    try {
      // Update password
      await updatePassword(auth.currentUser, newPassword)
      
      dispatch({ type: 'LOGIN', payload: auth.currentUser })
      
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

  return { changePassword, error, isPending }
}