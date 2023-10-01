/* eslint-disable react/prop-types */

const ListOfSaleItem = ({ item }) => {
    console.log(item)
  return (
    <div style={{ border: '1px solid black' }}>
      {
        item.map((i, index) => {
           if(i.cantidad > 0 ){
            return (
        
            <li key={index}>
                {i.cantidad} - {i.nombre}  {i.cantidad * i.precio}
            </li>) 
           } 
            })
      }
    </div>
  )
}

export default ListOfSaleItem
