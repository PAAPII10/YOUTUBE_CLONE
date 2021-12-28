const initialState=false


const ThemeReducer = (state=initialState,action)=>{
    if(action.type=='change_theme'){
        return action.payload
    }
    return state
}

export default ThemeReducer;