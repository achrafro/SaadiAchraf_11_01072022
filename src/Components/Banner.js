import React from 'react';
import bannerurl from '../style/img/banner_img.png'

const Banner = () => {
    return (
        <div className='banner'>
         <img src={bannerurl} className='banner_img'></img>  
         <p className='centred'>Chez vous, partout et ailleurs</p>  
        </div>
    );
};

export default Banner;