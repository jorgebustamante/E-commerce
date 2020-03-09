import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import '../../components/css/style.css';
import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <section className=''>
        <Link to='/' className=''>Back to catalog</Link>
        <div className='pb-8 mx-2 md:mx-16 grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-8 flex flex-no-wrap md:flex-row overflow-x-scroll md:overflow-hidden py-4' id='left'>
            {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
                className='w-64 md:w-1/3 mx-2 shadow-md md:shadow-none flex-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
              />
            ))}
          </div>
          <div className='col-span-12 md:col-span-4 mx-auto py-4 flex flex-col' id='right'>
            <div className='flex-1'>
            <p className='text-blue-700 text-lg font-serif font-bold pb-2'>{product.title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              className='text-gray-800'
            />
            </div>
            <div className='flex-1'>
            <ProductForm product={product} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
