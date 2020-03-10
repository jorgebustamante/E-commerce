import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />

      <div className="bg-gray-100">
        <Header />
        {children}
      </div>

    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
