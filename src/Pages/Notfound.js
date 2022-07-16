import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='notfound'> 
           <Header></Header>
           <div className="notfoundmessage">
           <h1>404</h1>
           <p>Oups! La page que vous demandez n'existe pas.</p>
           <p><NavLink to='/' className='navlinkk'> Retourner sur la page d’accueil</NavLink></p>


           </div>
 
         </div>
    );
};

export default Notfound;