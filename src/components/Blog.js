import React, { Component } from 'react'
import BlogItem from './BlogItem'


class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <h1 style={{'color':'red','padding':30, 'border':'1px solid yellow','background':'aqua'}}>Blog.Js</h1>
                <BlogItem desc ="Blog One Desc" />
                <BlogItem name ="Fatih Merhaba" />
                <BlogItem name ="Fatih Merhaba2" desc ="Blog tree Desc"/>
                
            </div>
        )
    }
}
export default Blog