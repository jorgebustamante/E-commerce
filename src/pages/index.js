import React from 'react'
import SEO from '~/components/seo'
import Hero from '../components/hero'
import ProductList from '../components/productList'
// import Footer from '../components/footer'
import '../components/css/style.css'
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ProductList />
    {/* <Footer /> */}



  </>
)

export default IndexPage
