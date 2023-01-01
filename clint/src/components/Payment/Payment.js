import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Modals from '../ThankYou/Modal';
import "./Payment.css"
import completed from "../ThankYou/Checkmark.gif"
import load from "../ThankYou/load.gif"
import { Box, Image } from '@chakra-ui/react';
const Payment = () => {
    
    const navigate = useNavigate();
    const [boolean,setBoolean] = useState(false);
    const [loading,setLoading] = useState(false);
    return (
        <>
            <div class="wrapper">
                <div class="payment">
                    


                    <h2 className="paymentHeading">Payment Gateway</h2>
                    <div class="form">
                        <div class="card space icon-relative">
                            <label class="label">Card holder:</label>
                            <input type="text" class="input" placeholder="Enter Name"/>
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="card space icon-relative">
                            <label class="label">Card number:</label>
                            <input type="text" class="input" maxLength="16" placeholder="Card Number"/>
                                <i class="far fa-credit-card"></i>
                        </div>
                        <div class="card-grp space">
                            <div class="card-item icon-relative">
                                <label class="label">Expiry date:</label>
                                <input type="text" name="expiry-data" class="input" placeholder="00 / 00"/>
                                    <i class="far fa-calendar-alt"></i>
                            </div>
                            <div class="card-item icon-relative">
                                <label class="label">CVV:</label>
                                <input type="password" maxLength="3" class="input" data-mask="000" placeholder="000"/>
                                    <i class="fas fa-lock"></i>
                            </div>
                        </div>

                        <div onClick={()=>{

                            setLoading(true);
                            setTimeout(()=>{
                                setLoading(false)
                                setBoolean(true);
                            },1000)
                            setTimeout(()=>{
                                setLoading(false);
                                setBoolean(false);
                                navigate('/order')
                            },3000)
                        }} class="btn">
                            Pay
                        </div>

                    </div>
                </div>
            </div>
            
            {boolean?<Box position="fixed" top="0%"  width="100vw" backdropFilter={"blur(8px)"}  height="100vh" display="grid" justifyContent="center" alignItem="Center"  bool={loading}>
                    <Image backdropFilter={"blur(8px)"} display={"block"} margin="auto"  src={completed} />
            </Box>:""}
            {loading?<Box position="fixed" top="0%"  width="100vw" backdropFilter={"blur(8px)"}  height="100vh" display="grid" justifyContent="center" alignItem="Center"  bool={loading}>
                    <Image backdropFilter={"blur(8px)"} display={"block"} margin="auto" src={load} />
            </Box>:""}
        </>
    )
}

export default Payment




