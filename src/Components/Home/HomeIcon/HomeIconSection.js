import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';

const HomeIconSection = (props) => {
    return (
        <div>
            <Fade left >
                <FontAwesomeIcon icon={props.icon} className="HomeIcons" />
                <h3 className="mt-2">{props.heading} </h3>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur</p>
                
            </Fade>
        </div>
    );
};

export default HomeIconSection;