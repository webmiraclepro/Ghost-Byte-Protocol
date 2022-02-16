import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Priorities from './components/Priorities';
import Clients from './components/Clients';
import Investors from './components/Investors';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

import logo from "./assets/logo.png";


function App() {
  const data = {
    home:{
      appType: 'Ghost Byte',
      tagLine: 'FILECOIN STORAGE PROVIDER',
      description: 'Providing fast, secure, redundant data storage for our most valuable clients.',
      mainActionText: 'Explore',
    },
    contact: {
      actionText: 'Investors and Client Contact Information',
      email: 'TrevorKSmith@ghostbyte.tech',
      phone: '202-251-7596',
      discord: 'Trevor K Smith - Ghost Byte#2442',
      mainActionText: 'Email Form',
      extraActionText: 'Explore',
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Poppins font to everything (body)
    
    <div className="box-border">
      <div className="flex flex-col">
        
        <Navbar logo={logo}/>
        <Home 
          appType={data.home.appType}
          tagLine={data.home.tagLine}
          description={data.home.description}
          mainActionText={data.home.mainActionText}
        />
        
        <div id="priorities" className="pt-20 pb-12 text-priorities uppercase font-body text-center text-white lg:font-bold bg-bgsecondary">PRIORITIES </div>
        <Priorities/>

        <div id="clients" className="pt-20 pb-12 text-priorities uppercase font-body text-center text-white lg:font-bold bg-bgprimary">CLIENTS </div>
        <Clients/>

        <div id="investors" className="pt-20 pb-12 text-priorities uppercase font-body text-center text-white lg:font-bold bg-bgsecondary">INVESTORS </div>
        <Investors />
       
        <div id="partners" className="pt-20 pb-12 text-priorities uppercase font-body text-center text-white lg:font-bold bg-bgprimary">PARTNERS</div>
        <Partners/>

        <Contact 
          actionText={data.contact.actionText}
          email={data.contact.email}
          phone={data.contact.phone}
          discord={data.contact.discord}
          mainActionText={data.contact.mainActionText}
          extraActionText={data.contact.extraActionText}
        />

        <Footer logo={logo}/>
      </div>
    </div>
  );
}

export default App;
