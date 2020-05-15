import React from 'react';
import TitleSection from '../UI/TitleSection'
import bg from '../../resource/img/image2.jpeg'
import ContactForms from './ContactForms/ContactForms'

const Contact = () => {
    return (
        <div>
            <TitleSection 
            bg={bg}
            title="Contact"
            lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe"
            type="title" />
            <ContactForms/>
        </div>
    );
};

export default Contact;