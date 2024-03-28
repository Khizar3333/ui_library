import React from 'react'
import Button from './Button'


const Hero = () => {
  return (
    <section className="section text-gray-600 body-font ">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow mt-4 md:w-1/2 lg:pr-24 md:pr-16 flex text-white flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Welcome to the LinkedIn Group for Develop
          
        
        </h1>
        <p className="mb-8 leading-relaxed w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, porro quidem. Commodi, harum. Deleniti nihil ullam dicta. Minima quibusdam facere iusto, in voluptatem cupiditate doloribus quaerat eos magni, quidem repudiandae.
        </p>
        <div className="flex justify-center">
         <Button text="Read more"/>
          
        </div>
      </div>
      
    </div>
  </section>
  
  )
}

export default Hero
