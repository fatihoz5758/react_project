import React, { Component } from 'react'

class BlogItem extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='box'>
        <p className='pTag'>Blog Item Component</p> 
        <br/>
        Desc props: {this.props.desc}<hr/>
        Name props: {this.props.name} <br/>
        <div style={{'margin':'50px'}}>
          {this.props.head}<br/>
          {this.props.count} - {this.props.desc}

        </div>
       

      </div>
    )
  }
}
export default BlogItem
