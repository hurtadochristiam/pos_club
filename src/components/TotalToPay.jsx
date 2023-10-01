import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { calculateTotal } from "../utils/updatePedido"

const TotalToPay = () => {
  const [formaDePago, setFormaDePago] = useState("")
  const { pedido } = useAuth()
  const handleCalculate = () => {
    const totaltToPay = calculateTotal(pedido)
    console.log({totaltToPay, formaDePago, pedido})
  }
  function handleChange(event) {
        const value = event.target.value;
        setFormaDePago(value);
    }

  return (
    <div style={{ border: '1px solid #000000'}}>
      <strong>Total: {calculateTotal(pedido)}</strong>
      <form>
        <label htmlFor="tarjeta">Tarjeta</label>
        <input type="radio" name="formaDePago" value='tarjeta' onChange={handleChange}/>
        <label htmlFor="efectivo">Efectivo</label>
        <input type="radio" name="formaDePago" value='efectivo' onChange={handleChange}/>
      </form>
      <button onClick={handleCalculate}>Pagar</button>
    </div>
  )
}

export default TotalToPay
