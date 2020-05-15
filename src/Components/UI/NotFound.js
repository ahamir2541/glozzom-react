import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="NotFound">
            <Container>
                <Row>
                    <Col>
                        <div className="contentPage">
                            <div className="NotDigit">
                                <div className="four">4</div>
                                <div className="zero">0</div>
                                <div className="four">4</div>
                            </div>
                            <div className="Found">
                                NOT FOUND
                            </div>
                            <div className="wrong">
                                <h2>Something is wrong</h2>
                                <p className="lead">The page you are looking for was moved, removed, renamed or might never existed.</p>
                            </div>
                            <div className="homeBtn">
                                <Link to="/">
                                    <button className="btn">Go Home</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;