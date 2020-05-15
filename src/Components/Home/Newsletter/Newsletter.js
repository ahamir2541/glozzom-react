import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Form from './Form'

const Newsletter = () => {
    return (
        <div className="Newsletter bg-dark text-center text-light py-5">
            <Container>
                <Row>
                    <Col>
                        <h2>Signup For Our Newsletter</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam similique esse assumenda quasi repellendus illum perferendis quos aliquid possimus.</p>
                        <Form/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;