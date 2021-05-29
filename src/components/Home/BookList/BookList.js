import React, { useEffect, useState } from 'react';
import BookItem from '../BookItem/BookItem';
import './BookList.css'


const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        const url = `http://private-anon-f2ea18dd7c-bookstore.apiary-mock.com/data/books`
        fetch(url)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h1>BOOK LIST</h1>
            <div className="">
                {
                    books.map(book => <BookItem book={book}></BookItem>)
                }
            </div>
        </div>
    );
};

export default BookList;