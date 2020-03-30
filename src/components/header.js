import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import StoreContext from '~/context/StoreContext'
import { Link } from 'gatsby'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Header = () => {
  const [hasItems, quantity] = useQuantity()

  return (
  
      <nav id="header" className="w-full z-30 top-0 py-2 shadow-md bg-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <div className="order-1 md:order-2">
            <Link
              className="flex items-center tracking-wide josefin text-blue-700 text-xl hover:underline"
              href="/"
            >
              <svg
                className="fill-current text-blue-700 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              E-commerce
            </Link>
          </div>
          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <Link
              className="pl-3 block items-center text-blue-700"
              to="/cart"
            >
              {hasItems &&
						<span className='bg-red-500 rounded-full m-0 px-2 text-sm font-bold text-white'>
							{quantity}
						</span>
					}
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
  
  )
}
export default Header
