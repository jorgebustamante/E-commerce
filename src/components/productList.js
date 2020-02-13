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
      <section className="bg-white py-4">
        <div className="container mx-auto flex items-center flex-wrap py-4">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
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
                  className="w-full md:w-1/4  p-6 flex flex-col hover:grow hover:shadow-lg"
                  key={id}
                >
                  <Link to={`/product/${handle}/`}>
                    {firstImage && firstImage.localFile && (
                      <Img
                        className=""
                        fluid={firstImage.localFile.childImageSharp.fluid}
                        alt={handle}
                      />
                    )}
                    <div className="pt-3 flex items-center justify-between">
                      <p className="text-blue-700 text-lg font-serif font-bold">
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
