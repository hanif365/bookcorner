import React from 'react';
import './Blog.css'

const Blog = (props) => {
    console.log(props.blog);

    const {id, title, description, image, time} = props.blog;
    return (
        <div className="blog-container">
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

export default Blog;