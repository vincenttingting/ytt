import React,{Component}from 'react';
import Button from './Button'

class Content extends Component{
    render(){
        return(
            <div >{this.props.contents}
                <Button 
                    disabled={true}
                    onClick={this.props.next}
                > 
                    next
                </Button>
                <div>sfasf</div>
            </div>
        )
    }
}




export default Content;