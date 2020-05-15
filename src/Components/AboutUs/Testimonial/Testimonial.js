import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Testimonial from 'react-testimonial'

class TestimonialPage extends Component {
    render() {

        return (
            <div className="Testimonial bg-light py-5 ">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2>Testimonial</h2>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Testimonial>
                                <div className="card content mx-auto" >
                                    <div className="card-body">
                                        <span>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure soluta vitae voluptatum inventore? Harum, consequuntur soluta et voluptates placeat cumque animi, ad ex laboriosam quae fuga laudantium sequi magnam.
                                        </span>
                                        <p>Moshiur from <a href="#">Coder fundation</a></p>
                                    </div>
                                </div>
                                <div className="card content mx-auto" >
                                    <div className="card-body">
                                        <span>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quaerat ipsum culpa natus! Ex quas nam consequuntur aut aliquid voluptate, tempora quaerat distinctio. Mollitia minus quia recusandae dolorum voluptate dicta.
                                        </span>
                                        <p>HM Nayem <a href="#">Stack learner</a></p>
                                    </div>
                                </div>
                            </Testimonial>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TestimonialPage;
