import React, { useEffect, useState } from 'react';
import AllBooksItems from '../AllBooksItems/AllBooksItems';
import './AllBooks.css'

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        const url = `http://private-anon-f2ea18dd7c-bookstore.apiary-mock.com/data/books`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // data = data.slice(0, 3);
                setAllBooks(data);
            })
    }, [])
    return (
        <div className="container all-book-container">
        <h1 className="text-center">All BOOK LIST</h1>
        <div className="d-flex justify-content-between flex-wrap">
            {
                allBooks.map(book => <AllBooksItems book={book}></AllBooksItems>)
            }
            
        </div>
        {/* <Link to="/books" className="btn btn-info">See More</Link> */}
    </div>
    );
};

export default AllBooks;