import React,{Component} from "react";

class Content extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const { content,title,author } = this.props;
    return(
      <li>
         <h2 className = "newTitle">{title}</h2>
         <h4 className = "newAuthor">作者：{author}</h4>
         <p className = "newContent">{content}</p>
         <p className = "newButton"><button className = "fallbackList" onClick = {this.props.showList}>回到列表页</button></p>
      </li>
    )
  }
}

class Pinlun extends Component{
  constructor(props) {
     super(props);
  }
  render(){
    const { pinlun,showList } = this.props;
    return(
      <div>
        { pinlun.map( function( item,index ){
            return (<li key = {index} className = "list border">
                       <p className = "person">昵称：{item.person}</p>
                       <p>评论：{item.text}</p>
                   </li>)
        } ) }
        <p className = "textarea"><span>快来留下你的评论吧：</span>{" "}<textarea /></p>
        <p className = "newButton"><button onClick = {showList}>返回列表页</button></p>
      </div>
    )
  }
}

export default class Showcontent extends Component{
  constructor(props) {
     super(props);
  }
  render(){
    var contents = null;
    const { showMode } = this.props;
    if (showMode.showMode==="SHOW_CONTENT") {
        const { content,title,author,num } = this.props;
        contents = <Content
                      content = {content}
                      title = {title}
                      author = {author}
                      showList = {this.props.showList}
                   />
    }else{
      const { pinlun } = this.props;
      contents = <Pinlun
                    pinlun = {pinlun}
                    showList = {this.props.showList}
                 />
    }
    return(
      <div>
      { contents }
      </div>
    )
  }
}
