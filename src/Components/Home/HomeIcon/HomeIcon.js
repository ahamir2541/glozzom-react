import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HomeIconSection from './HomeIconSection'
import { faCloud, faCartPlus, faGifts } from '@fortawesome/free-solid-svg-icons'

const HomeIcon = () => {
    return (
        <div className="py-5 text-center">
            <Container>
                <Row>
                    <Col lg={4}>
                        <HomeIconSection
                            icon={faGifts}
                            heading="Turning Gears" />
                    </Col>
                    <Col lg={4}>
                        <HomeIconSection
                            icon={faCloud}
                            heading="Sending Data" />
                    </Col>
                    <Col lg={4}>
                        <HomeIconSection
                            icon={faCartPlus}
                            heading="Making Money
                            " />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeIcon;