import React, { Component } from 'react'

class BlogItem extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='box'>
        <p className='pTag'>Blog Item Component</p> 
        <br/>
        {this.props.desc}
      </div>
    )
  }
}
export default BlogItem
