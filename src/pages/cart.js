import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import { useSpring, animated } from 'react-spring'

const CartPage = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div style={props}>
      <Container className="">
        <h1 className="josefin font-bold text-6xl text-blue-700">Cart</h1>
        <Cart />
      </Container>
    </animated.div>
  )
}

export default CartPage
