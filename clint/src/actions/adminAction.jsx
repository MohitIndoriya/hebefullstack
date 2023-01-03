import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Adminlogin=(creds)=>async (dispatch)=>{
   // console.log("chalgyooooo")
    dispatch({type:"ADMINLODING"})
    try{
        let res=await axios.post(`http://localhost:8080/users/admin/login`,creds)
        //console.log(res,"ohu")
        localStorage.setItem("Admintoken",res.data)
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
            return dispatch({type:"ADMINLOGIN",paylode:res.data})

          
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
