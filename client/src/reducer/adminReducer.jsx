let intial={
    isAdmin:false,
    islodding:false,
   
   }
   export const Adminreducer=(state=intial,action)=>{
       switch (action.type){
           case "ADMINLOGIN":
               return {
             
               isAdmin:true,isloading:false
             
    
           }
           
           case "ADMINLODING":return {
               islodding:true
           }
           default: return state
         
       }
   
   }