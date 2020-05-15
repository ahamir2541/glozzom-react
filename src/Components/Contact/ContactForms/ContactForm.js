import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

const ContactForm = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className="text-center mb-3">Please fill out this form to contact us</h3>
                <Form>
                    <Row>
                        <Col xs={12}>
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="Email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formBasicNumber">
                                <Form.Control type="Number" placeholder="Phone Number" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <textarea className="form-control" name="Message" id="" rows="5" placeholder="Message" ></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="btn btn-block" variant="dark">Send</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ContactForm;