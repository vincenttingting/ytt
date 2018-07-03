import React, { Component } from 'react';

class Header extends Component{
  render(){
    const { index,btns,click } = this.props;
    console.log('header render')
    return(
    <div>
    { btns.map((v,k) => {
        let id;
        console.log('当前是第',k+1,'个')
        if(k===4){
          console.log('第5个')
          id='id'
        }
        return (
          <button 
            key={k}
            className={index === k ? 'active' : ''}
            onClick={() => {click(k)}} 
            value="tab1"
            id={id}
          >
            {v}
          </button>
        )
      })
    }
    </div>
    )
  }
}

export default Header;
