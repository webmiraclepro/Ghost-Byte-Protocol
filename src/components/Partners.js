import React from 'react'
import block4 from '../assets/block4.png';
import block5 from '../assets/block5.png';
import block6 from '../assets/block6.png';

const Partners = () => {
  return (
    <div className='bg-bgprimary'>
      <div className='justify-center items-center bg-bgprimary flex flex-col space-y-4 lg:flex-row lg:space-x-24 pb-32 2xl:container 2xl:mx-auto'>
        <img className=" mt-10 lg:mt-0 lg:w-fit lg:h-fit" src={block4} alt="" />
        <img className=" lg:w-fit lg:h-fit" src={block5} alt="" />
        <img className=" lg:w-fit lg:h-fit" src={block6} alt="" />
      </div>
    </div>
  )
}

export default Partners
