- 引入文件 import *** from 文件名，如果从另外一个文件中引入的是一个常量const A=1 那么就是import {A} 如果是引入一个默认值 “export default App”那么就直接import APP  而不需要大括号。

- 文件名：../是指从当前目录出去    ./是指同级目录

- 文件有引入也要有导出   impor    export

- 一般只需要在父组件开头中引入（import）在子组件中最后一行导出的（export default子组件名）子组件即可，因为在父组件中有render <子组件名/>进去，

- 在子组件中引用父组件的方法 如果需要引入参数则使用箭头函数而不是直接在函数后边加括号传参数，例如：this.setTime={（）=>this.handleClick（参数）}这样会立即执行函数，不等点击就会执行函数

- 多使用 .map（v,k） ,在使用.map之后的第一个标签中要有key键，并且key的值必须是唯一的不能是重复的，例如list【1，1，1，1，1】则可以让key={k} 而不可以让key={v}

- react的赋值都要加大括号，比如let a={}

- 学会将if语句转换成为三元函数，即：className={index === k ? 'active' : '' “}  另外一种写法;loading={loading?true:false}

- typeof  ssss :这个操作符用来确定一个变量是什么对象=》 variable instanceof  constructor 这个操作符用来确定某个对象是否是这个对象，返回值为布尔类型

- 函数的参数也可以是一个对象，代码如下

  ```
  function setName(object){
    object.name="ytt";
  }
  var person=new object();
  setName(person);
  ```

- eval（）此函数可以接受一个字符串str作为参数，并把此str当做一段javascript代码去执行，如果str执行结果是一个值则返回此值，否则返回undefined。如果参数不是一个字符串，则直接返回该参数，实例如下:

  ```
  eval("var a=1");//声明一个变量a并赋值1。
  eval("2+3");//执行加运算，并返回运算值。
  eval("mytest()");//执行mytest()函数。
  eval("{b:2}");//声明一个对象。
  ```

- arguments :是每个函数的默认参数对象 

  ```
  function（）{
    return (arguments.length)//这里可以先不写参数，后期调用函数的时候传入参数，然后通过arguments【】来获取参数
  }
  ```

- ```
  const btns = ['我的','朋友圈','发现','tab4','tab5'];//是创建了一个数组
  var num=（2，5，6，1）；//这个是一个逗号操作符，该操作符用于返回最后一个值  所以num=1
  ```

- 在一个类里边设置了state={ variables}，在后边的函数中如果要用这个variable就需要let {variable}=this.state获取再使用   除了this.setState（{就不需要获取，直接variable:新值}）

- 在动态传参的时候，一般如果设置一个数组array，还需要设置两个变量用来放默认值，例如index=0；value=array【0】，然后再通过后边的array.map((V,K)=>{ 在这里再动态的获取v（传递给value，改变value的值，k传递给index，改变index的值）})，如果在.map中还需要用到标签，需要return（<p key={k}></p>）,这里需要注意的是通过return把标签内容反馈到浏览器页面中，还有就是设置key的值

- if（）{var 变量名}；for（var i，i<3, i++）{}  这两个是没有块级作用域的，即使在{}外部也可以alert（变量名或者是i）；try-catch的catch块和with语句也是，function（）{with（location）{var 变量名=。。。。}return 变量名  }（注：这里也是可以访问到变量名的，相当于延长了作用域）

- 函数的参数也可以是一个对象

- 对象中某一属性的访问用.   比如person.name  或者是person【“name”】，如果某些属性名中间包含空格，那么就不能使用点表示法来访问它。比如person.["first  name"]

- 数组的length属性不是只读的，例如var colors=["red","blue","green"];colors.length=2;alert(colors[2]);//undefined,通过设置这个属性，可以从数组的末尾移除或者是添加新项。如果添加了新项，没有设值去访问的话也是undefined，同时通过colors.lenth也可以添加值，比如colors【colors.length】=“black” //就是在位置3的地方添加第四个值黑色。

