import React from "react";
import classes from "./SelectObject.module.css";

var timeInMs = Date.now();

const SelectObject = () => {
  return (
    <div className="content-wrapper">
      <div className={classes.object}>
        <div className={classes.name}>
          <p>
            Name: <span className={classes.data}></span>
          </p>
        </div>
        <div className={classes.address}>
          <p>
            Address: <span className={classes.data}></span>
          </p>
        </div>
        <div className={classes.ticket}>
          <p>
            Ticket window: <span className={classes.data}></span>
          </p>
        </div>
        <div className={classes.time}>
          <p>
            Time: <span className={classes.data}>{Date(timeInMs)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectObject;
