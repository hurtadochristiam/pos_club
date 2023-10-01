/* eslint-disable react/prop-types */

const ListOfSaleItem = ({ item }) => {
  return (
    <ul role="list" class="-my-6 divide-y divide-gray-200">
    {
      
      item.map((i, index) => {
        if(i.cantidad > 0 ){
          return (
            <li key={index} class="flex py-6">
              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <span>{i.nombre}</span>
                    </h3>
                    <p class="ml-4">{i.cantidad * i.precio}</p>
                  </div>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <p class="text-gray-500">{i.cantidad} Unidades</p>
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
