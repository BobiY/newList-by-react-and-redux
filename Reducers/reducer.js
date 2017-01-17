import { combineReducers } from "redux";
function numAdd (state,id){
    return state.map( function(item,index){
       if(index===id){
          item.num++;
          return item;
       }
       return  item;
    } )
}
function list(state = [],action){
      switch(action.type){
           case "ADD_NUM" :
               return numAdd (state,action.id)
            case "DATA" :
               return action.data;
            default :
               return state;
      }
}

function loading(state = "", action){
     switch(action.type){
         case "LOADING" :
             return action.text;
         default :
             return state;
     }
}

function show(state = {showMode:"SHOW_LIST",num:0},action){
   switch(action.type){
       case "SHOW_LIST" :
           return {showMode:"SHOW_LIST",num:0};
       case "SHOW_CONTENT" :
           return {showMode:"SHOW_CONTENT",num:action.id};
       case "SHOW_PIN" :
           return {showMode:"SHOW_PIN",num:action.id};
       default:
           return state;
   }
}

const reducer = combineReducers(
    {list,loading,show}
)

export default reducer;
