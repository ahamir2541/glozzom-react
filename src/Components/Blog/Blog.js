import React from 'react';
import TitleSection from '../UI/TitleSection'
import bg from '../../resource/img/image1.jpeg'
import BlogPosts from './BlogPosts/BlogPosts'

const Blog = () => {
    return (
        <div>
            <TitleSection 
            bg={bg}
            title="Blog"
            lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe"
            type="title" />
            <BlogPosts/>
        </div>
    );
};

export default Blog;