- 检测数组用的方法是Array.isArray(value)而不是value instanceof Array

- colors.toString()  ; colors.valueOf()；colors.join（“||”）这两种方法，前边的是返回由数组中的每个值的字符串形式拼接而成的以逗号分隔的字符串，后边的是返回数组本身，第三种方法则是使用不同的分隔符来构建这个字符串。

- 数组栈的方法，pop（）【注：对应的是shift（）移除第一项并且返回】和push（）【unshift（）在前端添加新项并且返回数组的长度】的方法，push是数组末尾添加值，它的返回值是修改后的数组的长度。pop（）的方法是从数组末尾移除最后一项，然后它的返回值是移除的项。

- 数组的.sort(compareA)方法，默认的是按照升序的，但是它是调用每个数组项的tostring（）方法，然后比较得到的字符串。它可以接受比较函数，如果第一个参数应该位于第二个之前，则返回负数，如果两个参数相等则返回0，如果第一个参数应该位于第二个之后则返回正数,以下A函数是在升序，B函数是降序,如果只是想要反转数组原来的顺序，则使用.reverse（）方法。

  ```
  function compareA（value1,value2）{
    if(value1<value2){
      return -1;
    }else if(value1>value2){
      return 1;
    }else{
      return 0;
    }
  }
  function compareB(value1,value2){
    if(value1<value2){
     return 1;
    }else if(value1>value2){
     return -1;
    }else{
    return 0;
    }
  }
  ```

- var colors=[1,1,3];colors2=colors.concat("4",["t","r"])//colors2:  1,1,3,4,t,r

- .slice()只有一个参数的时候返回从当前索引位置开始到末尾的所有项

- .splice() 该方法始终返回一个数组，包含从原始数组删除的项

  | 删除                   | 插入                    | 替换   |
  | -------------------- | --------------------- | ---- |
  | 2个参数，要删除的第一项的位置和删除的项 | 3个参数：起始位置，要删除的项，要插入的项 | 同插入  |

- 迭代的方法总结

- | every（）对数组中的每一项都运行给定的函数，如果该函数的每一项都返回true则返回true |
  | ---------------------------------------- |
  | **some（）对数组中的每一项都运行给定的函数，如果该函数有任一项返回true则返回true** |
  | **forEach（）对数组中的每一项都运行给定的函数，没有返回值**      |
  | **map（）对数组中的每一项都运行给定的函数，返回每次函数调用的结果组成的数组** |
  | **filter（）对数组中的每一项都运行给定的函数，返回该函数会返回true的项组成的数组** |

- 归并的方法总结：reduce（）和reduceRight（）接收在每一项上调用的函数和（可选）作为归并基础的初始值，这个函数接受四个参数：前一个值，当前值，项的索引和数组对象，函数返回的任何一个值都会自动作为第一个参数自动传递给下一个，例子如下

- ```
  var values=[1,2,3,4,5]
  var sum=values.reduce(function(prev,cur,index,array){
    return prev+cur;//15
  })
  ```

- 文件动态传参可以用switch（id）{case 0：。。。。}这种方法来

- {children}的用法，当写了一个公用组件button的时候，在return（标签中<>{children}</>）这里的children可以获得引入该公共组件的时候穿的参数，例如在另外一个组件中<Button  >{v}</Button>，那么这里v是多少，children就会获取到多少。

- github的用法：1：右键打开git bash；2： `git remote add [shortname] [url]`：shortname:origin url:从github上clone复制的地址

- 如果更改了一个文件，然后git status可以查看当前文件的状态3：git add .  :是指加载所有的文件 4：git commit -m “注释” //提交文件，并且给文件加注释 5：git pull //拉取文件 6：如果文件出现感叹号，说明有冲突，别人也对该文件做了更改，那么就可以在visual studio中打开，在别人更改的内容和自己更改的内容之间会有====的符号，上边选项可以删除别人的更改或者是合并别人和自己的更改，进行选择 ；7：git push 提交自己的文件到库里边去 

