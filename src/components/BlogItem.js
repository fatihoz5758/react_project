import React, { Component } from 'react'

class BlogItem extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='box'>
        <p className='pTag'>Blog Item Component</p> 
        <br/>
        Desc props: {this.props.desc}<hr/>
        Name props: {this.props.name}
       

      </div>
    )
  }
}
export default BlogItem
