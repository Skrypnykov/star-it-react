import React from 'react';
import classes from './AddForm.module.css';
import Form from 'react-bootstrap/Form';

const AddForm = () => {
    return (
        <div className={classes.wrap}>
            <div className="content-wrapper">
            <Form>
                <Form.Group controlId="formObject">
                    <Form.Label>Object</Form.Label>
                    <Form.Control type="text" placeholder="Objeck" />
                </Form.Group>
                
                <Form.Group controlId="formAddress2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formTicketWindow">
                    <Form.Label>Ticket window</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                
            </Form>
            </div>
        </div>
    );
}

export default AddForm;