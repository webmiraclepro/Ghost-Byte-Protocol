import React from 'react'
import Rectangle_1 from '../assets/Rectangle_1.png';
import Rectangle_2 from '../assets/Rectangle_2.png';
import Rectangle_3 from '../assets/Rectangle_3.png';
import Step from './Step';

const Clients = () => {
  const data = {
    step1: {
      title: 'Enterprise',
      heading: 'Infrastructure',
      description: 'Our dedicated storage provider operations house some of the most robust enterprise equipment available to ensure proper delivery of client data.',
      img: Rectangle_1,
      alternate: true,
      oneline: true,
    },
    step2: {
      title: 'Global',
      heading: 'Accessibility',
      description: 'Operation connects directly to core backbone network infrastructures to ensure multiple routes to data are always accessible in real time with the least latency. ',
      img: Rectangle_2,
      alternate: false,
      oneline: true,
    },
    step3: {
      title: 'Competitive Data',
      heading: "Exchange Rates",
      description: "Effective engineering and architecture of hardware enables us to provide some of the lowest data exchange rates available across the network.",
      img: Rectangle_3,
      alternate: true,
      oneline: false,
    },
  }
    return (
      <div className='justify-center bg-bgprimary lg:flex lg:flex-col space-y-8'>
        <div className='bg-bgprimary'>
          <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          oneline={data.step1.oneline}
          />
        </div>
        <div className='bg-bgprimary'>
          <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          oneline={data.step2.oneline}
          />
        </div>
        <div className='bg-bgprimary'>
          <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          oneline={data.step3.oneline}
          />
        </div>
      </div>
    )
}

export default Clients
