import React from 'react'
import block1 from '../assets/block1.png';
import block2 from '../assets/block2.png';
import block3 from '../assets/block3.png';
import Block from './Block';

const Priorities = () => {
  const data = {
    block1: {
      heading: 'Immediate Contract Creation',
      description: 'Providing rapid seal times for new and snap deals',
      img: block1,
    },
    block2: {
      heading: 'Low Latency and Scaling Bandwidth',
      description: 'Storing and retrieving data at the quickest rates',
      img: block2,
    },
    block3: {
      heading: '100% Uptime and Availability',
      description: 'Keeping data online and accessible around the clock',
      img: block3,
    },
  }
    return (
      <div className='justify-center bg-bgsecondary flex flex-col items-center lg:flex-row lg:space-x-8 pb-24'>
        <div style={{width:'370px', height: '320px'}}> 
          <Block
          heading={data.block1.heading}
          description={data.block1.description}
          img={data.block1.img} />
        </div>
        <div style={{width:'370px', height: '320px'}}>
          <Block
          heading={data.block2.heading}
          description={data.block2.description}
          img={data.block2.img} />
        </div>  
        <div style={{width:'370px', height: '320px'}}>
          <Block
          heading={data.block3.heading}
          description={data.block3.description}
          img={data.block3.img} />
        </div>
        
      </div>
    )
}

export default Priorities
