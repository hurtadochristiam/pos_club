import { useContext } from 'react'
import './App.css'
import Login from './views/Login'
import {  Routes, Route } from 'react-router-dom'
import {  authContext } from './context/AuthContext'
import Home from './views/Home'

function App() {
    const { user, loading } = useContext(authContext)
    
  return (
      loading
        ? <h1>Cargando...</h1> 
        :  <Routes>
          {
            user 
              ? (<Route path="/" element={<Home/>}/>)
              :(<Route path="/" element={<Login />} />)
          }
      </Routes>
  )
}

export default App