- git clone 文件名 （这个文件名是在github自己的库中可以找到），则可以把github库中的文件下载到本地。

- 在git bash中ctrl+insert和shift+insert分别是复制粘贴，或者鼠标的滚轮是粘贴的功能

- git remote -vv 是用来查看已经进行关联的文件的

- 以下是一个代码精简的过程

- ```
  render: function() {
            var icon = this.props.icon ? "<img src='" + this.props.icon + "' />" : ""; 
            var text = this.props.text ? this.props.text : ""; 

            return(
  			<button>
              <span dangerouslySetInnerHTML={{__html: icon}}></span>//这里dangerouslySetInnerHTML={{__html：variable}}是一个es6语法，react要插入标签的话不可以直接插入，需要用这种方法来插入，这里的variable就是指要插入的标签
  			{text}
  			</button>
            );
          },
          然后精简代码如下
    render(){
          const {
              className,
              onClick,
              text='',
              icon,
              // children=null
          } = this.props
          return(
              <div>
                  <span onClick={onClick} className={className}>
                      { !!icon && <img src={icon} />}// { icon ? <img src={icon} /> : null}
                      { !!text && <span>{text}</span> }//{ text ? <span>{text}</span> : null}
                  </span>
              </div>
          )
      }
      这里的！！是一个强制转换，例如+和-号是强制转换为数字的过程，然后！！是一个强制转换为布尔值的过程，为了防止icon或者是text是0的这种情况
  ```

- flex布局：display:flex；在一个盒子设置为flex布局之后，它的子元素的clear float还有vertical-align属性将会消失。

  # flex的语法介绍

  6个属性：

  1：flex-direction

  ```
  row：主轴为水平方向，起点在左端
  row-reverse：主轴为水平方向，起点在右端
  column： 主轴为垂直方向，起点在上沿
  column-reverse：主轴为垂直方向，起点在下沿
  ```

  2：flex-wrap

  ```
  nowrap：不换行
  wrap：换行，第一行在上方
  wrap-reverse：换行，第一行在下方
  ```

  3:    flex-flow

  ```
  属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
  ```

  4:    justify-content

  ```
  属性定义了项目在主轴上的对齐方式
  flex-start（默认值）：左对齐
  flex-end：右对齐
  center： 居中
  space-between：两端对齐，项目之间的间隔都相等。
  space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
  ```

  5:    align-items

  ```
  属性定义项目在交叉轴上如何对齐。
  flex-start：交叉轴的起点对齐。
  flex-end：交叉轴的终点对齐。
  center：交叉轴的中点对齐。
  baseline: 项目的第一行文字的基线对齐。
  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
  ```

  6:     align-content

  ```
  属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
  flex-start：与交叉轴的起点对齐。
  flex-end：与交叉轴的终点对齐。
  center：与交叉轴的中点对齐。
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  stretch（默认值）：轴线占满整个交叉轴。

  ```

  ```
  .box{
    display:-webkit-flex;/*safari*/
    display:flex; //Webkit内核的浏览器，必须要加上-webkit
    flex-direction:row|row-reverse|colum|colum-reverse; //默认值为row
    flex-wrap: nowrap | wrap | wrap-reverse;//默认 nowrap
    flex-flow: <flex-direction> || <flex-wrap>;//默认是row和nowrap
    justify-content: flex-start | flex-end | center | space-between | space-around;//默认值flex-start
    align-items: flex-start | flex-end | center | baseline | stretch;//默认值为stretch
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;//默认值是stretch
    order: <integer>;//属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
    flex-grow: <number>; /* default 0 *,属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。/
    flex-shrink: <number>; /* default 1 * 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。/
     flex-basis: <length> | auto; /* default auto * 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。/
     flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
     align-self: auto | flex-start | flex-end | center | baseline | stretch;//该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
  }
  ```


