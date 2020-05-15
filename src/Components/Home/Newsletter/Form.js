import React from 'react';
import { Form, Button } from 'react-bootstrap'

const FormPage = () => {
    return (
        <Form className="form-inline homeForm justify-content-center">
            <Form.Group className="mr-2" controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mr-2" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Subscribe
            </Button>
        </Form>
    );
};

export default FormPage;