import React, { Component } from 'react';
import Add from './Add.jsx';

class TodoList extends Component {
  state={
    list:[],
    text1:'',
    text2:''
  }
  onChange1=(e)=>{
    this.setState({
      text1:e.target.value,
    })
  }
  onChange2=(e)=>{
    this.setState({
      text2:e.target.value,
    })
  }
  addItem=()=>{
    const { list ,text1 } = this.state;
    list.push(text1)
    this.setState({
      text1:'',
      list
    })
  };
  deleteItem=()=>{
    const { list, text2 } = this.state;
    list.splice(text2-1,1)
    this.setState({
      text2:'',
      list
    })
  }
  render(){
    return(
      <div>
        <Add ad={this.addItem}/>
        <Delet  del={this.deleteItem}/>
        <input type="text" onChange={this.onChange1} value={this.state.text1} />
        {
          this.state.list.map((v,k)=>{
            return <li key={k}>{v}</li>
          })
        }
        <input type="text" onChange={this.onChange2} value={this.state.text2}/>
      </div>
    )
  }
}

class Delet extends Component{
  render(){
    return(
    <button onClick={this.props.del}>deleteItem</button>
    )
  }
}

export default TodoList;
