export const loginUser =async(token,dispatch)=>{

    try{
        let res = await fetch(`http://localhost:8080/users/loggedIn/${token}`);
        let data = await res.json();
        console.log(data);
        return dispatch({
            type:"login",
            payload:data.data
        })
    }catch(err){
        console.log(err);
    }



}

export const logoutUser=(dispatch)=>{
    return dispatch({
        type:"logout"
    })
}