import React, { useEffect, useState } from 'react';
import './Blogs.css'
import blogData from '../../../blogData.json'
import Blog from '../Blog/Blog';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const firstThreeBlogData = blogData.slice(0, 3);

    useEffect(() => {
        setBlogs(firstThreeBlogData);
    }, [])
    return (
        <div className="blogs-container pt-5">
            <div className="container py-5">
                <h1 className="text-center">OUR BLOG</h1>
                <div className="d-flex justify-content-between flex-wrap py-5">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
                <div className="text-center">
                    <Link to="/allBlogs" className="btn btn-info py-2 px-5">SEE ALL BLOGS</Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;