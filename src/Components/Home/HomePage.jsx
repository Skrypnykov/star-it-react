import React from "react";
import classes from "./HomePage.module.css";
import Slider from "./Slider/Slider";
import OurPricing from "../../Components/Pricing/Pricing";

const Home = () => {
  return (
    <div className={classes.wrap}>
      <Slider />
      <OurPricing />
    </div>
  );
};

export default Home;
