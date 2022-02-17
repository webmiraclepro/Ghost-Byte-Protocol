import React from 'react'
import animationSection1 from '../lotties/Section A/Section 1.json';
import animationSection2 from '../lotties/Section A/Section 2.json';
import animationSection3 from '../lotties/Section A/Section 3.json';

import Step from './Step';

const Clients = () => {
  const data = {
    step1: {
      title: 'Enterprise',
      heading: 'Infrastructure',
      description: 'Our dedicated storage provider operations house some of the most robust enterprise equipment available to ensure proper delivery of client data.',
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationSection1,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      alternate: true,
      oneline: true,
    },
    step2: {
      title: 'Global',
      heading: 'Accessibility',
      description: 'Operation connects directly to core backbone network infrastructures to ensure multiple routes to data are always accessible in real time with the least latency. ',
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationSection2,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      alternate: false,
      oneline: true,
    },
    step3: {
      title: 'Competitive Data',
      heading: "Exchange Rates",
      description: "Effective engineering and architecture of hardware enables us to provide some of the lowest data exchange rates available across the network.",
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationSection3,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      alternate: true,
      oneline: false,
    },
  }
  return (
    <div className='bg-bgprimary'>

      <div className='justify-center bg-bgprimary lg:flex lg:flex-col 2xl:container 2xl:mx-auto'>
        <div className='bg-bgprimary'>
          <Step
            title={data.step1.title}
            heading={data.step1.heading}
            description={data.step1.description}
            animation={data.step1.animation}
            alternate={data.step1.alternate}
            oneline={data.step1.oneline}
          />
        </div>
        <div className='bg-bgprimary'>
          <Step
            title={data.step2.title}
            heading={data.step2.heading}
            description={data.step2.description}
            animation={data.step2.animation}
            alternate={data.step2.alternate}
            oneline={data.step2.oneline}
          />
        </div>
        <div className='bg-bgprimary'>
          <Step
            title={data.step3.title}
            heading={data.step3.heading}
            description={data.step3.description}
            animation={data.step3.animation}
            alternate={data.step3.alternate}
            oneline={data.step3.oneline}
          />
        </div>
      </div>
    </div>
  )
}

export default Clients
