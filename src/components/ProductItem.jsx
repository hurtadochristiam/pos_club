/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateOrAddProduct } from '../utils/updatePedido'

const ProductItem = ({ product }) => {
  
  const [cantidad, setCantidad] = useState(0)
  const { setPedido} = useAuth()

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

  return (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="" />
                {product.nombre}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.descripción}</p>
              <div className="flex flex-1 items-center justify-center mt-5">
                <div className="">
                  <div className="flex space-x-4">
                    <span className="text-gray-600 bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-m font-medium" onClick={handleLess}>-</span>
                    <span className='p-2'>{cantidad}</span>
                    <span className="text-gray-600 bg-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-m font-medium" onClick={handleAdd}>+</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.precio}</p>
          </div>
        </div>
    
  )
}

export default ProductItem
