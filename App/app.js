import React,{ Component } from "react";
import { render } from "react-dom";
import { connect,Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import Newlist from "../component/newList";
import reducer from "../Reducers/reducer";
import { add,loading,post,showConent,showPin,showList } from "../Action/action";
import "../CSS/index.css";
import Search from "../component/search";
class App extends Component{
  constructor(props) {
      super(props);
  }
  render(){
     const { newList,add,loading,showPin,showConent,showList,showMode } = this.props;
      return(
          <div className = "box">
              <Search />
              <Newlist newList = { newList }
                       add = {add}
                       loading = {loading}
                       showConent = {showConent}
                       showPin = {showPin}
                       showList = {showList}
                       showMode = {showMode}
                       />
          </div>
      )
  }
  componentDidMount(){
      this.props.post();
  }
};

function mapStateToProps(state){
    return{
        newList:state.list,
        showMode:state.show
    }
};

function mapDispatchToProps(dispatch){
    return{
        add:(id) => dispatch(add(id)),
        loading:() => dispatch(loading()),
        post:() => dispatch(post()),
        showConent:(id) => dispatch(showConent(id)),
        showPin:(id) => dispatch(showPin(id)),
        showList:() => dispatch(showList())
    }
};

const logger = createLogger();
const store = createStore( reducer,applyMiddleware(thunk,logger));
App = connect(mapStateToProps,mapDispatchToProps)(App);
render(<Provider store = {store}>
          <App />
       </Provider>,document.getElementById('app')
    )