```
.text{
            float: right;
            width: 100px;
            height: 100px;
            border: 1px solid red;
            flex:0 0 20%;
        }
        .twice{
            flex: 0 0 80%;
        }
        //这一段代码就是将一行里边的两个框（宽或者高）（取决于flex-direction：row？column）按照2：8的比例来展示
```



   项目属性：

- `order`

- `flex-grow`:   如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

- `flex-shrink`:  如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

- `flex-basis` ：它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

- `flex` ：该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

  建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

- `align-self` ：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

  # Date类型

  var start=Date.now()//获取当时的日期和时间的毫秒数

  var start=+new Date（）使用+操作符获取Date对象的时间戳

  # 函数声明和函数表达式

  ```
  alert（sum(10,10)）; 
  function sum(num1,num2){
    return num1+num2
  }//这是一个函数声明，输出没有错，解析器率先读取了函数声明，并使其可以在函数声明之前使用
  ```

```
alert（sum(10,10)）; 
 var sum=function (num1,num2){
  return num1+num2
}//这个是一个函数表达式，这个会出错
```

- 函数也具有属性：length和prototype

  ```
  function sayname（name）{
       alert（name）
    }
       alert（sayname.length）//1
  ```

- 三个特殊的引用类型：Bolean，String，Number

  引用类型和基本包装类型的区别就是在于对象的生命周期，使用new创建的引用类型的实例，在执行流离开作用域之前都一直保存在内存中，而自动创建的基本包装类型的对象，只是存在于一行代码的执行瞬间，然后立即被销毁，例如下

  ```
  引用类型
  var s1=new String("rrrrr");
  var s2=s1.substring(2);
  s1=null;
  基本包装类型:
  var s1="rrrrr";
  s1.color="red";
  alert(s1.color)//错误，因为在第二行执行完就已经被销毁了
  ```

- math.floor(math.random()*10+1)//选择一个介于1到10之间的值

- math.floor(math.random()*9+2)//选择一个介于2到10之间的值



# js的对象属性

Object.defineProperty（）：接收三个参数：属性所在的对象，属性名，一个描述符对象，例如

Object.defineProperties（）是用来通过描述符一次定义多个属性的

```
var person={};
Object.defineProperty(person,"name",{writable:false,
value:"nnnnnn"})//writable,Enumerable,Configurable,Value 这是Object。数据的属性

alert (person.name);//nnnnnn
person.name="eeee";
alert(person.name);//nnnnnn因为writable：false

Object.defineProperties(person,{"name"：{writable:false,
value:"nnnnnn"}，edition：{writable:true,
value:"n444n"}  }  )

```

Object.getPrototypeOf(person ): 返回的是一个person这个对象的原型（person是一个构造函数）

Object.getOwnPropertyNames（对象名）：它返回的是该对象的所有实例属性，无论是否可枚举P154 页

Object.keys（对象名）：这个接收一个对象作为参数，返回一个包含所有的可枚举的该对象的所有属性的字符串数组；

person.hasOwnProperty("name"):如果反回false那么name这个属性不存在在原型上，而是实例中

查看书p154页

_year：这里year 的前边添加一个下划线，表示的是只能通过对象方法来访问的属性（get；set）

Object.getOwnPropertyDescriptor（属性所在的对象，尧都区其描述符的属性名称）：例如

 var a=Object.getOwnPropertyDescriptor（person，“name”）//返回值是一个对象

a.value；

a.writable；

**工厂模式**：用函数来封装以特定接口创建对象的细节，例：

```
function createperson(name,age,job){
  var o=new Object();
  o.name=name;
  o.age=age;
  o.job=job;
  o.sayhello=function(){
    return(this.name)
  }
  return o;
}
下边直接通过调用函数传参来建立不同的对象

构造函数创造对象
function Person(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
  this.sayName=function(){
    alert(this.name)
  }
}
var person1=new Person("dd",33,"doctor")
```

# 项目文件介绍

babelrc：兼容性，有些浏览器不能识别es6，那么就可以把语言转换成所有浏览器可以识别，比如ie6不能识别箭头函数，这个就可以让箭头函数在ie中也可以运行

