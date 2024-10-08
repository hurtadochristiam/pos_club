/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    console.log('Error creando auth context')
  }
  return context
}

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [pedido, setPedido] = useState([])
  const [products, setProducts] = useState([])
  const [productlist, setProductlist] = useState([])

  useEffect(() => {
    setLoading(true)
    const subscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log('No hay usuario logeado')
        setUser(null)
      } else {
        setUser(currentUser)
      }
      setLoading(false)
    })
    return () => subscribed()
  }, [])

  const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log('aqui el login response')
        console.log(response.user)
        setUser(response.user)
        return {status: true, response}
    } catch (error) {
        return {status: false, error}
    }
    
  }
  const logout = async () => {
    const response = signOut(auth)
    console.log(response)
  }
  return (
  <authContext.Provider 
            value={{ user, loading, login, logout, pedido, setPedido, products, setProducts }}>
            {children}
    </authContext.Provider >
    )
}