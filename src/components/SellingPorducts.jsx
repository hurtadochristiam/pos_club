import ProducstList from './ProducstList'
import ListOfSale from './ListOfSale'
import TotalToPay from './TotalToPay'

const SellingPorducts = () => {
  return (
    <>
     <ProducstList />   
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Pedido Actual</h2>
        </div> 
        <ListOfSale />
      </div>
      <TotalToPay />
    </>
  )
}

export default SellingPorducts
