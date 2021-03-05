import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.wrap}>
      <footer className="content-wrapper">
        <div className={classes.color}>
          <a href="https://starit.ua">Star IT </a>
          <span>&copy; 2021 Creative Team </span>
        </div>
        <div className={classes.color}>
          <span>Powered by</span>
          <a href="/"> BestApp</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
