import React from 'react'

import animationBlock1 from '../lotties/Icons Animations/Icon 1.json'
import animationBlock2 from '../lotties/Icons Animations/Icon 2.json'
import animationBlock3 from '../lotties/Icons Animations/Icon 3.json'

import Block from './Block';

const Priorities = () => {
  const data = {
    block1: {
      heading: 'Immediate Contract Creation',
      description: 'Providing rapid seal times for new and snap deals',
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationBlock1,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    },
    block2: {
      heading: 'Low Latency and Scaling Bandwidth',
      description: 'Storing and retrieving data at the quickest rates',
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationBlock2,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    },
    block3: {
      heading: '100% Uptime and Availability',
      description: 'Keeping data online and accessible around the clock',
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationBlock3,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    },
  }

  return (
    <div className='bg-bgsecondary'>

      <div className='justify-center bg-bgsecondary flex flex-col items-center lg:flex-row lg:space-x-8 pb-24 2xl:container 2xl:mx-auto'>
        <div style={{ width: '370px', height: '320px' }}>
          <Block
            heading={data.block1.heading}
            description={data.block1.description}
            animation={data.block1.animation}
          />
        </div>
        <div style={{ width: '370px', height: '320px' }}>
          <Block
            heading={data.block2.heading}
            description={data.block2.description}
            animation={data.block2.animation}
          />
        </div>
        <div style={{ width: '370px', height: '320px' }}>
          <Block
            heading={data.block3.heading}
            description={data.block3.description}
            animation={data.block3.animation}
          />
        </div>

      </div>
    </div>
  )
}

export default Priorities
