import React,{Component}from 'react';
import Button from './Button'

class Content extends Component{
    state = {
        data: 1
    }
    componentDidMount(){
        setTimeout(() => {
            const data = 2
            this.setState({
                data
            })
        },0)
    }
    render(){
        return(
            <div>
                <header>{this.props.contents}</header>
                <Button 
                    type={'red'}
                    onClick={this.props.next}
                > 
                    next
                </Button>
                <div>
                    { this.state.data }
                </div>
            </div>
        )
    }
}




export default Content;