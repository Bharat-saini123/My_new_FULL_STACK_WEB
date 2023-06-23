const { createContext, useReducer } = require("react");
const reducer=(state,action)=>{
if(action.type==="USER"){
    return action.payload
}
return state


}
const AppContext=createContext();
const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,null);

return <AppContext.Provider value={{state,dispatch}}>


{children}

</AppContext.Provider>


}
export {AppContext,AppProvider};