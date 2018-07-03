import React,{ Component } from 'react';
import './Button.css'

class Button extends Component {
    render() {
        const {
            disabled=false,
            type='blue',
            onClick=null,
            className='',
            children
        } = this.props;
        let typeName;
        switch(type){
            case 'blue':
                typeName = 'blue'
            break; 
            case 'red':
                typeName = 'red'
            break;
            case 'yellow':
                typeName = 'yellow'
            break;
            default: break;
        }
        return (
            <button 
                disabled={disabled} 
                className={'my-btn '+ typeName + ' ' + className}
                onClick={onClick}
            >{children}</button>
        )
    }
}

export default Button;