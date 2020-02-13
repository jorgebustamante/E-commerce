import React from 'react'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4">
                  I used to have to go downtown to buy illegal or stolen goods like many low income individuals--
                  Now we dont have to, thanks to Illegal Commerce. 
                  Illegal Commerce aims to make buying illegal goods as simple as possible.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-800">Social</h3>
                <ul className="list-reset items-center pt-3">
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black hover:underline py-1"
                      to="#"
                    >
                      Add social links
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;
