import { useAuth } from "../context/AuthContext"

const Home = () => {
  const { user, logout } = useAuth()
  const handleLogOut = async() => {
    await logout()
  }
  return (
    <div>
      <h1>Hola {user.email}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Home
