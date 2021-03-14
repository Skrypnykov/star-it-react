import React from "react";
import classes from "./HomePage.module.css";
import Slider from "./Slider/Slider";
import OurPricing from "../../Components/Pricing/Pricing";
import JumboTron from "./Jumbotron/Jumbotron";

const Home = () => {
  return (
    <div className={classes.wrap}>
      <Slider />
      <JumboTron />
      <OurPricing />
    </div>
  );
};

export default Home;
