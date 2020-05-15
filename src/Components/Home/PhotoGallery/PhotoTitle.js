import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const PhotoTitle = () => {
    return (
        <div className="pt-5 text-center">
            <Container>
                <Row>
                    <Col>
                        <h3>Photo Gallery</h3>
                        <p className="lead">Check out our photos</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PhotoTitle;