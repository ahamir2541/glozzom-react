import React from 'react';
import TitleSection from '../UI/TitleSection'
import bg from '../../resource/img/image2.jpeg'
import ServicesCard from './ServicesCard/ServicesCard'
import Question from './Question/Questions'
import ProgressBar from '../UI/ProgressBar'

const Services = () => {
    return (
        <div>
            <TitleSection 
            bg={bg}
            title="Services"
            lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe."
            type="title"
             />
             <ProgressBar/>
             <ServicesCard/>
             <Question/>
        </div>
    );
};

export default Services;