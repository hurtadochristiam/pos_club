import { useState } from "react"
import SellingPorducts from "../components/SellingPorducts"
import { useAuth } from "../context/AuthContext"
import Stock from "./Stock"
import Ordenes from "./Ordenes"

const Home = () => {
  const { user, logout } = useAuth()
  const [currentView, setCurrentView] = useState('home')
  const handleLogOut = async() => {
    await logout()
  }
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="./src/assets/logo-ayuwn.webp" alt="Club Ayuwn" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <span href="#" className="text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><strong>{user.email}</strong></span>
                </div>
              </div>
            </div>
             <div onClick={() => setCurrentView('home')} className="mx-2 text-white font-semibold cursor-pointer">
              <span>Vender</span>
            </div>
            <div onClick={() => setCurrentView('stock')} className="mx-2 text-white font-semibold cursor-pointer">
              <span>Stock</span>
            </div>
             <div onClick={() => setCurrentView('ordenes')} className="mx-2 text-white font-semibold cursor-pointer">
              <span>Órdenes</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page" onClick={handleLogOut}>Salir</a>
            </div>
          </div>
        </div>
      </nav>
      {
        currentView == 'home' 
          ? <SellingPorducts />
          :(
            currentView === 'stock'
              ? <Stock />
              :<Ordenes />
          ) 
          
      }
      
    </div>
  )
}

export default Home
