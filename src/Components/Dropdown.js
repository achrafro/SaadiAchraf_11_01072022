import React, { useState } from "react";
import toparrow from '../style/img/arrow_top.png' ;
import bottomarrow from '../style/img/arrow_bottom.png';


const Dropdown = (props) => {
  const arrowBottom = document.getElementsByClassName("arrow_bottom");
  const arrowTop = document.getElementsByClassName("arrow_top");
  const [etat_bar, setEtat] = useState(true);

  const HandleClick = () => {
    setEtat(!etat_bar);
  };

  return (
    <div className="dropdown_container" >
      <div className="dropdown_bar">
        <h2> {props.title} </h2>
        {
          <img
            src={bottomarrow}
            className={`arrow_bottom ${etat_bar ? "show_arrow" : "hide_arrow"}`}
            onClick={HandleClick}
          />
        }

        {
          <img
            src={toparrow}
            className={`arrow_top ${etat_bar ? "hide_arrow" : "show_arrow"}`}
            onClick={HandleClick}
          />
        }
      </div>

      <div
        className={`dropdown_background ${
          etat_bar ? "hide_arrow" : "show_arrow"
        }`}
      >
        <div key="1"> {props.contenu}</div>
      </div>
    
    </div>
  );
};

export default Dropdown;
