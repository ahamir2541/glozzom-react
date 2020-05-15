import React from 'react';
import TitleSection from '../../UI/TitleSection'
import bg1 from '../../../resource/img/bg1.jpeg'
import people from '../../../resource/img/people.jpeg'
import GetStartContent from './GetStartContent'

const GetStart = () => {
    return (
        <div>
            <TitleSection 
            type="title"
            bg={bg1}
            title="Are You Ready To Get Started?"
            lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quaerat voluptatem laboriosam vero recusandae repellendus? Impedit iure est sit voluptatum blanditiis cum sequi laudantium quod dicta, a quaerat vel,  obcaecati!" />

            <GetStartContent/>
            <TitleSection 
            type="video"
            bg={people}
             />
        </div>
    );
};

export default GetStart;