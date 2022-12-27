import axios from "axios"

export  const getcart=()=>async (dispatch)=>{
   try{
    let data=await axios.get("http://localhost:8080/cart")
    console.log(data.data)
   return  dispatch({
    type:"GETCART",
    payload:data.data
      
      
    })
   }catch(e){
    console.log(e)
   }
}
export const HandleQuantiy=({id,quantity})=>async (dispatch)=>{
    try{
        let data=await axios.patch(`http://localhost:8080/cart/${id}`,{quantity})
        let arr=await axios.get("http://localhost:8080/cart")
        return  dispatch({
            type:"GETCART",
            payload:arr.data
              
              
            })
    }catch(e){

    }
}
export const removedata=(id)=>async(dispatch)=>{
    try {
        let cart1=await axios.delete(`http://localhost:8080/cart/${id}`)
        let arr2=await axios.get("http://localhost:8080/cart")
        return dispatch({
            type:"GETCART",
            payload:arr2.data
        })
    } catch (error) {
        
    }
}
export const addtocart=(id)=>async(dispatch)=>{
    try {
        let item =await axios.get(`http://localhost:8080/products/${id}`)
        console.log(item.data,"o hu m")
        await axios.post("http://localhost:8080/cart",item.data)
        let arr3=await axios.get("http://localhost:8080/cart")
        return dispatch({
            type:"GETCART",
            payload:arr3.data
        })
        alert("product added to cart")
    } catch (error) {
        console.log(error)
    }
}