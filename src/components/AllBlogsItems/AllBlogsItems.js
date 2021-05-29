import React from 'react';
import './AllBlogsItems.css'

const AllBlogsItems = (props) => {
    console.log(props.allBlog);
    const {id, title, description, image, time} = props.allBlog;
    return (
        <div className="py-5">
            <div class="card blog-card">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text">Published : {time}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default AllBlogsItems;