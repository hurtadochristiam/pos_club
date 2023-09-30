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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src="./src/assets/logo-ayuwn.webp"
            alt="Club Ayuwn"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresa en el Sistema
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blueayuwn px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-goldayuwn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueayuwn"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Login