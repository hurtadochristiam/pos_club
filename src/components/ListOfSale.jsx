import { useAuth } from '../context/AuthContext'
import ListOfSaleItem from './ListOfSaleItem'

const ListOfSale = () => {
    const { pedido } = useAuth()
  return (
    <div>
        {
            pedido.length === 0
                ?<strong>No hay pedidos</strong>
                :<ListOfSaleItem item={pedido}/>
        }
      
    </div>
  )
}

export default ListOfSale
