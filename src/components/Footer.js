import React from "react";

import imgfooter1 from '../assets/footer1.png';
import imgfooter2 from '../assets/footer2.png';
import imgfooter3 from '../assets/footer3.png';

const Footer = ({ logo }) => {
  return (
    <div className="bg-bgsecondary">
      <div id="contact" className="flex flex-col lg:flex-row flex-wrap items-center justify-around p-10 bg-bgsecondary 2xl:container 2xl:mx-auto">
        <a href="/" style={{ widht: '210px', height: '70px' }} className="w-1/2 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
          <img className="lg:w-full lg:h-full" src={logo} alt="logo" />
        </a>
        <div className="flex lg:space-x-2 sm:invisible lg:visible lg:flex-row xl:space-x-8 items-center justify-around w-1/3 pt-5 lg:pt-0 lg:w-1/3 ">
          <a href="#home" className="text-xs md:text-sm lg:text-base font-body text-white transition-all font-normal hover:text-navhover">Home</a>
          <a href="#priorities" className="text-xs md:text-sm lg:text-base font-body text-white transition-all font-normal hover:text-navhover">Priorities</a>
          <a href="#clients" className="text-xs md:text-sm lg:text-base font-body text-white transition-all font-normal hover:text-navhover">Clients</a>
          <a href="#investors" className="text-xs md:text-sm lg:text-base font-body text-white transition-all font-normal hover:text-navhover">Investors</a>
          <a href="#partners" className="text-xs md:text-sm lg:text-base font-body text-white transition-all font-normal hover:text-navhover">Partners</a>
          <a href="#contact" className="text-xs md:text-sm lg:text-base font-body text-white transition-all font-normal hover:text-navhover">Contact</a>
          <a href="#contact" className="text-xs md:text-sm lg:text-base font-body text-white transition-all font-normal hover:text-navhover">Discord</a>
        </div>
        <div className="mt-10 flex flex-row space-x-4 justify-center items-center lg:mt-0 w-1/5">
          <img style={{ width: '44px', height: '44px' }} className="lg:w-full lg:h-full" src={imgfooter1} alt='' />
          <img style={{ width: '44px', height: '44px' }} className="lg:w-full lg:h-full" src={imgfooter2} alt='' />
          <img style={{ width: '44px', height: '44px' }} className="lg:w-full lg:h-full" src={imgfooter3} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
