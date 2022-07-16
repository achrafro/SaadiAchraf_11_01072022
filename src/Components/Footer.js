import React from 'react';
import bannerfooter from '../style/img/logo_footer.svg' ;

const Footer = () => {
    return (
      
            <div className="footer">
            <img src={bannerfooter}  />    
             <h3>  © 2022 Kasa. All rights reserved</h3>
        </div>
    );
};

export default Footer;