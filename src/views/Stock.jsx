import { useEffect, useState } from "react"
import { getProducts } from "../utils/getDataFireStore"

const Stock = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    console.log('Stock')
    getProducts().then(res => {
        setProductos(res)
    }).catch(err =>console.log(err))
  }, [])
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-center">
 
<div className="relative overflow-x-auto w-full ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Producto
                </th>
                <th scope="col" className="px-6 py-3">
                    Vendido
                </th>
                
                <th scope="col" className="px-6 py-3">
                    En stock
                </th>
                
            </tr>
        </thead>
        <tbody>
            {
                productos.length !== 0 
                ? productos.map(producto => {
                    return (
                        <tr key={producto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {producto.name}
                </th>
                <td className="px-6 py-4">
                    {producto.vendido}
                </td>
                <td className="px-6 py-4">
                    {producto.stock}
                </td>

            </tr>
                    )
                })
                
            : <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cargando...
                </th>
                <td className="px-6 py-4">
                    Cargando...
                </td>
                <td className="px-6 py-4">
                    Cargando...
                </td>

            </tr>
            }
           
            
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Stock
