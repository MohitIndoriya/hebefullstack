import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Checkout.css"


const Checkout = () => { 
    let { cart, total } = useSelector((store) => store.cart)
    let navigate=useNavigate()
  function radioBtns() {
   
  }
  return (
      <div >
          <h1 style={{margin: "10px 10px 10px 13%" , fontSize: "22px"}}>Payment Details</h1>
          <h3 style={{margin: "10px 10px 10px 13%" , fontSize: "22px"}}> Price: ${total}</h3>
        <div id="paymContainer">
            <div id="paysubcontiner">
                <p>WALLET</p>
          <div><input class="setinp" type="radio" name="select" value="walletPay" onclick={radioBtns()} /> <span
                        id="image"><img src="https://www.jiomart.com/assets/pgicon/Paytm_lo.png"
                            alt=""/></span> <span style={{top: "0px"}} class="setspan">Paytm</span></div>
                          
                <div><input class="setinp" type="radio" name="select" value="walletPhone" onclick={radioBtns()}/> <span
                        id="image"><img src="https://www.jiomart.com/assets/pgicon/Phone_Pay_lo.png"
                            alt=""/></span> <span class="setspan">PhonePe / UPI</span></div>
                           
                <div><input class="setinp" type="radio" name="select" value="walletjio" onclick={radioBtns()}/> <span
                        id="image"><img
                            src="https://www.jiomart.com/msassets/images/jio-money.png"
                            alt=""/></span> <span class="setspan">JioMoney</span></div>
                         
                <div><input class="setinp" type="radio" name="select" value="walletM" onclick={radioBtns()}/> <span
                        id="image"><img src="https://www.jiomart.com/assets/pgicon/Mobikwik_lo.png"
                            alt=""/></span>
                    <span class="setspan">
                        MobiKwik</span>
                </div>
                
                <div><input class="setinp" type="radio" name="select" id="wallet" onclick={radioBtns()} /> <span
                        id="image"><img
                            src="https://www.jiomart.com/assets/pgicon/Free_Charge_lo.png"
                            alt=""/></span> <span class="setspan">Freecharge Pay Later | UPI | Wallet</span></div>
                <div style={{marginBottom:"60px"}}><input class="setinp" type="radio" name="select" value="cod"
                        onclick={radioBtns()}/> <span id="image"><img
                            src="https://www.jiomart.com/assets/pgicon/COD.png" alt=""/></span> <span
                        class="setspan">Cash on Delivery</span></div>

            </div>
           
        </div>

        <button className='oPlaced' onClick={()=>{
         
         alert("order placed")
         navigate("/")
  }}><div>Proceed</div></button>
    </div>
    
  )
}

export default Checkout