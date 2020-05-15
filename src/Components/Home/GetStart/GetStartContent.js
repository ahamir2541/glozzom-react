import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import pc from '../../../resource/img/pc.jpeg'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const GetStartContent = () => {
    return (
        <div className="GetStartContent py-5">
            <Container>
                <Row>
                    <Col md={12} lg={6} className="align-self-center">
                        <Slide left>
                            <h3>Lorem Ipsum Dolor Sit</h3>
                            <div className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos recusandae nobis reiciendis voluptatem quae iusto, fugiat itaque iste explicabo.</div>
                            <Button variant="outline-dark">Read More</Button>
                        </Slide>
                    </Col>
                    <Col md={12} lg={6} >
                        <div className="content_img">
                            <Zoom >
                                <img className="img-fluid" src={pc} alt="pc"/>
                            </Zoom>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetStartContent;