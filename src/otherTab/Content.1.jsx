import React,{Component}from 'react';

class Content extends Component{
    render(){
        return(
            <div >{this.props.contents}
                <button onClick={this.props.next}>next</button>
            </div>
        )
    }
}

export default Content;