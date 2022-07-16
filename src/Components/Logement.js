import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "./Footer";
import Logementdetails from "./Logementdetails";
import Notfound from "../Pages/Notfound";

const Logement = () => {
  const idd = useParams().id;
  const newdata = data.filter((item) => item.id === idd);
  console.log(newdata.length);
  const [therisadata, setData] = useState(false);
  // verifier s'il y a des donnés :
  useEffect(() => {
    if (newdata.length == 0) {
      setData(false);
      console.log("emptyy");
    } else {
      setData(true);

      console.log("full");
    }
  }, []);

  return (
    <div className="logement">
      {/* affichage si il y a des donnsés */}
      {!therisadata ? (
        <Notfound></Notfound>
      ) : 
      (
        <>
          <Header />
          <Logementdetails
            title={newdata[0].title}
            cover={newdata[0].cover}
            pictures={newdata[0].pictures}
            description={newdata[0].description}
            host={newdata[0].host}
            rating={newdata[0].rating}
            equipments={newdata[0].equipments}
            tags={newdata[0].tags}
            location={newdata[0].location}
            key={newdata[0].id}
          />

          <Footer />
        </>
      )
      
      }
    </div>
  );
};

export default Logement;
