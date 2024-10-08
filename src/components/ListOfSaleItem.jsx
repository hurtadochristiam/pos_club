/* eslint-disable react/prop-types */
import { currencyFormat } from '../utils/formats'

const ListOfSaleItem = ({ item }) => {
  return (
    <ul role="list" className="-my-6 divide-y divide-gray-200">
    {
      item.map((i, index) => {
        if(i.cantidad > 0 ){
          
          return (
            <li key={index} className="flex py-4">
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <span className='text-sm'>{i.cantidad} x </span>
                      <span>{i.name}</span>
                    </h3>
                    <p className="ml-4">{currencyFormat(i.cantidad * i.price)}</p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">valor unitario: {currencyFormat(i.price)} </p>
                </div>
              </div>
            </li>
          ) 
        } 
      })
      
    }   
    </ul>   
  )
}

export default ListOfSaleItem
