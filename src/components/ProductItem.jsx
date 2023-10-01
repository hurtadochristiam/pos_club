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
    <div >
        <div>
            <button onClick={handleLess}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleAdd}>+</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <img src={product.imagen} width='100px' height='100px' />
            <span>${product.precio}</span>
        </div>
    </div>
  )
}

export default ProductItem
