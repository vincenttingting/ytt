import React, { Component } from 'react';
import './App.css';
import Container from './otherTab/Container.jsx';
import TodoList from './TodoList/App.jsx';
import Containerr from './IconTest/Container.jsx';


/**
 * react生命周期执行顺序
 * 
 * 父组件 子组件 传递参数
 * 父组件改变子组件的数据
 * 子组件改变父组件的数据
 * 改变兄弟组件的数据
 * 
 */

class App extends Component {
  
  render(){
    return(
      <div>
        <Containerr />
        {/* <TodoList /> */}
      </div>
    )
  }
}

export default App;
