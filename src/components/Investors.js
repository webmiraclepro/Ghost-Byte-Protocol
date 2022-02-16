import React from 'react'
import Rectangle_4 from '../assets/Rectangle_4.png';
import Rectangle_5 from '../assets/Rectangle_5.png';
import Rectangle_6 from '../assets/Rectangle_6.png';
import Step from './Step';

const Investors = () => {
  const data = {
    step4: {
      title: 'Capital',
      heading: 'Efficient Staking',
      description: 'We secure sectors through strategic partnerships with venture capitalist groups for staking requirements, keeping infrastructure expenditure for client data the focus of our operation.',
      img: Rectangle_4,
      alternate: true,
      oneline: true,
    },
    step5: {
      title: 'Redundancy',
      heading: 'Implementations',
      description: 'Infrastructure has been engineered to no single point of failure. Servers stay online 24/7.',
      img: Rectangle_5,
      alternate: false,
      oneline: false,
    },
    step6: {
      title: 'Custom Monitoring ',
      heading: "Dashboard",
      description: "Self servicing daemons collect data and report it back to our infrastructure dashboard. Problems are solved before they occur with proper management and insight.",
      img: Rectangle_6,
      alternate: true,
      oneline: false,
    },
  }
    return (
      <div className='justify-center bg-bgsecondary lg:flex lg:flex-col space-y-8 lg:pb-12'>
          <div className='bg-bgsecondary'>

            <Step
            title={data.step4.title}
            heading={data.step4.heading}
            description={data.step4.description}
            img={data.step4.img}
            alternate={data.step4.alternate}
            oneline={data.step4.oneline}
            />
          </div>
          <div className='bg-bgsecondary'>

            <Step
            title={data.step5.title}
            heading={data.step5.heading}
            description={data.step5.description}
            img={data.step5.img}
            alternate={data.step5.alternate}
            oneline={data.step5.oneline}
            />
          </div>
          <div className='bg-bgsecondary'>

            <Step
            title={data.step6.title}
            heading={data.step6.heading}
            description={data.step6.description}
            img={data.step6.img}
            alternate={data.step6.alternate}
            oneline={data.step6.oneline}
            />
          </div>
      </div>
    )
}

export default Investors
