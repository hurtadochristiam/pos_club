/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateOrAddProduct } from '../utils/updatePedido'
import { currencyFormat } from '../utils/formats'

const ProductItem = ({ product }) => {
  
  const [cantidad, setCantidad] = useState(0)
  const { pedido,setPedido} = useAuth()

  const handleAdd = () => {
      setCantidad(prev=> prev + 1)
      setPedido(prev => updateOrAddProduct(prev, product))
  }

  const handleLess = () => {
    if (cantidad > 0){
      setCantidad(prev => prev - 1)
      setPedido(prev => prev.map(el => {
      if (el.id === product.id) {
        return {...el, cantidad: el.cantidad - 1}
      } else {
          return el
      }
      }))
      if (cantidad === 1){
        setPedido(prev => prev.filter(el => el.id !== product.id))
      }
    }else{
      alert('No hay producto agregado')
    }

  }

  useEffect(() => {
    if (pedido.length == 0) {
      setCantidad(0)
      console.log('oli')
    } else {
      console.log('none')
    }
  },[pedido])
  return (
        <div key={product.id} className="group relative flex justify-stretch flex-col">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div className='basis-4/5 justify-between'>
              <h3 className="text-base text-gray-700">
                <span aria-hidden="true" className="" />
                {product.name}
              </h3>
              <p className="mt-1 text-xs text-gray-500">{product.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900 basis-1/5 text-right">{currencyFormat(product.price)}</p>
          </div>
          <div className="flex flex-1 justify-center items-end mt-5">
            <div className="">
              <div className="flex space-x-4">
                <span className="cursor-default text-gray-600 bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-m font-medium" onClick={handleLess}>-</span>
                <span className='p-2'>{cantidad}</span>
                <span className="cursor-default text-gray-600 bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-m font-medium" onClick={handleAdd}>+</span>
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default ProductItem
