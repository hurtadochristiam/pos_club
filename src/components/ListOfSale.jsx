import { useAuth } from '../context/AuthContext'
import ListOfSaleItem from './ListOfSaleItem'

const ListOfSale = () => {
    const { pedido } = useAuth()
  return (
      <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div class="flex items-start justify-between">
          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Pedido Actual</h2>
        </div>

        <div class="mt-8">
          <div class="flow-root">
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
