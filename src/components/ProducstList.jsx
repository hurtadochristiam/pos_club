import ProductItem from "./ProductItem"
import { useAuth } from "../context/AuthContext"
import {  useLayoutEffect } from "react"
import { getProducts } from "../utils/getDataFireStore"

const ProducstList = () => {
  const { products, setProducts } = useAuth()
  useLayoutEffect( () => {
    getProducts().then(res => {
      console.log(res)
      setProducts(res)
    })
  } ,[])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Orden de compra</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            products.length > 0
              ?products.map(product => {
                return (<ProductItem key={product.id} product={product} />)
            })
            :<p>Cargando productos...</p>
            
          }
        </div>
      </div>
    </div>
  )
}

export default ProducstList
