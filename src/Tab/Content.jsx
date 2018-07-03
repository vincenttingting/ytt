import React, { Component } from 'react';

class Content extends Component{
  render(){
    const { value, goNext } = this.props
    return(
      <div>
        {value}
        <button onClick={goNext}>跳转下一个</button>
      </div>
    )
    
  }
}
export default Content;
