import React from "react";
import classes from "./Jumbotron.module.css";
import { Jumbotron } from "react-bootstrap";

const JumboTron = () => {
  return (
    <div className={classes.wrap}>
      <div className="content-wrapper">
        <Jumbotron className={classes.jt}>
          <p>
            Наш проект позволяет потребителю с помощью смартфона, прямо на месте
            события, оставить свой отзыв, замечание, предложение о работе
            сервиса. А бизнесу оперативно получить и прореагировать на самые
            критичные замечания, а также сделать анализ полученной обратной
            связи и принять решения для увеличения эффективности работы бизнеса.
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default JumboTron;
