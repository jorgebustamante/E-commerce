import React from 'react'
import { useSpring, animated } from 'react-spring'

const Hero = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <>
      <section
        className="w-full mx-auto flex py-12 md:items-center bg-red-300"
        style={props}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6">
            <animated.p className="text-blue-800 josefin my-4" style={props}>
              <span className="josefin text-6xl">Treat your bad self</span>
            </animated.p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
