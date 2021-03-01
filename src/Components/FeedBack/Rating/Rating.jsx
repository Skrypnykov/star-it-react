import React from 'react';
import ReactStars from "react-rating-stars-component";
import classes from './Rating.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCameraRetro } from '@fortawesome/free-solid-svg-icons';


const faSend = <FontAwesomeIcon icon={faPaperPlane} />
const faCamera = <FontAwesomeIcon icon={faCameraRetro} />

const myStars = {
    size: 50,
    count: 5,
    isHalf: false,
    value: 3,
    color: "lightblue",
    activeColor: "gold",
    onChange: newValue => {
      console.log(`myStars: new value is ${newValue}`);
    }
  };

const Rating = () => {
    return (
        <div className={classes.wrap}>
            <div className="content-wrapper">
                <Form> 
                    <h3 className={classes.title}>Rating</h3>
                    <div className={classes.stars}>
                        <ReactStars {...myStars} />
                    </div>
                    <hr className="m-3" />
                    <div className="m-3">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label className="d-flex justify-content-start pb-3">{faCamera}</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button className={classes.buttonSend} variant="primary" type="submit">
                            Send {faSend}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Rating;
