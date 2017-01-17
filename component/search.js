import React,{ Component } from "react";


class Search extends Component{
  constructor(props) {
      super(props);
  }
  handleClick(){
    alert(this.refs.input.value)
  }
  render(){
    let node = null
    return(
       <div className = "search">
          <input ref = "input"/>
          <button onClick = {this.handleClick.bind(this)}>搜索</button>
       </div>
    )
  }
}

export default Search;
