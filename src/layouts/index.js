import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
// import Navigation from '~/components/Navigation'


const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <>
        {/* <Navigation/>*/}
              <Header/>
              {children}

            </>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
