import React from "react";

import imgEmail from '../assets/email.png'; 
import imgPhone from '../assets/phone.png'; 
import imgDiscord from '../assets/discord.png'; 
import {ContactUs} from './Email'


const Contact = ({actionText, email, phone, discord, mainActionText, extraActionText}) => {
  return (
    <div id="contact">
      <div className="items-center justify-center flex flex-col lg:pb-24 lg:pt-24  lg:flex-row lg:space-x-12 bg-bgsecondary">
        <div className="w-2/6 flex flex-col items-center justify-center space-y-6 lg:items-start">
          <div>
            <p className="mt-16 text-llg font-semibold text-center text-white  lg:pr-12 lg:mb-10 lg:mt-1 lg:text-contactAction lg:font-semibold lg:text-left">{actionText}</p>
          </div>
          <div>
            <img className="mx-24 lg:mx-0 w-fit h-fit justify-center" src={imgEmail} alt=''/>
            <p className="mt-2 text-base font-body text-center font-medium text-white lg:text-contactDes lg:mb-8  lg:font-medium lg:text-left">{email}</p>
          </div>
          <div>
            <img className="mx-10 lg:mx-0 w-fit h-fit justify-center " src={imgPhone} alt=''/>
            <p className="mt-2 text-base font-body text-center font-medium text-white lg:text-contactDes lg:mb-8  lg:font-medium lg:text-left">{phone}</p>
          </div>
          <div>
            <img className="mx-10 lg:mx-0 w-fit h-fit justify-center" src={imgDiscord} alt=''/>
            <p className="mt-2 text-base font-body text-center font-medium text-white lg:text-contactDes lg:mb-8 lg:font-medium lg:text-left">{discord}</p>

          </div>
        </div>

        <div className="w-full lg:w-2/6 flex flex-col justify-center items-center lg:items-start space-y-8 lg:pb-24 lg:pt-24">
          <p className="mt-4 text-base font-body text-center font-medium text-white lg:text-contactTitle lg:mt-2 lg:font-semibold lg:text-left">{mainActionText}</p>
          <div style={{width: '473px', height: '70px'}}>
            <input type='email' id="sender" className=" ml-24 lg:ml-0 h-4/5 w-3/5 lg:w-full lg:h-full bg-bgblock shadow-block text-white opacitey-50 p-4 rounded-large justify-center" placeholder="Email"></input>
          </div>
          <div style={{width: '473px', height: '70px'}}>
            <input type='text' id="subject" className="ml-24 lg:ml-0  h-4/5 w-3/5 lg:w-full lg:h-full bg-bgblock shadow-block text-white opacitey-50 p-4 rounded-large" placeholder="Subject"></input>
          </div>
          <div style={{width: '473px', height: '200px'}}>
            <textarea  type='text' id="content" cols='40' rows='5' className="ml-24 lg:ml-0 h-4/5 w-3/5 lg:w-full lg:h-full bg-bgblock shadow-block text-white opacitey-50 p-4 rounded-large" placeholder="Content..."></textarea >
          </div>
          <div style={{width: '473px', height: '70px'}}>
            <button
            onClick={()=>ContactUs()}
            style={{background: 'linear-gradient(151.46deg, #01F2FF -14.78%, #0142FF 113.99%)'}}
              className="ml-24 lg:ml-0 h-4/5 w-3/5 capitalize font-body font-medium text-contactDes text-center text-white transition-all rounded-large focus:ring2 lg:shadow-2xl lg:ring-2 lg:w-full lg:h-full"
            >
              {extraActionText}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
