import React from "react";
import Lottie from "react-lottie"
import animationData from '../lotties/Header Lottie Animations/data.json'

const Home = ({ appType, tagLine, description, mainActionText }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    redererSetttings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <div id="home" className="bg-bgprimary">
      <div className="items-center lg:flex lg:flex-row lg:space-x-6 bg-bgprimary 2xl:container 2xl:mx-auto">
        <div className="lg:w-2/6 flex flex-col justify-center items-center">
          <p className=" mt-16 text-sm font-medium text-center text-lightblue lg:-ml-16 lg:-mt-10 lg:text-llg lg:font-medium lg:text-left">{appType}</p>
          <p className=" mt-2 uppercase text-llg font-body text-center font-bold text-white lg:pl-48 lg:text-xxl lg:mt-2 lg:font-bold lg:text-left">{tagLine}</p>
          <p className=" text-base  font-body text-center text-white opacity-75 lg:pl-24 xl:pl-36 2xl:pl-44 lg: mt-10 lg:text-base lg:text-left ">{description}</p>
          <div style={{ width: '200px', height: '70px' }} className="lg:ml-12 lg:w-1/5">
            <button
              style={{ background: 'linear-gradient(151.46deg, #01F2FF -14.78%, #0142FF 113.99%)' }}
              className="mx-4 lg:mx-0 w-4/5 h-3/5 mt-8 font-body font-medium text-lg text-center text-white transition-all rounded-small focus:ring2 lg:shadow-2xl lg:ring-2 lg:mt-12 lg:w-full lg:h-full"
            >
              {mainActionText}
            </button>

          </div>
        </div>
        <div className="lg:pl-12 lg:w-3/5 ">
          <Lottie
            options={defaultOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
