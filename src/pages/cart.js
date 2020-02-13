import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'

const CartPage = () => (
  <Container>
    <h1 className='font-serif font-bold text-6xl text-blue-700'>Cart</h1>
    <Cart />
  </Container>
)

export default CartPage
