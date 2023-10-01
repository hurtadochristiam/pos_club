import ProductItem from "./ProductItem"
import { useAuth } from "../context/AuthContext"

const ProducstList = () => {
  const { products } = useAuth()
  
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
        {
            products.map(product => {
                return (<ProductItem key={product.id} product={product} />)
            })
        }
      
    </div>
  )
}

export default ProducstList
