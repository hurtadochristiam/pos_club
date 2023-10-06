/* eslint-disable react/prop-types */
import { Fragment,useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import ListOfSale from "../components/ListOfSale"
import { calculateTotal, calculateShowTotal } from "../utils/updatePedido"
import { useAuth } from "../context/AuthContext"
import { updateStock } from "../utils/getDataFireStore"

export default function ModalOrder({openModal,open,setOpen,formaDePago}) {

  const { pedido, user, setPedido} = useAuth()
  const [sending, setSending] = useState(false)

  const handleGenerateOrder = async (e) => {
    e.preventDefault()
    setSending(true)
    const total = calculateTotal(pedido)
    let response =  await updateStock(pedido, formaDePago, user, total)
    if(response.status){
      alert(response.message)
      // openModal()
      setSending(false)
      setPedido([])
      setOpen(false)
    }else{
      console.log(response)
      alert(response.error)
      setSending(false)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(!open)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BanknotesIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Resumen de Órden
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Gracias por su compra en el Primer Open Nacional Chillan 2023
                        </p>
                      </div>
                      <ListOfSale />
                      <div className="px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-2xl font-medium text-gray-900">
                            <p className="mr-5">Total</p>
                            <p className="font-bold mx-5">{calculateShowTotal(pedido)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-goldayuwn px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black sm:ml-3 sm:w-auto disabled:bg-gray-400 disabled:text-gray-700"
                    onClick={handleGenerateOrder}
                    disabled={sending}
                  >
                    {sending ? "Enviando":"Finalizar"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => openModal()}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
