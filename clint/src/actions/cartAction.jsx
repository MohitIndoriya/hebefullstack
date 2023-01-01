import axios from "axios"

export  const getcart=()=>async (dispatch)=>{
   try{
    let token=localStorage.getItem("token");
    let res=await fetch('http://localhost:8080/cart',{
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
        let data=await fetch(`http://localhost:8080/cart/${id}`,{
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
        let res=await fetch('http://localhost:8080/cart',{
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
        let cart1=await fetch(`http://localhost:8080/cart/${id}`,{
            method:"Delete",
            headers:{
                token:token
            }
        })
        
    } catch (error) {
        
    }
    try{
        let token=localStorage.getItem("token");
        let res=await fetch('http://localhost:8080/cart',{
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
        
        let res=await fetch("http://localhost:8080/cart",{
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

            alert("Added To Cart");
        }
        else{

            alert("Already In Cart");
        }
        
    } catch (error) {
        // console.log(error)
    }
    try{
        let token=localStorage.getItem("token");
        let res=await fetch('http://localhost:8080/cart',{
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