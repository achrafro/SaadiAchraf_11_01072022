import React from 'react';
import etoile from  '../style/img/star.png';
import etoile_gris  from '../style/img/star_gris.png';

const Stars = (props) => {
const numberofstart = props.numberofstars;
console.log(numberofstart);  

switch (numberofstart) {
 case 1:
   return (
   <>    
     <img src={etoile} /> 
   <img src={etoile_gris} /> 
   <img src={etoile_gris} /> 
   <img src={etoile_gris} /> 
   <img src={etoile_gris} /> 
</>
)
   break;
   case 2:
   return (
   <>    
     <img src={etoile} /> 
     <img src={etoile} /> 
   <img src={etoile_gris} /> 
   <img src={etoile_gris} /> 
   <img src={etoile_gris} /> 
</>
)
   break;
   case 3:
     return (
     <>    
      <img src={etoile} /> 
     <img src={etoile} />  
     <img src={etoile} /> 
     <img src={etoile_gris} /> 
     <img src={etoile_gris} /> 
 </>
 )
     break;
     case 4:
       return (
       <>    
     <img src={etoile} /> 
     <img src={etoile} /> 
     <img src={etoile} /> 
     <img src={etoile} /> 
     <img src={etoile_gris} /> 
   </>
   )
       break;

   case 5:
     return(
       <> 
    <img src={etoile} /> 
    <img src={etoile} /> 
    <img src={etoile} />  
    <img src={etoile} /> 
    <img src={etoile} /> 
</>
      )
     break;
 default:
   break;
}

    return (
        <div>
            
        </div>
    );
};

export default Stars;