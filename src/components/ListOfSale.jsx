import { useAuth } from '../context/AuthContext'
import ListOfSaleItem from './ListOfSaleItem'

const ListOfSale = () => {
    const { pedido } = useAuth()
  return (
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Pedido Actual</h2>
        </div>

        <div className="mt-8">
          <div className="flow-root">
              {
                pedido.length === 0
                  ?<strong>No hay productos</strong>
                  :<ListOfSaleItem item={pedido}/>
              }
          </div>
        </div>
      </div>      
  )
}

export default ListOfSale
