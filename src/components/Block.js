import React from 'react'
import Lottie from 'react-lottie'

const Block = ({ heading, description, animation = {} }) => {
  return (
    <div className="w-fit h-fit mx-10 lg:mx-0 bg-bgblock shadow-block border-2 border-borderblock rounded-large flex flex-col justify-center items-center h-5/6 md: w-4/5 lg:w-full lg:h-full 2xl:container 2xl:mx-auto">
      <div className='mt-8' />
      <Lottie options={animation} />
      <p className="p-5 font-body text-center text-white lg:pb-4 lg:font-bold lg:text-blockheading lg:px-20">{heading}</p>
      <div style={{ width: '280px', height: '34px' }} className="lg:ml-[79px] lg:mr-[80px] lg:mb-20">
        <p className="lg:pl-10 lg:pr-10 text-center text-blockdes  lg:pb-20 w-full h-full lg:text-blockdes ">{description}</p>
      </div>
    </div>
  )
}

export default Block
