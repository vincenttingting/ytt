import React,{Component}from 'react';
import Button from './Button'
class Content extends Component{
    render(){
        return(
            <div >{this.props.contents}
                <Button 
                    type={'yellow'}
                    onClick={this.props.next}
                > 
                    next
                </Button>
                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}




export default Content;