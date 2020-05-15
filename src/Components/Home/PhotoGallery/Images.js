import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../../../resource/img/image1.jpeg'
import img2 from '../../../resource/img/image2.jpeg'
import img3 from '../../../resource/img/image3.jpeg'
import img4 from '../../../resource/img/image4.jpeg'
import img5 from '../../../resource/img/image5.jpeg'
import img6 from '../../../resource/img/image6.jpeg'
import Zoom from 'react-reveal/Zoom';

class Images extends Component {

    state = {
        images: [
            {
                img: [img1]
            },
            {
                img: [img2]
            },
            {
                img: [img3]
            },
            {
                img: [img4]
            },
            {
                img: [img5]
            },
            {
                img: [img6]
            },
        ]
    }

    showImages = () => (
        this.state.images.map((image, i) => (
            <Col lg={4} key={i}>
                <div>     
                    <a href={image.img} >
                    <Zoom>
                        <img className="img-fluid mt-2 imag_gallery" src={image.img} alt="img" />
                    </Zoom>
                    </a>

                </div>
               
            </Col>
        ))

    )
    render() {
        return (
            <div className="images mt-2 pb-5">
                <Container>
                    <Row>
                        {this.showImages()}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Images;