import React,{useEffect,Fragment,useState} from 'react';
import axios from 'axios';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import data from '../data/data.json'

const Card = () => {
 
    return (
        <div className='card_container'>
<Fragment>
{data.map((item) => (

<NavLink key={item.id} to={'/Pages/logement/'+item.id} >
        <div className="card">
         <img src={item.cover} alt="" className='img_cover' />
        <p>{item.title}</p>

        </div>  
        </NavLink>
  ))}
</Fragment>
        </div>
    );
};

export default Card;