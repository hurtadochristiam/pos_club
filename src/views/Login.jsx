import { useState } from "react"
import {  useAuth } from "../context/AuthContext"


const Login = () => {
 const { login } = useAuth()
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await login(email, password)
    if(!response.status){
        alert('Correo/password incorrectos')
    }
 }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Usuario</label>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button name="login">Login</button>
      </form>
    </div>
  )
}

export default Login
