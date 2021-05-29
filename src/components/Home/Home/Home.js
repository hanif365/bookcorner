import React from 'react';
import Blogs from '../Blogs/Blogs';
import BookList from '../BookList/BookList';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BookList></BookList>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;