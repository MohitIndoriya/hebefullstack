const initialState = {
    image:"",
    firstName:""
}

export const loginReducer=(state=initialState,action)=>{

    switch (action.type) {
        case "login":return{
            ...action.payload
        }
        case "logout":return{
            ...initialState
        }
    
        default:return initialState
            
    }
    


}