import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin=(creds)=>async (dispatch)=>{
   // console.log("chalgyooooo")
    dispatch({type:"LODING"})
    try{
        let res=await axios.post(`http://localhost:8080/users/login`,creds)
        console.log(res,"ohu")
        localStorage.setItem("token",res.data)
        if(res.data.length>0){
           
            return dispatch({type:"LOGIN",paylode:res.data[0].firstName})

          
        }else{
            alert("invaild creds")
        }
    }catch(e){
        console.log(e)
    }
}

export const Logout =()=>(dispatch)=>{
   return  dispatch({type:"LOGOUT"})
}