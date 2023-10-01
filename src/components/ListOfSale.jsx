import { useAuth } from '../context/AuthContext'
import ListOfSaleItem from './ListOfSaleItem'

const ListOfSale = () => {
  const { pedido } = useAuth()
  return (
        <div className="mt-8">
          <div className="flow-root">
              {
                pedido.length === 0
                  ?<strong>No hay productos</strong>
                  :<ListOfSaleItem item={pedido}/>
              }
          </div>
        </div>
            
  )
}

export default ListOfSale
