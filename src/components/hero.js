import React from 'react'
import {Link} from 'gatsby'

const Hero = () => {
  return (
    <>
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: '1600px',
          height: '32rem',
          backgroundImage:
            'url("https://www.booooooom.com/wp-content/uploads/2017/05/evaoleary38.jpg")',
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
            <h1 className="text-white font-bold font-serif text-6xl my-4 ">
              <span className="low-light-orange">Aaaaaa aaaaaa aaaa aaa</span>
            </h1>
            <Link
              className="text-xl text-white font-bold font-serif inline-block no-underline border-b border-blue-600 leading-relaxed hover:text-blue-400 hover:border-blue-400"
              to="#"
            >
             <span className='low-light-orange'>Products</span> 
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
