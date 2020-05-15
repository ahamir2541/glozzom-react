import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import img from '../../../resource/img/image4.jpeg'

const AboutContent = () => {
    return (
        <div className="AboutContent py-5">
            <Container>
                <Row>
                    <Col lg={6} md={12} className="align-self-center">
                        <div>
                            <h3>What We Do</h3>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex quaerat magnam obcaecati repellendus voluptatum quisquam architecto iure, aliquam labore.</p>
                            <p className="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex quaerat magnam obcaecati repellendus voluptatum quisquam architecto iure, aliquam labore.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={12}  className="text-center">
                        <div>
                            <img className="img-fluid rounded-circle about_content_img" src={img} alt="img"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutContent;