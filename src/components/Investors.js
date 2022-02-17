import React from 'react'
import animationSection4 from '../lotties/Section B/Section 1.json';
import animationSection5 from '../lotties/Section B/Section 2.json';
import animationSection6 from '../lotties/Section B/Section 3.json';
import Step from './Step';

const Investors = () => {
  const data = {
    step4: {
      title: 'Capital',
      heading: 'Efficient Staking',
      description: 'We secure sectors through strategic partnerships with venture capitalist groups for staking requirements, keeping infrastructure expenditure for client data the focus of our operation.',
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationSection4,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      alternate: true,
      oneline: true,
    },
    step5: {
      title: 'Redundancy',
      heading: 'Implementations',
      description: 'Infrastructure has been engineered to no single point of failure. Servers stay online 24/7.',
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationSection5,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      alternate: false,
      oneline: false,
    },
    step6: {
      title: 'Custom Monitoring ',
      heading: "Dashboard",
      description: "Self servicing daemons collect data and report it back to our infrastructure dashboard. Problems are solved before they occur with proper management and insight.",
      animation: {
        loop: true,
        autoplay: true,
        animationData: animationSection6,
        redererSetttings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      alternate: true,
      oneline: false,
    },
  }
  return (
    <div className='bg-bgsecondary'>

      <div className='justify-center bg-bgsecondary lg:flex lg:flex-col space-y-8 lg:pb-12 2xl:container 2xl:mx-auto'>
        <div className='bg-bgsecondary'>

          <Step
            title={data.step4.title}
            heading={data.step4.heading}
            description={data.step4.description}
            animation={data.step4.animation}
            alternate={data.step4.alternate}
            oneline={data.step4.oneline}
          />
        </div>
        <div className='bg-bgsecondary'>

          <Step
            title={data.step5.title}
            heading={data.step5.heading}
            description={data.step5.description}
            animation={data.step5.animation}
            alternate={data.step5.alternate}
            oneline={data.step5.oneline}
          />
        </div>
        <div className='bg-bgsecondary'>

          <Step
            title={data.step6.title}
            heading={data.step6.heading}
            description={data.step6.description}
            animation={data.step6.animation}
            alternate={data.step6.alternate}
            oneline={data.step6.oneline}
          />
        </div>
      </div>
    </div>
  )
}

export default Investors
