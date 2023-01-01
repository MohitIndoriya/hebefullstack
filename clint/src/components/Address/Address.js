import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getcart } from '../../actions/cartAction';
import "./Address.css"


const initialForm ={

    firstName:"",
    lastName:"",
    address:"",
    country:"",
    pincode:"",
    city:"",
    state:""



}

const Address = () => {

    const [form,setForm] = useState(initialForm);
    const dispatch=useDispatch();
    const changeHandler=(e)=>{
        const {value,name} = e.target;
        setForm({...form,[name]:value});
    }
    const clickHandler=async()=>{
        let token=localStorage.getItem("token");
        let res=await fetch('http://localhost:8080/cart',{
            method:"GET",
            headers:{
                token:token
            }
            
        })
        let data = await res.json();
        
        let res1 = await fetch(`http://localhost:8080/users/loggedIn/${token}`);
        let data1 = await res1.json();

        let orderDetails={
            userId:data1.data["_id"],
            cartData:data.data,
            address:form
        }

        let res2 = await fetch(`http://localhost:8080/order`,{
            method:"POST",
            body:JSON.stringify(orderDetails),
            headers:{
                "Content-Type":"application/json",
                token:token
            }
        })

        let data2 = await res2.json();
        
        let res3 = await fetch(`http://localhost:8080/cart/delete`,{
            method:"GET",
            headers:{
                token:token
            }
        })
        
        let data3 = await res3.json();
        // console.log(data3);
        dispatch({
            type:"GETCART",
            payload:[]
        })
        Navigate('/payment')

    }

  return (
    <>
        <div class="container">
  <h1 className='h1'>Shipping</h1>
  <p  className='p'>Please enter your shipping details.</p>
  <hr />
  <div class="form">
    
  <div class="fields fields--2">
    <label class="field">
      <span class="field__label" for="firstname">First name</span>
      <input class="field__input" type="text" id="firstname" name='firstName' value={form.firstName} onChange={changeHandler} />
    </label>
    <label class="field">
      <span class="field__label" for="lastname">Last name</span>
      <input class="field__input" type="text" id="lastname" name='lastName' value={form.lastName} onChange={changeHandler} />
    </label>
  </div>
  <label class="field">
    <span class="field__label" for="address">Address</span>
    <input class="field__input" type="text" name='address' value={form.address} id="address" onChange={changeHandler}/>
  </label>
  <label class="field">
    <span class="field__label" for="country">Country</span>
    <select class="field__input" name='country' value={form.country} id="country" onChange={changeHandler}>
      <option value=""></option>
      <option value="india">India</option>
      <option value="unitedstates">United States</option>
    </select>
  </label>
  <div class="fields fields--3">
    <label class="field">
      <span class="field__label" for="zipcode">Zip code</span>
      <input class="field__input" type="text" name='pincode' value={form.pincode} id="zipcode" onChange={changeHandler}/>
    </label>
    <label class="field">
      <span class="field__label" for="city">City</span>
      <input class="field__input" type="text" name='city' value={form.city} id="city" onChange={changeHandler}/>
    </label>
    <label class="field">
      <span class="field__label" for="state">State</span>
      <input type="text" class="field__input" name='state' value={form.state} id="state" onChange={changeHandler}/>
       
    </label>
  </div>
  </div>
  <hr/>
  <button onClick={clickHandler} class="button">Continue</button>
</div>    
    </>
  )
}

export default Address


