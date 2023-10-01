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
  const [products, setProducts] = useState([
    {
        id: 5550,
        nombre: 'Completo', 
        precio: 2500,
        stock: 50,
        imagen: "/src/assets/completo.jpg",
        descripción: 'Pan con salchicha ricachongo',
        color: 'Color perrocaliente',
        cantidad: 0
    },
    {
        id: 5555,
        nombre: 'Tacos', 
        precio: 1500,
        stock: 250,
        imagen: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripción: 'Pan con salchicha ricachongo',
        color: 'Color perrocaliente',
        cantidad: 0
    },
    {
        id: 5554,
        nombre: 'Coca-cola', 
        precio: 1000,
        stock: 355,
        imagen: "https://images.pexels.com/photos/877308/pexels-photo-877308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripción: 'Pan con salchicha ricachongo',
        color: 'Color perrocaliente',
        cantidad: 0
    },
    {
        id: 5553,
        nombre: 'Carnita Asada', 
        precio: 2500,
        stock: 50,
        imagen: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripción: 'Pan con salchicha ricachongo',
        color: 'Color perrocaliente',
        cantidad: 0
    },
    {
        id: 5552,
        nombre: 'Café', 
        precio: 2500,
        stock: 50,
        imagen: "https://images.pexels.com/photos/5709528/pexels-photo-5709528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descripción: 'Pan con salchicha ricachongo',
        color: 'Color perrocaliente',
        cantidad: 0
    },
    {
        id: 5551,
        nombre: 'Lechita', 
        precio: 2500,
        stock: 50,
        imagen: "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripción: 'Pan con salchicha ricachongo',
        color: 'Color perrocaliente',
        cantidad: 0
    }
  ])

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