import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import StoreContext from '~/context/StoreContext'
import '../components/css/style.css'

const ProductList = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )
  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <>
    
      <section className="py-4">
        <div className="container mx-auto grid grid-cols-12 gap-4 py-4">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1 col-span-12">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2">
              <p
                className="uppercase tracking-wide no-underline hover:no-underline font-serif font-medium text-blue-600 text-6xl "
                id="store"
              >
                Store
              </p>
            </div>
          </nav>

          {allShopifyProduct.edges ? (
            allShopifyProduct.edges.map(
              ({
                node: {
                  id,
                  handle,
                  title,
                  images: [firstImage],
                  variants: [firstVariant],
                },
              }) => (
                <div
                  className="md:col-span-3 col-span-6 bg-white flex flex-col hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  key={id}
                >
                  <Link className='' to={`/product/${handle}/`}>
                    {firstImage && firstImage.localFile && (
                      <Img
                        className=""
                        fluid={firstImage.localFile.childImageSharp.fluid}
                        alt={handle}
                      />
                    )}
                    <div className="pt-3 flex items-center justify-between">
                      <p className="text-blue-700 text-lg ">
                        {title}
                      </p>
                    </div>
                    <p className="pt-1 text-gray-700 text-lg font-bold">
                      {getPrice(firstVariant.price)}
                    </p>
                  </Link>
                </div>
              )
            )
          ) : (
            <p>No Products found!</p>
          )}
        </div>
      </section>
    </>
  )
}
export default ProductList
