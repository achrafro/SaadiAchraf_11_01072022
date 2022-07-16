import React, { useEffect, useState, useRef } from "react";
import Dropdown from "./Dropdown";
import leftarrow from "../style/img/arrow_left.png";
import rightarrow from "../style/img/arrow_right.png";
import Stars from "./Stars";

const Logementdetails = (props) => {
  const logement_info = useState(props);
  const actualImage = document.getElementsByClassName("imagesinslider");
  let NombreTotamdImages = logement_info[0].pictures.length;
  console.log(logement_info[0].pictures.length);

  const counter = document.getElementsByClassName("counter");
  const [isitOnepicture, setOnePicture] = useState(false);

  useEffect(() => {
    //   verif si y a une seul photo :

    if (NombreTotamdImages == 1) {
      setOnePicture(true);
    }
  }, []);

  let i = 0;

  useEffect(() => {
    actualImage[0].classList.add("showen");
    actualImage[0].classList.remove("hidden");
  }, []);


  const Movetoright = (x) => {
    if (i === 0) {
      actualImage[i + 1].classList.add("showen");
      actualImage[i + 1].classList.remove("hidden");
      actualImage[i].classList.remove("showen");
      actualImage[i].classList.add("hidden");

      i++;
      counter[0].textContent = i + 1;
    } else if (i < actualImage.length - 1) {
      actualImage[i + 1].classList.add("showen");
      actualImage[i + 1].classList.remove("hidden");
      actualImage[i].classList.add("hidden");
      actualImage[i].classList.remove("showen");
      i++;
      counter[0].textContent = i + 1;
    } else if (i === actualImage.length - 1) {
      actualImage[i].classList.add("hidden");
      actualImage[i].classList.remove("showen");
      i = 0;
      counter[0].textContent = 1;
      actualImage[i].classList.add("showen");
      actualImage[i].classList.remove("hidden");
    }
  };

  const movetoleft = (x) => {
    if (i === 0) {
      actualImage[i].classList.add("hidden");
      actualImage[actualImage.length - 1].classList.add("showen");
      i = actualImage.length - 1;
      counter[0].textContent = actualImage.length;
    } else if (i <= actualImage.length - 1) {
      counter[0].textContent = i;
      i--;
      actualImage[i].classList.add("showen");
      actualImage[i].classList.remove("hidden");

      actualImage[i + 1].classList.add("hidden");
      actualImage[i + 1].classList.remove("showen");
    }
  };

  return (

    
    <div className="logementdetails">
      <div className="slider">
        {!isitOnepicture && (
          <img src={leftarrow} className="left" onClick={movetoleft}></img>
        )}

        {!isitOnepicture && (
          <div className="nombresdimages">
            <div className="counter"> 1 </div> / {NombreTotamdImages}
          </div>
        )}

        {!isitOnepicture && (
          <img src={rightarrow} className="right" onClick={Movetoright}></img>
        )}

        {logement_info[0].pictures.map((item, index) => (
          <img src={item} className="imagesinslider hidden" key={index} />
        ))}
      </div>

      <div className="info_logement">
        <div className="logement_title"> {logement_info[0].title} </div>
        <div className="host">
          <div className="logement_host"> {logement_info[0].host.name}</div>
          <div className="logement_host_image">
            {" "}
            <img src={logement_info[0].host.picture}></img>
          </div>
        </div>
        <div className="logement_place"> {logement_info[0].location} </div>
        <div className="logement_tags">
          {" "}
          {logement_info[0].tags.map((tagItem, tagid) => (
            <ul key={tagid}>
              {" "}
              <li> {tagItem} </li>{" "}
            </ul>
          ))}
        </div>

        <div className="logement_stars">
          {" "}
          <Stars numberofstars={parseInt(logement_info[0].rating)}>
            {" "}
          </Stars>{" "}
        </div>

        <Dropdown
          key="2"
          title="Description"
          contenu={logement_info[0].description}
        />
        <Dropdown
          key="1"
          title="Équipements"
          contenu={logement_info[0].equipments.map((equipement, equiId) => (
            <ul key={equiId}>
              {" "}
              <li>{equipement}</li>
            </ul>
          ))}
        />
      </div>
    </div>
  );
};

export default Logementdetails;
