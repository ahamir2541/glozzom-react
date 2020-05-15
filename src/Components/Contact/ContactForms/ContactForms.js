import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'
import GetTuch from './GetTuch'

const ContactForms = () => {
    return (
        <div className="ContactForms py-5">
            <Container>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <ContactForm/>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <GetTuch/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactForms;