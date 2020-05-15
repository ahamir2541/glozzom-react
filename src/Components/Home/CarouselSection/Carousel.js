import React from 'react';
import image1 from '../../../resource/img/image1.jpeg'
import image2 from '../../../resource/img/image2.jpeg'
import image3 from '../../../resource/img/image3.jpeg'
import { Carousel } from 'react-bootstrap'
import CarouselCaption from './CarouselCaption'

const CarouselPage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption className="mb-5">
                    <CarouselCaption 
                    heading="Heading One"
                    lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis at esse, voluptatibus tenetur ab obcaecati. Voluptatem expedita fugit minima sapiente!"
                    btn_text="Learn More"
                    btn_bg="primary" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                />

                <Carousel.Caption className="mb-5 text-right">
                <CarouselCaption 
                    heading="Heading Two"
                    lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis at esse, voluptatibus tenetur ab obcaecati. Voluptatem expedita fugit minima sapiente!"
                    btn_text="Learn More"
                    btn_bg="danger" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption className="mb-5 text-left">
                <CarouselCaption 
                    heading="Heading Three"
                    lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis at esse, voluptatibus tenetur ab obcaecati. Voluptatem expedita fugit minima sapiente!"
                    btn_text="Learn More"
                    btn_bg="warning" />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselPage;