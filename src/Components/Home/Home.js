import React from 'react';
import Carousel from './CarouselSection/Carousel'
import HomeIcon from './HomeIcon/HomeIcon'
import GetStart from './GetStart/GetStart'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import Newsletter from './Newsletter/Newsletter'
import ProgressBar from '../UI/ProgressBar'

const Home = () => {
    return (
        <div>
            <Carousel/>
            <ProgressBar/>
            <HomeIcon/>
            <GetStart/>
            <PhotoGallery/>
            <Newsletter/>
        </div>
    );
};

export default Home;