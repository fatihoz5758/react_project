import React, { Component } from 'react'
import BlogItem from './BlogItem'


class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <h1>Blog.Js</h1>
                <BlogItem desc ="Blog One Desc" />
                <BlogItem />
                <BlogItem />
            </div>
        )
    }
}
export default Blog