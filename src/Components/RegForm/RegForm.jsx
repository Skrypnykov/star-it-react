import React from "react";
import classes from "./RegForm.module.css";
import {Form, Button} from "react-bootstrap";

const RegForm = () => {
  return (
    <div className={classes.wrap}>
      <div className="content-wrapper">
        <Form className={classes.form}>
          <h2 className={classes.title}>Create an account</h2>

          <Form.Group controlId="formEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group id="formCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
            />
          </Form.Group>
          
          <div className="d-flex justify-content-center">
            <Button
              className={classes.buttonSend}
              variant="primary"
              type="submit"
            >
              Create account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegForm;
