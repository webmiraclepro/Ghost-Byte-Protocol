import React, { useState, useEffect, useRef } from "react";

import close_icon from '../assets/close_icon.svg';

function useOutsideAlerter(ref, setOpenNav) {
  useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNav(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Navbar = ({ logo }) => {

  const [openNav, setOpenNav] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenNav);

  return (
    <div className="bg-bgprimary">
      <div className="flex flex-row items-center justify-between sticky top-0 h-28 bg-bgprimary 2xl:container 2xl:mx-auto">
        <a href="/" className="pl-8 logo lg:ml-28">
          <img height="100%" width="100%" src={logo} alt="logo" />
        </a>

        {/* Mobile Nav */}

        <a onClick={() => setOpenNav(true)} className="sm:absolute sm:right-14 hamburger hover:text-navhover lg:invisible">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z" fill="#737373" /></svg>
        </a>

        {
          openNav &&
          <div ref={wrapperRef} className="absolute top-0 w-full h-48 bg-bgprimary">
            <div onClick={() => setOpenNav(false)} className="absolute right-12 top-9"><img height="30" width="30" src={close_icon} alt="" /></div>
            <div className="flex flex-col items-center justify-around h-full pt-5 pb-5">
              <a onClick={() => setOpenNav(false)} href="/" className="text-lg font-body text-white transition-all hover:text-navhover">Home</a>
              <a onClick={() => setOpenNav(false)} href="#priorities" className="text-lg font-body text-white transition-all hover:text-navhover">Priorities</a>
              <a onClick={() => setOpenNav(false)} href="#clients" className="text-lg font-body text-white transition-all hover:text-navhover">Clients</a>
              <a onClick={() => setOpenNav(false)} href="#investors" className="text-lg font-body text-white transition-all hover:text-navhover">Investors</a>
              <a onClick={() => setOpenNav(false)} href="#partners" className="text-lg font-body text-white transition-all hover:text-navhover">Partners</a>
              <a onClick={() => setOpenNav(false)} href="#contact" className="text-lg font-body text-white transition-all hover:text-navhover">Contact</a>
              <a onClick={() => setOpenNav(false)} href="#contact" className="text-lg font-body text-white transition-all hover:text-navhover">Discord</a>
              <div style={{ width: '120px', height: '45px' }}>
                <button
                  style={{ background: 'linear-gradient(151.46deg, #01F2FF -14.78%, #0142FF 113.99%)' }}
                  className="font-body font-medium text-base text-center text-white transition-all rounded-small focus:ring2 shadow-2xl ring-2 w-full h-full"
                >
                  Sign In
                </button>

              </div>
            </div>
          </div>
        }


        {/* Desktop Nav */}

        <div className="flex justify-around w-3/5 mr-12 lg:mr-32 lg:visible sm:invisible">
          <a href="#home" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Home</a>
          <a href="#priorities" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Priorities</a>
          <a href="#clients" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Clients</a>
          <a href="#investors" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Investors</a>
          <a href="#partners" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Partners</a>
          <a href="#contact" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Contact</a>
          <a href="#contact" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Discord</a>
          <div style={{ width: '120px', height: '45px' }}>
            <button
              style={{ background: 'linear-gradient(151.46deg, #01F2FF -14.78%, #0142FF 113.99%)' }}
              className="font-body font-medium text-base text-center text-white transition-all rounded-small focus:ring2 shadow-2xl ring-2 lg:w-full lg:h-full -mt-4"
            >
              Sign In
            </button>

          </div>
        </div>

      </div>
    </div>

  );
};

export default Navbar;
