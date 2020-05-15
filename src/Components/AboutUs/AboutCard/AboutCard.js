import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCar, faPlay, faTree, faCartPlus, faCloud } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom'

class AboutCard extends Component {

    state = {
        cards: [
            {
                title : 'Lorem Ipsum',
                bg : 'primary',
                color : 'text-light',
                icon : faEnvelope,
            },
            {
                title : 'Lorem Ipsum',
                bg : 'dark',
                color : 'text-light',
                icon : faCar,
            },
            {
                title : 'Lorem Ipsum',
                bg : 'success',
                color : 'text-light',
                icon : faPlay,
            },
            {
                title : 'Lorem Ipsum',
                bg : 'warning',
                color : 'text-light',
                icon : faTree,
            },
            {
                title : 'Lorem Ipsum',
                bg : 'info',
                color : 'text-light',
                icon : faCartPlus,
            },
            {
                title : 'Lorem Ipsum',
                bg : 'light',
                color : 'text-dark',
                icon : faCloud,
            },
            
        ]
    }

    cardsHandler = () => (
        this.state.cards.map((card,i) => (
            <Col lg={4} md={6} key={i} className="mt-4 text-center">
                <Zoom>
            <Card bg={card.bg} className={card.color}>
                <Card.Body>
                    
                    <div className="aboutIcons"><FontAwesomeIcon icon={card.icon} /></div>
                    <h3>{card.title} </h3>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi magni placeat.</p>
                    
                </Card.Body>
            </Card>
            </Zoom>
        </Col>
        ))
        
    )

    render() {
        return (
            <div className="AboutCard pt-2 pb-5">
                <Container>
                    <Row>
                        {this.cardsHandler()}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutCard;