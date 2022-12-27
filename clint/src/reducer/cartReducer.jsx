const intialCart={
    cart:[],
    total:0,
    isLoading:false
    
}
export const cartReducer=(state=intialCart,{type,payload})=>{
               switch(type){
                case "ADDCART":
                    let added=[...state.cart,{...payload,quantity:1}]
                    let Total=added.reduce((ac,el)=>{
                     return ac+(el.price*el.quantity)
                  },0)
                    return {
                    ...state,
                    cart:added,
                    total:Total
                }
                case "REMOVECART":
                    let Cart=[...state.cart]
                    let newcart=Cart.filter((e)=>e.id!=payload)
                    let  Total1=newcart.reduce((ac,el)=>{
                     return ac+(el.price*el.quantity)
                  },0)
                     return {
                        ...state,
                        cart:newcart,
                        total:Total1
                     } 
                     case "GETCART":
                        let arr=payload.reduce((ac,el)=>{
                           return ac+(el.price*el.quantity)
                        },0)
                        console.log(arr,"payload");
                     return {
                        ...state,
                        cart:payload,total:arr
                     }

                     
                    
             default: return state 
               }
}