eslintic：约束，1：必须使用驼峰命名  2：if语句必须要有大括号 3：不能出现多行空行

# scss

1：引入文件用@import1

2：使用变量：$backgroundColor: #f7f7f7;

  .className{

​        background:$backgroundColor；

}

3：@include setWH();//使用@include引入外部文件（@import）里边的一个方法

4：使用flex定位的时候，如果给设置了width，height值，就不要设置flex：1 否则优先执行flex，从而height，width值不生效

# mobx的用法步骤

- 首先要下载mobx ： 因为在package文件中都已经存放好了配置包，所以只需要在命令框中npm mobx就可以下载了

- 然后进入mobx的使用步骤：

  1. 在store中建立一个model，然后该model可以放每个模块的model例如在model里边再新建一个headerModel

  2. 在herderModel里边新建一个index.js，然后进入这个js文件中，第一步是引入modx的两个方法：

     ​                  import { observable,action } from 'mobx';

     然后第二步是使用两个方法，，首先使用class 创建一个函数，然后在函数里边使用两个mobx的方法，一个是 @observable，这个是用来声明变量的，和state={variable：vlue}的方法是一样的，一个是@action，这个是用来定义一个函数方法，可以通过这个函数来改变@observable定义的变量 或者其他的操作，示例代码如下：

     ```
     class headerModel {
         @observable title = 'header'

         @action 
         setHeader(title){
             this.title = title
         }
     }
     export default new headerModel()
     ```

3.  把上边所创建的mobx放入到store中，因为可能一个项目中有n多个mobx，将这所有的mobx放入到一个store中，这样在以后的组件中如果需要用到这个mobx，就只需要注入方法就可以了（第六条会讲到）；

4.  我们在store文件下有一个主index.js，进入该文件，，假设现在已经有两个model，一个是mainModel，另外一个是headerModel，把这两个model放入到store里边，代码如下：

          ​```
          import mainModel from './model/mainModel';
          import headerModel from './model/headerModel';
          
          const store = {
              mainModel,
              headerModel,
          
          }
          export default store
          ​```

5.  在总文件src底下有一个index.js，进入到这个文件，将store引入进去。步骤如下代码

          ​```

          import store from './store/index.js'//第一步先引入store

          function render() {
            ReactDOM.render(
              <Provider {...store}>//三个点表示的是展开store，获取store里边的所有对象内容，通过provider标签引入store，然后绑定layout比如var a=【1，2，3，4】
               //那么var c=【1，2，...a】 alert（c）：c的值是3，4
                <BrowserRouter>
                  <Route exact path="/" component={Layout} />
                </BrowserRouter>
              </Provider>,
              document.getElementById('root')
            )
          }
          
          render() 
          ​```

layout相当于是一个主页（父组件），然后在这个父组件中引入各个子组件，而子组件有用到store中model中的方法

6：如果在子组件中有用到model中的方法，需要注入方法，具体步骤如下所示

```
import { observer,inject } from 'mobx-react';//先引入
@inject('headerModel'，'mainModel')//注入要用到的model的名称（class model名 {}）
@observer//注入方法

然后再子组件中如果要用到model中的变量，通过this.props.headerModel.变量名，如果要用到方法就通过this.props.headerModel.setHeader(参数)
```

