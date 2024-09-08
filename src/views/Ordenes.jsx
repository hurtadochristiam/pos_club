import { useEffect } from 'react'
import { useState } from 'react'
import { getOrders } from '../utils/getDataFireStore'
import _ from 'lodash'

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([])
  

  useEffect(() => {
    getOrders().then(res => {
       
        const grupos = _.groupBy(res, orden => [orden.usuario, orden.tipo_de_pago])
        const datos = Object.values(grupos).map(grupo => ({
            fecha: grupo[grupo.length - 1].timestamp.seconds,
            usuario: grupo[0].usuario,
            tipo_de_pago: grupo[0].tipo_de_pago,
            total: _.sumBy(grupo, item => {
                if(item.total.includes('$') ||  item.total.includes('.')){
                    let currentValue = item.total
                    let newValue = currentValue.replace (/[$.]/g, '');
                    console.log(newValue)
                    item.total = newValue
                   
                }
                return Number(item.total.trim())
            })
            }))
         setOrdenes(datos)
         console.log(grupos)
    }) 
    
  }, [])
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-center">
      <div className="relative overflow-x-auto w-full ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Fecha DD/MM/AA HH
                </th>
                <th scope="col" className="px-6 py-3">
                    Tipo de pago
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Vendedor
                </th>
                <th scope="col" className="px-6 py-3">
                    TOTAL
                </th>
                
            </tr>
        </thead>
        <tbody>
            {
                ordenes.length !== 0 
                ? ordenes.map(orden => {
                    let fecha = new Date(orden.fecha * 1000);
                    let fechaFormateada = fecha.toLocaleString('es-ES');

                    return (
                        <tr key={orden.fecha} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {fechaFormateada}
                     </th>
                <td className="px-6 py-4">
                    {orden.tipo_de_pago}
                </td>
                <td className="px-6 py-4">
                    {orden.usuario}
                </td>
                 <td className="px-6 py-4">
                    ${orden.total.toLocaleString ('es-ES')}
                </td>

            </tr>
                    ) } )
            : <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cargando...
                </th>
                <td className="px-6 py-4">
                    Cargando...
                </td>
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

export default Ordenes
