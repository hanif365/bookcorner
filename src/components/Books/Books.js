import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Books.css';

const Books = () => {
    const [booksData, setBooksData] = useState([]);
    useEffect(() => {
        URL = `http://private-anon-f2ea18dd7c-bookstore.apiary-mock.com/data/books`;
        fetch(URL)
        .then(res => res.json())
        .then(data => setBooksData(data));
    }, [booksData]);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {
                        // booksData.map(bookData => )
                    }
                </div>
            </div>
        </>
    );
};

export default Books;