7. 这里涉及到一个堆和栈的概念：首先一个数组或者是一个对象，它们是引用类型，存在一个类似仓库的栈，但是对于基本类型，例如string，number这些都只是数值

   ​     var a=[1,2,3,4,5,] （对象也是）    =>   仓库 => 数据值

   ​     var b=“tingting”   =>数据值（不存在仓库）

   ​    所以当var c=a的时候，首先对c传入的是一个仓库，所以c和a是指向同一个仓库的，然后要改变了c的值的时候，a的值也会发生改变，但是像 var c=b 这里是直接把值传给c了，相当于c和b分别是两个不同的变量，只不过拥有相同的值，所以在改变c的值的时候，b的值不会发生改变的。因为在model中 @observable list=【】，这个list的值就只能在@action里边的方法中改变，如果在子组件直接设置一个函数来对该值进行更改的话会出错，解决方案有两个，一个就是在@action 设置方法去改变值，然后通过this.props.headerModel.list的方法获取这个值给子组件；另外一种方法就是深度拷贝，使用的方法如下所示：

   ```
   import { toJS } from 'mobx';//首先引入toJS，这个是用来深度拷贝的，它一般是用于数组的
   	  const list = Object.assign([], toJS(this.props.mainModel.list)) 
         list.push(text)
         this.props.mainModel.setList(list);
         
         //Object.assign（）的使用如下所示
         Object.assign(target, ...sources)
         参数: target

               目标对象, sources和target对象属性进行合并, 复制结束之后, 将结果放到target对象中
               sources

               需要复制属性的对象, 可以是多个
   ```

   8. 如果要将一个值清空的话要注意应该为‘’而不是‘ ’ ，引号中间不能有空格，不然就不是清空而是赋值为空格了
   9. 在@action里边不要用return语句，这个函数只是用来改@observable 所定义的数据的值的，然后在组件中通过{this.props.**Model.数据名}来获取该数据值，而不要在组件中执行一个函数，通过函数来返回一个数据值来获取该数据值；
   10. 如果在某一个组件a中赋同一个值给b组件，c又通过b来获取a的这个值，那么只需要在a中写一个函数，把它的值赋给b和c组件的相应值，然后只需要在a中调用该函数传递参数，而不需要每次都执行b中的函数传给b以及c又去执行b中的函数获取值。
   11. f2是重命名的快捷键
   12. ctrl+/是注释   再按一下是去掉注释
   13. 按住alt键，可以同时选中多个光标
   14. alt+向上键就可以移动代码向上一行
   15. 只要创建一个函数，就会为该函数创建一个prototype属性，这个属性指向了函数的原型，（prototype就是通过调用构造函数而创建的那个对象的实例的原型对象），然后默认情况下每一个prototype都会自动获取一个constructor属性，这个属性指向了prototype属性所在函数的指针。

      例如：Person.prototype.constructor指向Person

      # 关于flex用法

      https://zhuanlan.zhihu.com/p/39052660?utm_source=wechat_session&utm_medium=social

   # 寄生构造函数模式

   这种函数就类似于工厂模式，

   ```
   function Createperson(name,age,job){
     var o=new Object();
     o.name=name;
     o.age=age;
     o.job=job;
     o.sayhello=function(){
       return(this.name)
     }
     return o;
   }
   var friend=new Createperson('d',66,"teacher");
   friend.Sayhello
   ```


# 继承：包括有接口继承和实现继承

a instanceof b?alert("true"):alert("false"); //a是b的实例？真:假

我们可以使用 typeof 来获取一个变量是否存在，如 if(typeof a!="undefined"){alert("ok")}，而不要去使用 if(a) 因为如果 a 不存在（未声明）则会出错。

以下是一个继承的实例：

```
function SuperType(){
  this.proty="false";
  this.color=[1,2,3,4,5]
}
SuperType.prototype.getSuperValue=functions(){
  return this.proty;
}
function SubType(){
  this.subproty="true"
}
SubType.prototype=new SuperType();
var instance1=new SubType()
instance.color.push(7);
alert (instance1.color)//1,2,3,4,5,7
var instance2=new SubType();
alert (instance2.color)//1,2,3,4,5,7因为SubType的原型拥有了color这个属性，所以它的所有的实例都是共享这同一个color的，所以一个更改了之后，其它的实例也是可以反映出来的，这就是写在原型里边的属性和写在构造函数里边的属性的区别，写在构造函数里边的属性就不会这种更改一个实例之后会反应在其它的实例中
解决办法就是 借用构造函数，方法如下
function SuperType(name){
  this.color=[1,2,3,4,5]
  this.name=name
}
function SubType(){
  SuperType.call（this，“婷婷”）； //继承了SuperType 
}
var instance1=new SubType()
alert（instance1.name）//tingting
instance.color.push(7);
alert (instance1.color)//1,2,3,4,5,7
var instance2=new SubType();
alert (instance2.color)//1,2,3,4,5,
//下边这个重写了subtype的原型，那么就相当于覆盖了之前继承的supertype的原型，那么访问supertype的东西就不再存在了
SubType.prototype={
  getValue:function(){
    return this.subproty;
  }
}
var instance3=new SubType()
alert(instance3.getSuperValue)//error

```

