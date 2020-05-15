import React, { Component } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class CardPage extends Component {

    state = {
        lists: [
            {
                feature: 'Feature One'
            },
            {
                feature: 'Feature Two'
            },
            {
                feature: 'Feature Three'
            },
            {
                feature: 'Feature Four'
            },
            {
                feature: 'Feature Five'
            },
            {
                feature: 'Feature Six'
            },
        ]
    }

    listsHandler = () => (
        this.state.lists.map((list, i) => (
            <ListGroup.Item key={i}> <FontAwesomeIcon className="featureIcon" icon={faCheck} /> {list.feature} </ListGroup.Item>
        ))
    )

    render() {
        return (
            <Card className="text-center">
                <Card.Header> <h3>{this.props.heading} </h3> </Card.Header>
                <Card.Body>
                    <h3>$59.99/Month</h3>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Card >
                        <ListGroup variant="flush">
                            {this.listsHandler()}
                        </ListGroup>

                    </Card>
                    <Button className="mt-2 btn-block" variant="primary">Order Now</Button>

                </Card.Body>
                <Card.Footer className="text-muted">1 Year Plan</Card.Footer>
            </Card>
        );
    }
}

export default CardPage;
