import ListOfSale from "../components/ListOfSale"
import ProducstList from "../components/ProducstList"
import TotalToPay from "../components/TotalToPay"
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
      <ProducstList />
      <ListOfSale />
      <TotalToPay />
    </div>
  )
}

export default Home
