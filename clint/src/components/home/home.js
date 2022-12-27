import React, {useEffect, useState} from 'react';
import './home.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
 import "swiper/css";
 import "swiper/css/pagination";
 import { Pagination } from "swiper";


// import "./styles.css";

function Home(props){
    function App1() {
        document.title = ' Hebe Boutique — Hebe Designer Boutique';
        
    }
    
    const [state, setState] = useState(1);
    const toggleState  = (index) => {
        setState(index);
    }
    return (
        <div>
            <App1/>
            <div className='hero-section'>
                <div className='hero-text' >
                <h1>Saben Resort</h1>
                <p>Let The Good Times Roll <span>Shop Now</span></p>
                </div>
            </div>
            <div className='about-section'>
                <p>
                Curators of ethical fashion and New Zealand designed. Hebe is a destination concept store and online haven for style-seekers. A fashion selection lovingly handpicked for you, sealed with personal touch. Open six days.
                </p>
            </div>
            <div className='slider-section'>
                <h1>Must Haves</h1>
                <p>Some of our favourite picks this week.</p>

                <Swiper id="sip"
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    
                    className="mySwiper">
                    <SwiperSlide >
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_388e02d0-c9b5-4bd3-9849-1a791c6c31e8_750x.jpg?v=1668728366"/>
                            <h4>Cali Midi Dress // Ice Blue Zebra</h4>
                            <p>CHARLIE HOLIDAY</p>
                            <h5>$139.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/4C8FF75C-F42C-4E46-BEE8-8376F3469683_750x.jpg?v=1667606083"/>
                            <h4>Casia Shoulder Bag // Black</h4>
                            <p>SABEN</p>
                            <h5>$389.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_472d7bd1-5488-4674-b83f-6c196ab91a2d_750x.jpg?v=1667195057"/>
                            <h4>Cassie Top // Seaside Floral</h4>
                            <p>REMAIN</p>
                            <h5>$182.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/7ECEB353-4A54-4199-A900-CCFC9DB76636_750x.jpg?v=1669692257"/>
                            <h4>Classic Linen Shirt // Natural</h4>
                            <p>COMMONERS ALIKE</p>
                            <h5>$149.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/621A9514-DB1E-4DEF-BC3E-6F1AB0CEEBBD_750x.webp?v=1664327754"/>
                            <h4>Classic Tee // White</h4>
                            <p>KOWTOW</p>
                            <h5>$79.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_f33d681e-872a-492b-a42f-1a57e1a6398e_750x.webp?v=1669602207"/>
                            <h4>Coco Mini Bag // Black Crystal</h4>
                            <p>SABEN</p>
                            <h5>$399.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_acafe6ec-6caf-4b7e-9be4-6d04b30005a0_750x.jpg?v=1667347992"/>
                            <h4>Composure Cardi // Black</h4>
                            <p>KOWTOW</p>
                            <h5>$249.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_e1b8a394-2ec0-4e1b-a484-75f44d192b5a_750x.jpg?v=1669795277"/>
                            <h4>Darling Blouse // White</h4>
                            <p>CAITLIN CRISP</p>
                            <h5>$365.00</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/910F499E-8117-4B5E-8E72-AEBCF35BF08A_750x.jpg?v=1668200645"/>
                            <h4>Florence Dress // Blue Stripe</h4>
                            <p>KOWTOW</p>
                            <h5>$289.00</h5>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='video-section'>
                <video width="100%" height="auto" autoPlay muted loop>
                <source src="https://cdn.shopify.com/s/files/1/1132/3440/files/cutdown_1_1080_1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </div>
            <div className='brand-section'>
                <div class="grid-container">
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/marle_55ab16d7-33ef-49b6-b69b-310b7265357f_180x.png?v=1628037743'/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/Assembly_Label_180x.png?v=1627267743'/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/Camilla_and_Marc_wordmark_180x.png?v=1628037827'/>
                    </div>  
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/remain_a61ef9cb-99e7-410d-a944-3a11ef1f10ec_180x.png?v=1628037863"/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/StolenGirlfriendsClub2_8025ce91-0445-4139-814d-4252880cc414_180x.png?v=1628037894'/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/commoners_374bbbd1-ad1c-46c8-a291-0bbd855ff672_180x.png?v=1628037958'/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/twentysevennames_logo_170914_180x.png?v=1627007774'/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/CAITLIN_CRISP_LOCKUP_FINAL-01_600x_545be233-b6ec-4abe-9464-fb3f7caf1835_180x.png?v=1628038010'/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/IMG_3434_180x.png?v=1627007236'/>
                    </div>
                    <div>
                        <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/Black_logo_400px_wide_400x_fcd3108c-bb78-4720-8da2-a7e4f6aa591f_180x.png?v=1628038061'/>
                    </div>
                </div>
                
            </div>
            <div className='example-section'>
                <div className='example-photo'>
                    <svg class="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M375.5 345.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0-1.1-2.9-2.3-5.5-3.4-7.8-1.4-4.7-2.4-13.8-.5-19.8 3.4-10.6 3.6-40.6 1.2-54.5-2.3-14-12.3-29.8-18.5-36.9-5.3-6.2-12.8-14.9-15.4-17.9 8.6-5.6 13.3-13.3 14-23 0-.3 0-.6.1-.8.4-4.1-.6-9.9-3.9-13.5-2.1-2.3-4.8-3.5-8-3.5h-54.9c-.8-7.1-3-13-5.2-17.5-6.8-13.9-12.5-16.5-21.2-16.5h-.7c-8.7 0-14.4 2.5-21.2 16.5-2.2 4.5-4.4 10.4-5.2 17.5h-48.5c-3.2 0-5.9 1.2-8 3.5-3.2 3.6-4.3 9.3-3.9 13.5 0 .2 0 .5.1.8.7 9.8 5.4 17.4 14 23-2.6 3.1-10.1 11.7-15.4 17.9-6.1 7.2-16.1 22.9-18.5 36.9-2.2 13.3-1.2 47.4 1 54.9 1.1 3.8 1.4 14.5-.2 19.4-1.2 2.4-2.3 5-3.4 7.9-4.4 11.6-6.2 26.3-5 32.6 1.8 9.9 16.5 14.4 29.4 14.4h176.8c12.9 0 27.6-4.5 29.4-14.4 1.2-6.5-.5-21.1-5-32.7zm-97.7-178c.3-3.2.8-10.6-.2-18 2.4 4.3 5 10.5 5.9 18h-5.7zm-36.3-17.9c-1 7.4-.5 14.8-.2 18h-5.7c.9-7.5 3.5-13.7 5.9-18zm4.5-6.9c0-.1.1-.2.1-.4 4.4-5.3 8.4-5.8 13.1-5.8h.7c4.7 0 8.7.6 13.1 5.8 0 .1 0 .2.1.4 3.2 8.9 2.2 21.2 1.8 25h-30.7c-.4-3.8-1.3-16.1 1.8-25zm-70.7 42.5c0-.3 0-.6-.1-.9-.3-3.4.5-8.4 3.1-11.3 1-1.1 2.1-1.7 3.4-2.1l-.6.6c-2.8 3.1-3.7 8.1-3.3 11.6 0 .2 0 .5.1.8.3 3.5.9 11.7 10.6 18.8.3.2.8.2 1-.2.2-.3.2-.8-.2-1-9.2-6.7-9.8-14.4-10-17.7 0-.3 0-.6-.1-.8-.3-3.2.5-7.7 3-10.5.8-.8 1.7-1.5 2.6-1.9h155.7c1 .4 1.9 1.1 2.6 1.9 2.5 2.8 3.3 7.3 3 10.5 0 .2 0 .5-.1.8-.3 3.6-1 13.1-13.8 20.1-.3.2-.5.6-.3 1 .1.2.4.4.6.4.1 0 .2 0 .3-.1 13.5-7.5 14.3-17.5 14.6-21.3 0-.3 0-.5.1-.8.4-3.5-.5-8.5-3.3-11.6l-.6-.6c1.3.4 2.5 1.1 3.4 2.1 2.6 2.9 3.5 7.9 3.1 11.3 0 .3 0 .6-.1.9-1.5 20.9-23.6 31.4-65.5 31.4h-43.8c-41.8 0-63.9-10.5-65.4-31.4zm91 89.1h-7c0-1.5 0-3-.1-4.2-.2-12.5-2.2-31.1-2.7-35.1h3.6c.8 0 1.4-.6 1.4-1.4v-14.1h2.4v14.1c0 .8.6 1.4 1.4 1.4h3.7c-.4 3.9-2.4 22.6-2.7 35.1v4.2zm65.3 11.9h-16.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h16.8v2.8h-62.2c0-.9-.1-1.9-.1-2.8h33.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-33.9c-.1-3.2-.1-6.3-.1-9h62.5v9zm-12.5 24.4h-6.3l.2-1.6h5.9l.2 1.6zm-5.8-4.5l1.6-12.3h2l1.6 12.3h-5.2zm-57-19.9h-62.4v-9h62.5c0 2.7 0 5.8-.1 9zm-62.4 1.4h62.4c0 .9-.1 1.8-.1 2.8H194v-2.8zm65.2 0h7.3c0 .9.1 1.8.1 2.8H259c.1-.9.1-1.8.1-2.8zm7.2-1.4h-7.2c.1-3.2.1-6.3.1-9h7c0 2.7 0 5.8.1 9zm-7.7-66.7v6.8h-9v-6.8h9zm-8.9 8.3h9v.7h-9v-.7zm0 2.1h9v2.3h-9v-2.3zm26-1.4h-9v-.7h9v.7zm-9 3.7v-2.3h9v2.3h-9zm9-5.9h-9v-6.8h9v6.8zm-119.3 91.1c-2.1-7.1-3-40.9-.9-53.6 2.2-13.5 11.9-28.6 17.8-35.6 5.6-6.5 13.5-15.7 15.7-18.3 11.4 6.4 28.7 9.6 51.8 9.6h6v14.1c0 .8.6 1.4 1.4 1.4h5.4c.3 3.1 2.4 22.4 2.7 35.1 0 1.2.1 2.6.1 4.2h-63.9c-.8 0-1.4.6-1.4 1.4v16.1c0 .8.6 1.4 1.4 1.4H256c-.8 11.8-2.8 24.7-8 33.3-2.6 4.4-4.9 8.5-6.9 12.2-.4.7-.1 1.6.6 1.9.2.1.4.2.6.2.5 0 1-.3 1.3-.8 1.9-3.7 4.2-7.7 6.8-12.1 5.4-9.1 7.6-22.5 8.4-34.7h7.8c.7 11.2 2.6 23.5 7.1 32.4.2.5.8.8 1.3.8.2 0 .4 0 .6-.2.7-.4 1-1.2.6-1.9-4.3-8.5-6.1-20.3-6.8-31.1H312l-2.4 18.6c-.1.4.1.8.3 1.1.3.3.7.5 1.1.5h9.6c.4 0 .8-.2 1.1-.5.3-.3.4-.7.3-1.1l-2.4-18.6H333c.8 0 1.4-.6 1.4-1.4v-16.1c0-.8-.6-1.4-1.4-1.4h-63.9c0-1.5 0-2.9.1-4.2.2-12.7 2.3-32 2.7-35.1h5.2c.8 0 1.4-.6 1.4-1.4v-14.1h6.2c23.1 0 40.4-3.2 51.8-9.6 2.3 2.6 10.1 11.8 15.7 18.3 5.9 6.9 15.6 22.1 17.8 35.6 2.2 13.4 2 43.2-1.1 53.1-1.2 3.9-1.4 8.7-1 13-1.7-2.8-2.9-4.4-3-4.6-.2-.3-.6-.5-.9-.6h-.5c-.2 0-.4.1-.5.2-.6.5-.8 1.4-.3 2 0 0 .2.3.5.8 1.4 2.1 5.6 8.4 8.9 16.7h-42.9v-43.8c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v44.9c0 .1-.1.2-.1.3 0 .1 0 .2.1.3v9c-1.1 2-3.9 3.7-10.5 3.7h-7.5c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.5c5 0 8.5-.9 10.5-2.8-.1 3.1-1.5 6.5-10.5 6.5H210.4c-9 0-10.5-3.4-10.5-6.5 2 1.9 5.5 2.8 10.5 2.8h67.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-67.4c-6.7 0-9.4-1.7-10.5-3.7v-54.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v43.8h-43.6c4.2-10.2 9.4-17.4 9.5-17.5.5-.6.3-1.5-.3-2s-1.5-.3-2 .3c-.1.2-1.4 2-3.2 5 .1-4.9-.4-10.2-1.1-12.8zm221.4 60.2c-1.5 8.3-14.9 12-26.6 12H174.4c-11.8 0-25.1-3.8-26.6-12-1-5.7.6-19.3 4.6-30.2H197v9.8c0 6.4 4.5 9.7 13.4 9.7h105.4c8.9 0 13.4-3.3 13.4-9.7v-9.8h44c4 10.9 5.6 24.5 4.6 30.2z"></path><path d="M286.1 359.3c0 .4.3.7.7.7h14.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-14.7c-.3 0-.7.3-.7.7zm5.3-145.6c13.5-.5 24.7-2.3 33.5-5.3.4-.1.6-.5.4-.9-.1-.4-.5-.6-.9-.4-8.6 3-19.7 4.7-33 5.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7zm-11.3.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H242c-19.9 0-35.3-2.5-45.9-7.4-.4-.2-.8 0-.9.3-.2.4 0 .8.3.9 10.8 5 26.4 7.5 46.5 7.5h38.1zm-7.2 116.9c.4.1.9.1 1.4.1 1.7 0 3.4-.7 4.7-1.9 1.4-1.4 1.9-3.2 1.5-5-.2-.8-.9-1.2-1.7-1.1-.8.2-1.2.9-1.1 1.7.3 1.2-.4 2-.7 2.4-.9.9-2.2 1.3-3.4 1-.8-.2-1.5.3-1.7 1.1s.2 1.5 1 1.7z"></path><path d="M275.5 331.6c-.8 0-1.4.6-1.5 1.4 0 .8.6 1.4 1.4 1.5h.3c3.6 0 7-2.8 7.7-6.3.2-.8-.4-1.5-1.1-1.7-.8-.2-1.5.4-1.7 1.1-.4 2.3-2.8 4.2-5.1 4zm5.4 1.6c-.6.5-.6 1.4-.1 2 1.1 1.3 2.5 2.2 4.2 2.8.2.1.3.1.5.1.6 0 1.1-.3 1.3-.9.3-.7-.1-1.6-.8-1.8-1.2-.5-2.2-1.2-3-2.1-.6-.6-1.5-.6-2.1-.1zm-38.2 12.7c.5 0 .9 0 1.4-.1.8-.2 1.3-.9 1.1-1.7-.2-.8-.9-1.3-1.7-1.1-1.2.3-2.5-.1-3.4-1-.4-.4-1-1.2-.8-2.4.2-.8-.3-1.5-1.1-1.7-.8-.2-1.5.3-1.7 1.1-.4 1.8.1 3.7 1.5 5 1.2 1.2 2.9 1.9 4.7 1.9z"></path><path d="M241.2 349.6h.3c.8 0 1.4-.7 1.4-1.5s-.7-1.4-1.5-1.4c-2.3.1-4.6-1.7-5.1-4-.2-.8-.9-1.3-1.7-1.1-.8.2-1.3.9-1.1 1.7.7 3.5 4.1 6.3 7.7 6.3zm-9.7 3.6c.2 0 .3 0 .5-.1 1.6-.6 3-1.6 4.2-2.8.5-.6.5-1.5-.1-2s-1.5-.5-2 .1c-.8.9-1.8 1.6-3 2.1-.7.3-1.1 1.1-.8 1.8 0 .6.6.9 1.2.9z"></path></svg>
                </div>
                <div className='example-text'>
                <p className='example-sub-title'>UNKNOWN VENDORS</p>
                    <h1>Example Product</h1>
                    <p><span>$19.99</span>&emsp;<span>New Arrival</span></p>
                <div className='tabs'>
                    
                    <div className='tab-btn'>
                    <div className={state === 1 ? "single-tab active-tab":"single-tab"}
                    onClick = {()=>toggleState(1)}>
                        <h2>Description</h2>
                    </div>
                    <div className={state === 2 ? "single-tab active-tab":"single-tab"}
                    onClick = {()=>toggleState(2)}>
                        <h2>Shipping</h2>
                    </div>
                    <div className={state === 3 ? "single-tab active-tab":"single-tab"}
                    onClick = {()=>toggleState(3)}>
                        <h2>Returns</h2>
                    </div>
                    </div>
                    <div className='tab-content'>
                        <div className={state === 1 ? "content active-content":"content"}>
                            <p>
                            This area is used to describe your product’s details. Tell customers about the look, feel, and style of your product. Add details on color,  materials used, sizing, and where it was made.
                            </p>
                        </div>
                        <div className={state === 2 ? "content active-content":"content"}>
                            <p><b>CLICK & COLLECT</b></p>
                            <p>
                                For all online orders we offer the option to ‘pick up instore’ which means you can whip in and pick up your parcel. Your purchase will be packaged up, ready to go.
                            </p><br/>
                            <p>
                            If you’re not able to get out of the house but are local, we are happy to deliver your item to your door. There is a charge of just $3 and delivery takes place after shop hours (5pm-7pm). Delivery applies to Masterton and Carterton.
                            </p>
                            <p><b>SHIPPING COSTS</b></p>
                            <p>
                            Hebe Boutique is aligned with GoSweetSpot who ensure you get the safest, most efficient shipping possible including Saturday and overnight delivery. The majority of couriers we use deliver overnight nationwide, yay!
                            </p>

                        </div>
                        <div className={state === 3 ? "content active-content":"content"}>
                            <p>
                            Worried an item you bought online won’t be right? Don’t stress, we want to make it easy! Follow the conditions below and you can return your item to us for an exchange or refund.
                            </p>
                            <p>
                            <a href='mailto:example@gmail.com'>hellothere@hebeboutique.com</a> or call us on +64 (6) 378 8924 to notify us that you’re returning something.
                            </p>
                            <p>
                            You must return the item within 7 working days (Nationwide) and 10 days (International) from receiving it. We recommend tracking your return so there’s no risk of it going missing. We won't be able to process your return if we don't receive it.
                            </p>
                        </div>
                    </div>
                </div>
                </div>


            </div>
            <div className='homegrown-section'>
                <div className='homegrown-text'>
                    <h1>Homegrown</h1>
                    <p>
                    We love all of our beautiful brands here at Hebe but there is a special place in our heart for the New Zealand brands. We have made it easy for you to find a little about each of these amazing brands. Head over to our Homegrown page where we give you a little insight into what makes each of these brands so special.
                    </p>
                    <button>Find out more</button>
                </div>
                <div className='homegron-image'>
                    <img src='https://cdn.shopify.com/s/files/1/1132/3440/files/LENNY_JACKET_BW_4_750x.jpg?v=1630056720'/>
                </div>
            </div>
            <div className='featured-section'>
                <div className='featured-grid featured-grid1'>
                    <h1 className='featured-title'>New Arrivals</h1>
                </div>
                <div className='featured-grid featured-grid2'>
                    <h1 className='featured-title'>Coming Soon</h1>
                </div>
                <div className='featured-grid featured-grid3'>
                    <h1 className='featured-title'>Sale</h1>
                </div>
            </div>
            <div className='insta-section'>
                <h1>@hebeboutique #hebebebe</h1>
                <div className='insta-grid-container'>
                    <div className='insta-grid insta-grid1'>
                        <h1 className='insta-title'>New Arrivals</h1>
                    </div>
                    <div className='insta-grid insta-grid2'>
                        <h1 className='insta-title'>Coming Soon</h1>
                    </div>
                    <div className='insta-grid insta-grid3'>
                        <h1 className='insta-title'>Sale</h1>
                    </div>
                    <div className='insta-grid insta-grid4'>
                        <h1 className='insta-title'>New Arrivals</h1>
                    </div>
                    <div className='insta-grid insta-grid5'>
                        <h1 className='insta-title'>Coming Soon</h1>
                    </div>
                </div>
            </div>
         

        </div>
    )
}
export default Home; 