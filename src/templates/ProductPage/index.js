import React from 'react'
import { graphql, } from 'gatsby'
import Img from 'gatsby-image'
import '../../components/css/style.css';
import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <section>
        <div className='pb-8'>
          <div className='container mx-auto flex items-center flex-wrap py-4' id='left'>
            {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
                className='w-full md:w-1/4  p-6 flex flex-col hover:grow hover:shadow-lg'
              />
            ))}
          </div>
          <div id='right'>
            <p className='text-blue-700 text-lg font-serif font-bold py-0'>{product.title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              className='text-gray-800'
            />
            <ProductForm product={product} />
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
