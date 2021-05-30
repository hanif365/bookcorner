import React, { useEffect, useState } from 'react';
import './AllBlogs.css'
import allBlogsData from '../../blogData.json'
import AllBlogsItems from '../AllBlogsItems/AllBlogsItems';

const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        setAllBlogs(allBlogsData);
    }, [])
    return (
        <div className="container all-blogs-container">
            <h1 className="text-center">ALL BLOGS</h1>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    allBlogs.map(allBlog => <AllBlogsItems key={allBlog.id} allBlog={allBlog}></AllBlogsItems>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;