import { useContext } from 'react'
import { AuthContext } from '@/app/store/AuthContext'

export const useAuth = () => {
  return useContext(AuthContext)
}
