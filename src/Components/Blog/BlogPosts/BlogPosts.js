import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import image1 from '../../../resource/img/image1.jpeg'
import image2 from '../../../resource/img/image2.jpeg'
import image3 from '../../../resource/img/image3.jpeg'
import image4 from '../../../resource/img/image4.jpeg'
import image5 from '../../../resource/img/image5.jpeg'
import image6 from '../../../resource/img/image6.jpeg'
import Zoom from 'react-reveal/Zoom'

class BlogPosts extends Component {

    state = {
        posts: [
            {
                img: [image1],
                title: 'Blog Post One',
                author: 'Moshiur',
            },
            {
                img: [image2],
                title: 'Blog Post Two',
                author: 'Nayem',
            },
            {
                img: [image3],
                title: 'Blog Post Three',
                author: 'Amir',
            },
            {
                img: [image4],
                title: 'Blog Post Four',
                author: 'Jhone',
            },
            {
                img: [image5],
                title: 'Blog Post Five',
                author: 'Wick',
            },
            {
                img: [image6],
                title: 'Blog Post Six',
                author: 'Manik',
            },
        ]
    }

    postsHandler = () => (
        this.state.posts.map((post, i) => (
            <Col key={i} className="mt-2" lg={4} md={6}>
                <Card >
                    <Zoom>
                    <Card.Img variant="top" src={post.img} />
                    </Zoom>
                    <Card.Body>
                        <Card.Title> {post.title} </Card.Title>
                        <small>Written By {post.author} </small>
                        <hr />
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui cumque numquam corporis nam quidem quae sequi laboriosam ab provident harum.
                                </Card.Text>
                        <Button className="btn btn-block" variant="dark">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))

    )

    render() {
        return (
            <div className="BlogPosts py-5">
                <Container>
                    <Row>
                        {this.postsHandler()}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BlogPosts;
