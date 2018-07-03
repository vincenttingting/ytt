import React,{Component}from 'react';
import Content1 from './Content.jsx';
import Content2 from './Content.1.jsx';
import Content3 from './Content.2.jsx';
import Content4 from './Content.3.jsx';
import Header from './Header.jsx';
 

const values=["classone","classtwo","classthree","classfour"]
const gg=['1','2','3','4']

class Container extends Component{
   state={
       index:0,
       value:values[0],
       
   }
   handleClick=(k)=>{
        this.setState({
           index:k,
           value:gg[k]
        })
   }
   goNext=()=>{
       let {index}=this.state;   
        index= index===(values.length-1)?0 : ++index
        this.handleClick(index)
   }

    render(){
        const { index,value} = this.state
        let content;
        switch(index){
            case 0: content =  <Content1  contents={value} next={this.goNext}/>
            break;
            case 1: content =  <Content2  contents={value} next={this.goNext}/>
            break;
            case 2: content =  <Content3  contents={value} next={this.goNext}/>
            break;
            case 3: content =  <Content4  contents={value} next={this.goNext}/>
            break;
            default: break
        }

        let contentJson = {
            0: <Content1  contents={value} next={this.goNext}/>,
            1: <Content2  contents={value} next={this.goNext}/>,
            2: <Content3  contents={value} next={this.goNext}/>,
            3: <Content4  contents={value} next={this.goNext}/>,
        }
        return(
            <div>
                <Header click={this.handleClick} index={index}  value={values} />
                { contentJson[index] }
            </div>
          
        )
    }
}





export default Container;