# ？？

```
//不要这样做
if(a){
  function sayHi(){
    console.log("hello")
  }
}else{
  function sayHi(){
    console.log("no")
  }
}
//可以这样做
var sayHi
if(a){
  sayHi=function (){
    console.log("hello")
  }
}else{
 sayHi=function (){
    console.log("noos")
  }
}
```

# 递归的写法

```
function factorial(num){
if(num<1){
return 1;
}else{
  return num*arguments.callee(num-1)
}
}
```
# 闭包

1. 解除对函数的引用方法：函数名=null

2. 区别闭包和匿名函数，匿名函数就是function（）{}；闭包就是指有权访问另一个函数作用域中的变量的函数，要注意的是匿名函数获取的是包含函数中任何变量的最后的一个值，因为闭包所保存的是整个变量对象，而不是某个特殊的变量，即使闭包不直接引用，但这个对象也会在闭包里边，所以要清楚内存的时候要将所有的对象=null；用以下的代码来说明：

   1:在这里因为闭包里返回的是包含函数中变量的最后一个值，i是包含函数中的变量，它的值有10个，1，2，3，4，5，6，7，8，9，10，所以闭包获取其最后一个值10，那么无论createFunction函数调用多少次，返回的值都是同样的10

   ```
   function createFunction(){
     var result=new Array();
     for (var i=0;i<10;i++){
       result[i]=function(){
         return i;
       }
     }
   }
   ```

​       2:这里通过一个匿名函数返回一个num，这个num获取的是i的值，然后闭包就可以每次获取不同的值了

```
function createFunction(){
   var result=new Array();
   for (var i=0;i<10;i++){
    	result[i]=function(num){
    	    return function(){
                 return num;
    	    }(i)
    	}
   }
}
```

# this

1：注意一点匿名函数的作用域一般都是window

如下代码所示

```
var name="the widow"
var object={
  name:"my object";
  getNameFunc:function(){
     return function(){
       return this.name  
       alert(object.getNameFunc()())//the widow
     }
  }
}
```

```
var name="the widow"
var object={
  name:"my object";
  getNameFunc:function(){
   var that=this;
     return function(){
       return that.name  
        alert(object.getNameFunc()())//my object
     }
  }
}//通过对this的绑定 然后获取到对象
```

# 特权方法

1. 能够访问私有变量和私有函数的公有方法就是特权方法（P187）：

   ```
   function MyObject（）{
     //私有变量和私有函数
     var a=10;
     function privateFunction(){
        retirm false;//虽然没有使用var关键字，但是因为函数声明只能创建一个局部函数
     }
     //特权方法
     this.publicMethod=function(){
       a++;
       return privateFunction();
     }
   }
   ```

# window

1：全局变量不能通过delet删除  比如 var A=1; delete A；出错

# location

location提供了 与当前窗口中加载的文档有关的信息

location.href="http://......"用于改变浏览器的位置

但是如果要禁用后退到前一个页面的话就用replace代替href

//假设初始url：http://www.wrox.com/WileyCDA

//将url修改为 http://www.wrox.com/WileyCDA/#section1

location.hash="#section1"

//将url修改为 http://www.wrox.com/WileyCDA/?q=javascript

location.search="?q=javascript"

//将url修改为 http://www.yahoo.com/WileyCDA/

location.hostname="www.yahoo.com"

//将url修改为 http://www.yahoo.com/mydir/

