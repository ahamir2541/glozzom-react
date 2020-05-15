import React from 'react';
import Card from './CardPage'
import { Container, Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const ServicesCard = () => {
    return (
        <div className="ServicesCard py-5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <Fade left >
                            <Card heading="Service Plan One" />
                        </Fade>
                    </Col>
                    <Col lg={4}>
                        <Zoom>
                            <Card heading="Service Plan Two" />
                        </Zoom>
                    </Col>
                    <Col lg={4}>
                        <Fade right >
                            <Card heading="Service Plan Three" />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesCard;