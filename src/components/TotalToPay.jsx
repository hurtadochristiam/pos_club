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
    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div class="flex justify-between text-base font-medium text-gray-900">
        <p>Total</p>
        <p className="font-bold">{calculateTotal(pedido)}</p>
      </div>
      <form>
        <p className='p-2 font-bold'>Método de Pago</p>
        <label htmlFor="tarjeta" className="p-3">Tarjeta</label>
        <input type="radio" className="p-3 form-radio" name="formaDePago" value='tarjeta' onChange={handleChange} />
        <label htmlFor="efectivo" className="p-5">Efectivo</label>
        <input type="radio"  className="p-3 form-radio" name="formaDePago" value='efectivo' onChange={handleChange} checked/>
        <div class="mt-6">
          <button onClick={handleCalculate} class="flex items-center justify-center rounded-md border border-transparent bg-blueayuwn px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-goldayuwn">Confirmar</button>
        </div>
      </form>
    </div>
  )
}

export default TotalToPay
