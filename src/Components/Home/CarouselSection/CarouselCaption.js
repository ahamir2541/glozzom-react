import React from 'react';
import { Button } from 'react-bootstrap'

const CarouselCaption = (props) => {
    return (
        <div className="carousel_caption">
            <h5 className="display-4 ">{props.heading} </h5>
            <p className="lead">{props.lorem} </p>
            <Button variant={props.btn_bg} >{props.btn_text} </Button>
        </div>
    );
};

export default CarouselCaption;