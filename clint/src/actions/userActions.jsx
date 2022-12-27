import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin=(creds)=>async (dispatch)=>{
    
    dispatch({type:"LODING"})
    try{
        let res=await axios.get(`http://localhost:8080/users?email=${creds.email}&password=${creds.password}`)
        if(res.data.length>0){
           
            return dispatch({type:"LOGIN",paylode:res.data[0].firstName})

          
        }else{
            alert("invaild creds")
        }
    }catch(e){
        console.log(e.message)
    }
}

export const Logout =()=>(dispatch)=>{
   return  dispatch({type:"LOGOUT"})
}