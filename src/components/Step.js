import React from 'react'
import Lottie from 'react-lottie'

const Step = ({ title, heading, description, alternate, oneline, animation = {} }) => {
  const row = "lg:items-center lg:flex lg:flex-row lg:justify-center lg:mt-8 2xl:container 2xl:mx-auto";
  const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center lg:mt-8 2xl:container 2xl:mx-auto";
  const doublerow = "text-navhover block";
  const onerow = "text-navhover inline pr-2";
  const divpReverse = "lg:w-2/6 lg:pl-4 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start xl:pl-24 2xl:pl-44";
  const divp = "lg:w-2/6 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start";
  const divlReverse = "pr-8 lg:-ml-24 lg:mr-0 justify-center lg:w-fit lg:h-fit"
  const divl = "pr-8 lg:ml-0 lg:mr-0 justify-center lg:w-fit lg:h-fit"

  return (
    <div className={alternate ? row : rowReverse}>
      <div className={alternate ? divp : divpReverse}>
        <div id="divider" className="rounded-full ring-4 ring-dividercolor justify-end w-full lg:w-1/12 "></div>
        <p className="p-5 text-5xl font-body leading-relaxed text-center lg:pb-4 lg:text-steptitle lg:pl-0 lg:font-bold lg:text-left">
          <span className={oneline ? onerow : doublerow}>{title}</span>
          <span className='text-white'>{heading}</span>
        </p>
        <p className="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-stepdescription lg:w-5/6 lg:pb-0 lg:text-base lg:text-left lg:pl-0">{description}</p>
      </div>
      <div className={alternate ? divl : divlReverse}>
        <Lottie
          width={420} height={400}
          options={animation} />
      </div>
    </div>
  )
}

export default Step
