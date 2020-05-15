import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'

const Questions = () => {
    return (
        <div className="Questions py-5 bg-dark ">
            <Container>
                <Row className="text-center text-light">
                    <Col>
                        <h2>Frequently Asked Questions</h2>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={6}>
                        <Accordion>
                            <Card>
                                <h3> <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Question One
                                    </Accordion.Toggle></h3>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mt-1">
                                <h3> <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Question Two
                                    </Accordion.Toggle></h3>

                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mt-1">
                                <h3> <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Question Three
                                    </Accordion.Toggle></h3>

                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col lg={6}>
                    <Accordion>
                            <Card className="mt-1">
                                <h3> <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Question Four
                                    </Accordion.Toggle></h3>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mt-1">
                                <h3> <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    Question Five
                                    </Accordion.Toggle></h3>

                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="mt-1">
                                <h3> <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                    Question Six
                                    </Accordion.Toggle></h3>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Questions;