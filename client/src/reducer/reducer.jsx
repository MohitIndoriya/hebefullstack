
let intial={
 isAuth:false,
 islodding:false,
 userName:"",
 message:""
    
}
export const reducer=(state=intial,action)=>{
    switch (action.type){
        case "REGISTER":
            return {
          
            ...state,message:"Account created"
          
 
        }
        case "LOGIN":
            return{
                ...state,
                isAuth:true,islodding:false,userName:action.payload
            }
        case "LODING":return {
            ...state,islodding:true
        }
        case "LOGOUT":return intial
        
        default :
        return state;
        
    }

}