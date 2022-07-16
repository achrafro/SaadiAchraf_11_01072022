import React from "react";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Home = (props) => {
  console.log(props);
  return (
    <div className="home">
      <Header></Header>
      <Banner></Banner>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
};

export default Home;
