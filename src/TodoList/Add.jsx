import React,{Component} from 'react';

class Add extends Component {
  render() {
    return (
      <button onClick={this.props.ad} >addItem</button>
    )
  }
}

export default Add