import axios from "axios"
import { toast } from "react-toastify";

export  const getcart=()=>async (dispatch)=>{
   try{
    let token=localStorage.getItem("token");
    let res=await fetch(`${process.env.REACT_APP_BACKEND_URL}cart`,{
        method:"GET",
        headers:{
            token:token
        }
        
    })
    let data = await res.json();
    // console.log(data.data)
   return  dispatch({
    type:"GETCART",
    payload:data.data
      
      
    })
   }catch(e){
    return  dispatch({
        type:"GETCART",
        payload:[]
          
          
        })
    // console.log("Hello")
   }
}
export const HandleQuantiy=({id,quantity})=>async (dispatch)=>{


    try{
        let token = localStorage.getItem('token');
        let data=await fetch(`${process.env.REACT_APP_BACKEND_URL}cart/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                quantity:quantity
            }),
            headers:{
                "Content-Type":"application/json",
                token:token
            }
        })
        
    }catch(e){
        // console.log("errFound");
    }
    try{
        let token=localStorage.getItem("token");
        let res=await fetch(`${process.env.REACT_APP_BACKEND_URL}cart`,{
            method:"GET",
            headers:{
                token:token
            }
            
        })
        let data = await res.json();
        // console.log(data.data)
       return  dispatch({
        type:"GETCART",
        payload:data.data
          
          
        })
       }catch(e){
        
        // console.log("Hello")
       }

}
export const removedata=(id)=>async(dispatch)=>{
    try {
        let token = localStorage.getItem("token");
        let cart1=await fetch(`${process.env.REACT_APP_BACKEND_URL}cart/${id}`,{
            method:"Delete",
            headers:{
                token:token
            }
        })
        
    } catch (error) {
        
    }
    try{
        let token=localStorage.getItem("token");
        let res=await fetch(`${process.env.REACT_APP_BACKEND_URL}cart`,{
            method:"GET",
            headers:{
                token:token
            }
            
        })
        let data = await res.json();
        // console.log(data.data)
       return  dispatch({
        type:"GETCART",
        payload:data.data
          
          
        })
       }catch(e){
        
        // console.log("Hello")
       }


}
export const addtocart=(e)=>async(dispatch)=>{
    let obj={...e};
    obj.productId=obj["_id"];
    obj.quantity=1;
    delete obj["_id"];
    try {
        
        // console.log(item.data,"o hu m")
        let token = localStorage.getItem('token');
        
        let res=await fetch(`${process.env.REACT_APP_BACKEND_URL}cart`,{
            method:"POST",
            body:JSON.stringify({
                ...obj
            }),
            headers:{
                token:token,
                "Content-Type":"application/json"
            }
        });
        let data = await res.json();
        if(res.status==200){

            toast.success('Added To Cart', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            
        }
        else{

            toast.warn('Already In Cart', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        
    } catch (error) {
        // console.log(error)
    }
    try{
        let token=localStorage.getItem("token");
        let res=await fetch(`${process.env.REACT_APP_BACKEND_URL}cart`,{
            method:"GET",
            headers:{
                token:token
            }
            
        })
        let data = await res.json();
        // console.log(data.data)
       return  dispatch({
        type:"GETCART",
        payload:data.data
          
          
        })
       }catch(e){
        
        // console.log("Hello")
       }
}