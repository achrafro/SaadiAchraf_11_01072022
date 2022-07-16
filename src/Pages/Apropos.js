import React from 'react';
import Banner_about from '../Components/Banner_about';
import Dropdown from '../Components/Dropdown';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
 

const Apropos = () => {
    return (
       <>
        <Header></Header>
         <div className='Aprop'>
        <Banner_about></Banner_about>
        <div className="dropdownInAbout">
        <Dropdown title="Fiabilité" /> 
        <Dropdown title="Respect" /> 
        <Dropdown title="Service" /> 
        <Dropdown title="Responsabilité" /> 

        </div>
     

        <Footer></Footer>
        </div>
        </>
    );
};

export default Apropos;