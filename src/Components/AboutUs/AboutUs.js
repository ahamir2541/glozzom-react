import React from 'react';
import TitleSection from '../UI/TitleSection'
import bg from '../../resource/img/image1.jpeg'
import AboutContent from './AboutContent/AboutContent'
import AboutCard from './AboutCard/AboutCard'
import Testimonial from './Testimonial/Testimonial'

const AboutUs = () => {
    return (
        <div>
            <TitleSection 
            type="title"
            bg={bg}
            title="About Us"
            lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe." />
            <AboutContent/>
            <AboutCard/>
            <Testimonial/>
        </div>
    );
};

export default AboutUs;