location.pathname="mydir"

// 将url修改为http://www.yahoo.com:8080/WileyCDA

location.port=8080

# node类型

每一个节点都有一个childNodes属性，这个属性保存着一个NodeList对象，保存一组有序的节点，要注意这个NodeList不是一个数组，而是一个对象，这个对象的访问可以用【】或者是item（number），getElementByTagName（）也是，通过【】或者是item（number）来访问，如果要查找元素的标签名，可以通过（

var element=document.getElementById("div1");

var c=element.tageName

）

 var a=someNode.childNodes【0】

 var b=someNode.childNodes.item（0）

要将nodeList转换为数组的形式用下边的代码：

var ArrayofNodes=Array.prototype.slice.call（someNode，childNodes，0）

节点的方法：通过getElementById来获取节点信息

1：cloneNode

2：appendChild

3：insertBefore

4：replaceChild

5:document.createElement

6:document.createTextNode

使用方法如下所示

```
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");//.nodeValue=“修改的文本节点内容”
para.appendChild(node);
1：
var element =document.getElementById("div1");
element.appendChild(para);
2:
var element=document.getElementById("div1");
var child=document.getElementById("p1");
element.insertBefore(para,child)
3:
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
4:
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);

</script>
```

在上边的示例中，

var element=document.getElementById("div1");

alert（element.childNodes.length）//值等于6，因为在这里有的浏览器把文本节点也算进去了，所以这里要用一下的方法来判断是否是元素节点：（或者用element.firstElementChild去代替element.firstChild）

```
for (var i=0,len=element.childNodes.length;i<len;i++){
  if(element.childNodes[i].nodeType==1){
    //执行某些操作
  }
}
```



var div=document.getElementById("div")

1: div.getAttribute("id")

2: div.setAttribute("id","yyyy")

3:div.removeAttribute

文档片段：creatDocumentFragment   不需要一次次的渲染，等家在完成了把li直接都放到这个文档中

```
var fragment=document.creatDocumentFragment();
var ul=document.getElementById("ul");
for(var i=0;i<3;i++)
{
  li=document.creatElement("li");
  li.appendChild(document.createTextNode("item"+(i+1)));
  frgment.appendChild(li);
}
```

# 选择符：

document.querySelector（“#className”）//返回第一个元素

document.querySelectorAll（“#className”）//返回所有的元素，用item（）的方法去访问

# html5

1：为所有的元素添加了classList属性代替className

   @ add（value）将给定的字符串值添加到列表中，如果值已经存在就不添加了

   @contains（value）表示列表中是否存在给定的值，存在就返回true，否则返回false

​    @remove（value） 从列表删除给定的字符串（注意是字符串）

   @toggle（value）如果列表中已经存在给定的值，删除它，如果不存在，添加它



# table

1:a=a||{} 初始化数据，不存在的话就为空

2：[...Array(46).keys()].//0.......45

3:() = >2 是指这个函数直接输出2  ，如果要加大括号就要加return：() = >{return 2}

4:${e.target.value}  

5：ctrl+D  同时选中多个同样的字段

6：ctrl+f   查找

7：ctrl+g    定位某一行

# router

1:this.props.history.push(`/edit?userId=${item.key}`);(传参数给这个页面)

2:const { location,  yunyanModel } = this.props;

   const userId = location.search.substring(1,location.search.length).split('=')[1];//location.search 就可以获取前边传的参数

3：d = c.map(v => return( { [v.split('=')[0]] : v.split('=')[1] } ))  //这个是通常对地址的解析的大概方法，先用substring(1,location.search.length)把地址中的第一个问号去掉，然后再用相应的字符串的分割方法split来做。split是字符串方法，把字符串分割为数组，join是数组的方法，把数组用特定的连接符设置为字符串的形式

4：a={b:3,c:5,d:9} 

a.k是在a中找值为k的属性 ，然后a[k]这里的k可以是一个变量，然后通过给k循环赋值便利a里边的属性。