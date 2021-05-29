import React from 'react';
import './BookItem.css'

const BookItem = (props) => {
    console.log(props.book);
    const { ISBN, author, image, price, summary, title } = props.book;
    return (
        <div>
            {author}
            {/* <div className="card book-card">
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{summary}</p>
                    <p className="card-text">{author}</p>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </div>
    );
};

export default BookItem;