import React from 'react';
import './BookItem.css'

const BookItem = (props) => {
    console.log(props.book);
    const { ISBN, author, image, price, summary, title } = props.book;
    return (
        <div className="py-5 book-item-container">
            <div className="card book-card">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {/* <p className="card-text">{summary}</p> */}
                    <p className="card-text">Author : {author}</p>
                    <p className="card-text">Price : $ {price.value}</p>
                    {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default BookItem;