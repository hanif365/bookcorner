import React, { useEffect, useState } from 'react';
import './BookList.css'


const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        const url = `http://private-anon-f2ea18dd7c-bookstore.apiary-mock.com/data/books`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default BookList;