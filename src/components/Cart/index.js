import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <>
      <div className="container mx-auto flex items-center flex-wrap py-4">
        {line_items}
      </div>
      <div className='pb-8'>
        <h2 className='font-bold text-xl text-gray-800'>Subtotal</h2>
        <p className='pt-1 text-gray-700 text-base'>$ {checkout.subtotalPrice}</p>
        <br />
        <h2 className='font-bold text-xl text-gray-800'>Taxes</h2>
        <p className='pt-1 text-gray-700 text-base'>$ {checkout.totalTax}</p>
        <br />
        <h2 className='font-bold text-xl text-gray-800'>Total</h2>
        <p className='pt-1 text-gray-700 text-base'>$ {checkout.totalPrice}</p>
        <br />
        <button onClick={handleCheckout} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Check out</button>
      </div>
    </>
  )
}

export default Cart
