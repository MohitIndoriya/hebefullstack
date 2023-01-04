import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Signin=(creds)=>async (dispatch)=>{
   console.log("chalgyooooo")
    dispatch({type:"LODING"})
    try{
        let res=await axios.post(`${process.env.REACT_APP_BACKEND_URL}users/login`,creds)
        console.log(res,"ohu")
        localStorage.setItem("token",res.data.data)
        if(res.data.length>0){
            toast.success('SucessFully Login', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            return dispatch({type:"LOGIN",paylode:res.data.data[0].firstName})

          
        }else{
            
            
        }
    }catch(e){
        toast.warn('Invalid Credentials', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        // console.log(e)
    }
}

export const Logout =()=>(dispatch)=>{
   return  dispatch({type:"LOGOUT"})
}