import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Modals from '../ThankYou/Modal';
import "./Payment.css"
import completed from "../ThankYou/Checkmark.gif"
import load from "../ThankYou/load.gif"
import { Box, Image } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
const Payment = () => {

    const navigate = useNavigate();
    const [boolean, setBoolean] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className="wrapper">
                <div className="payment">



                    <h2 className="paymentHeading">Payment Gateway</h2>
                    <div className="form">
                        <div className="card space icon-relative">
                            <label className="label">Card holder:</label>
                            <input type="text" className="input" placeholder="Enter Name" />

                        </div>
                        <div className="card space icon-relative">
                            <label className="label">Card number:</label>
                            <input type="text" className="input" maxLength="16" placeholder="Card Number" />

                        </div>
                        <div className="card-grp space">
                            <div className="card-item icon-relative">
                                <label className="label">Expiry date:</label>
                                <input type="text" name="expiry-data" className="input" placeholder="00 / 00" />

                            </div>
                            <div className="card-item icon-relative">
                                <label className="label">CVV:</label>
                                <input type="password" maxLength="3" className="input" data-mask="000" placeholder="000" />

                            </div>
                        </div>

                        <div onClick={() => {

                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false)
                                setBoolean(true);
                            }, 1000)
                            setTimeout(() => {
                                setLoading(false);
                                setBoolean(false);
                                navigate('/')
                                toast.success('Order Confirmed', {
                                    position: "top-right",
                                    autoClose: 1500,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                });
                            }, 3000)
                        }} className="btn">
                            Pay
                        </div>

                    </div>
                </div>
            </div>

            {boolean ? <Box position="fixed" top="0%" width="100vw" backdropFilter={"blur(8px)"} height="100vh" display="grid" justifyContent="center" alignItem="Center" bool={loading}>
                <Image backdropFilter={"blur(8px)"} display={"block"} margin="auto" src={completed} />
            </Box> : ""}
            {loading ? <Box position="fixed" top="0%" width="100vw" backdropFilter={"blur(8px)"} height="100vh" display="grid" justifyContent="center" alignItem="Center" bool={loading}>
                <Image backdropFilter={"blur(8px)"} display={"block"} margin="auto" src={load} />
            </Box> : ""}
        </>
    )
}

export default Payment




