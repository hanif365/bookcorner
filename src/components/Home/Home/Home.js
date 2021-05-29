import React from 'react';
import BookList from '../BookList/BookList';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BookList></BookList>
        </div>
    );
};

export default Home;