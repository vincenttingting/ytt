import React,{ Component } from 'react';
import './style.css'

// // 2. 水平展示、垂直展示
// return (
//     <span>
//         icon
//         text
//     </span>
// )

// // 3. 可以兼容没有图标、没有文字
// <span>
//     icon ? 
//     text ?
// </span>


// class IconSpan extends Component {
//     render(){
//         const { 
//             className = '',
//             onClick=null,
//             icon='',
//             text='',
//             disbled=false
//         } = this.props

//         // 1. 简单的
//         return (
//             <span>
//                 icon
//                 text
//             </span>
//         )
//     }
// }

// 'icon-span' className
// type = 水平展示  垂直展示
class IconSpan extends Component{
    
    render(){
        const {
            icon,
            className,
            text,
            onClick,
            children=null
        } = this.props
      
        return(
            <div>
                <span onClick={onClick} className={className}><img src={icon}/>{text}{children}</span>
            </div>
        )
    }
}
export default IconSpan;