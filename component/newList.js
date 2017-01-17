import React,{Component} from "react";
import Showcontent from "./showAllContent";
class List extends Component {
    constructor(props) {
      super(props);
    }
    render(){
      let { title,author,content,num } = this.props.value;
      return(
          <li className = "list">
             <h2 className = "title" onClick = {this.props.showConent}>{title}</h2>
             <h4 className = "author">作者：{author}</h4>
             <p className = "content">{content.length>50?content.substring(0,50)+"...":content}</p>
             <p className = "operth">
                <button onClick = {this.props.addOne}>点赞</button>
                <span>{num?num:0}</span>
                {"  "}
                <button onClick = {this.props.showPin}>查看评论</button>
            </p>
          </li>
      )
    }
}



class Newlist extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const t = this;
        let content = null;
        let { newList,add,loading,showMode,showConent,showList,showPin } = this.props;
        if(showMode.showMode==="SHOW_LIST"){
           content = newList.map( (item,index) => <List value = {item} key = {index} addOne = {add.bind(t,index)} showConent = {showConent.bind(t,index)} showPin = {showPin.bind(t,index)}/> )
        }else{
          newList.forEach( function(item,index){
             if(index===showMode.num){
                content = <Showcontent {...item} showList = {showList} showMode = {showMode}/>
             }
          } )
        }
        return(
            <ul className = "listBox">
               {content}
            </ul>
        )
    }
}

export default Newlist;
