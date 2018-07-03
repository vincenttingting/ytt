import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'

/**
    state: 组件内部
    props：外部传入

    const 申明的变量不可变

    父组件穿参数和方法给子组件

 */

const btns = ['我的','朋友圈','发现','tab4','tab5'];

class Container extends Component {
  state={
    value: btns[0],
    index: 0,   
  }

  handleClick=(k)=>{
    this.setState({
      "value": btns[k],
      "index": k
    })
  }

  goNext = () => {
    let { index } = this.state;
    index = index === 4 ? 0 : ++index;
    this.handleClick(index);
  }

  render(){
    console.log('container render')
    return(
      <div>
        <Header btns={btns} click={this.handleClick} index={this.state.index}/>
        <Content goNext={this.goNext} value={this.state.value} />
      </div>
    )
  }
}

export default Container;