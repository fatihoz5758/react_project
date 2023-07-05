import React, { Component } from 'react'
import BlogItem from './BlogItem'


class Blog extends Component {
    render() {
        let blogInfos = [
            {textHead: 'Blog 1', textDexc: 'Blog 1 Desc'},
            {textHead: 'Blog 2', textDexc: 'Blog 2 Desc'},
            {textHead: 'Blog 3', textDexc: 'Blog 3 Desc'},
        ]
        return (
            <div className='blog'>
                <h1 style={{'color':'red','padding':30, 'border':'1px solid yellow','background':'aqua'}}>Blog.Js</h1>
               <div style={{'border':'1px solid black','background':'yellow','width':'300px','margin':'30px'}}>
                <BlogItem desc ="Blog One Desc" />
                <BlogItem name ="Fatih Merhaba" />
                <BlogItem name ="Fatih Merhaba2" desc ="Blog tree Desc"/>
                </div>

                {blogInfos.map((item,i)=>console.log('Data::',item, 'index:',i))}
                <BlogItem count={0} head='Head' desc='Desc'/>
                {blogInfos.map((item,i)=><BlogItem count={i} head={item.textHead} desc={item.textDexc} />)}

            </div>
        )
    }
}
export default Blog