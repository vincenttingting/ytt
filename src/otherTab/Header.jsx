import React,{Component} from 'react';
import Button from './Button'

 class Header extends Component{
    render() {
        return(
            <div>
                {   this.props.value.map((v,k)=>{
                    return(
                        <Button 
                            key={k}
                            onClick={()=>{this.props.click(k)} }
                            className={this.props.index===k?'active':''}
                        > 
                            {v}
                        </Button>
                        // <button key={k} onClick={()=>{this.props.click(k)} }className={this.props.index===k?'active':''}>{v}</button>
                    )
                   })  
                }
            </div>
        )
    }
 }



export default Header;