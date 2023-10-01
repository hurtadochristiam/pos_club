import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { calculateTotal,calculateShowTotal } from "../utils/updatePedido"
import ModalOrder from "./ModalOrder"
import { updateStock } from "../utils/getDataFireStore"

const TotalToPay = () => {
  const [formaDePago, setFormaDePago] = useState("efectivo")
  const { pedido, user } = useAuth()
  const [open, setOpen] = useState(false)

  function openModal () {
    setOpen(!open)
  }
  const handleGenerateOrder = async (ee) => {
    e.preventDefault()
    e.preventDefault()
    const total = calculateTotal(pedido)
    let response =  await updateStock(pedido, formaDePago, user, total)
    if(response.status){
      alert(response.message)
    }else{
      console.log(response)
      alert(response.error)
    }
  }
  function handleChange(event) {
        const value = event.target.value;
        setFormaDePago(value);
    }

  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-2xl font-medium text-gray-900">
        <p className="mr-5">Total</p>
        <p className="font-bold mx-5">{calculateShowTotal(pedido)}</p>
      </div>
      <div className="flex flex-row justify-end">
        <form className="flex flex-col items-end">
          <div className="my-3 flex-col">
            <p className='py-2 font-bold text-right'>Método de Pago</p>
            <label htmlFor="transferencia" className="p-5">Transferencia</label>
            <input type="radio"  className="p-3 form-radio" name="formaDePago" value='transferencia' onChange={handleChange} />
            <label htmlFor="tarjeta" className="p-3">Tarjeta</label>
            <input type="radio" className="p-3 form-radio" name="formaDePago" value='tarjeta' onChange={handleChange} />
            <label htmlFor="efectivo" className="p-5">Efectivo</label>
            <input type="radio"  className="p-3 form-radio" name="formaDePago" value='efectivo' onChange={handleChange} checked/>
          </div>
          <div className="mt-6">
            <button onClick={openModal} className="flex items-center justify-center rounded-md border border-transparent bg-blueayuwn px-20 py-3 text-base font-medium text-white shadow-sm hover:bg-goldayuwn">Pagar</button>
          </div>
        </form>
      </div>
    <ModalOrder openModal={openModal} open={open} />
    </div>
  )
}

export default TotalToPay
