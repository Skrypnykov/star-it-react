import React from 'react';
import classes from './LoginForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
    return (
        <div className={classes.wrap}>
            <div className="content-wrapper">
                <Form className={classes.form}>
                    <h2 className={classes.title}>Sign in to Star It</h2>
                    <Form.Group controlId="formName" className="mb-4">
                        <Form.Label>Username or email address</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button className={classes.buttonSend} variant="primary" type="submit">
                            Sign in
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;
