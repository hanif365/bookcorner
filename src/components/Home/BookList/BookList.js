import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../BookItem/BookItem';
import './BookList.css'


const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const url = `https://private-anon-f2ea18dd7c-bookstore.apiary-mock.com/data/books`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data = data.slice(0, 3);
                setBooks(data);
            })
    }, [])
    return (
        <div className="book-list-container py-5">
            <div className="container ">
                <h1 className="text-center pb-5">BOOK LIST</h1>
                <div className="d-flex justify-content-between flex-wrap">
                    {
                        books.map(book => <BookItem book={book}></BookItem>)
                    }

                </div>
                <div className="text-center py-5">
                    <Link to="/books" className="btn btn-info py-2 px-5">SEE MORE BOOKS</Link>
                </div>
            </div>
        </div>
    );
};

export default BookList;