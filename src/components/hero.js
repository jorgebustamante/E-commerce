import React from 'react'
import {Link} from 'gatsby'

const Hero = () => {
  return (
    <>
      <section
        className="w-full mx-auto flex py-12 md:items-center bg-red-300"
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6">
            <p className="text-blue-800 font-serif my-4 ">
              <span className="spectral text-6xl">Treat your bad self</span>
            </p>
            <Link
              className="text-xl text-white font-bold font-serif inline-block no-underline border-b border-blue-600 leading-relaxed hover:text-blue-400 hover:border-blue-400"
              to="#"
            >
             <span className='low-light-blue'>Products</span> 
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
