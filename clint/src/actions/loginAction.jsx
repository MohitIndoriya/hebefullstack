import { toast } from "react-toastify";

export const loginUser =async(token,dispatch)=>{

    try{
        let res = await fetch(`http://localhost:8080/users/loggedIn/${token}`);
        let data = await res.json();
        // console.log(data);
        
        return dispatch({
            type:"login",
            payload:data.data
        })
    }catch(err){
        console.log(err);
    }



}

export const logoutUser=(dispatch)=>{
    toast.success('SucessFully Logout', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    return dispatch({
        type:"logout"
    })
}