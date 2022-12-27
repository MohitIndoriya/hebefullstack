import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import ProductContext from "../ProductContextAPI/ProductContextAPI";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import SliderProducts from "../SliderProducts/SliderProducts";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../../actions/cartAction";

export default function Product() {
  let dispatch=useDispatch()
  let {id}=useParams()
  let [productArray,setproduct]=useState([{}])
  const data1=async()=>{
       
       
    let  products=await axios.get(`http://localhost:8080/products/${id}`)
    
  setproduct([products.data])
    
 }
 useEffect(()=>{
  data1()
 },[])
 console.log(productArray[0],"ye m hu");

  let totalPrice = 0;
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="container">
      <div id="top">
        <div id="topLeft">
          {
            <img
              src={productArray[0].image}
              alt="pic"
              height="750"
              width="540"
              margin="auto"
            />
          }
        </div>
        <div id="topRight">
          <div>{productArray[0].category}</div>
          <h1>{productArray[0].title}</h1>
          <div>
            <div style={{}}>$ {productArray[0].price + "  "}</div>
            <div style={{ fontSize: "15px", display: "flex" }}>
              <span>
                or 6 weekly interest-free payments from $13.32 with Laybuy
              </span>
              <img
                src="https://www.laybuy.com/assets/laybuy-logo-small.svg"
                alt="discount?"
              />
            </div>
          </div>
          <div style={{ fontSize: "15px", display: "flex" }}>
            or ${} interest-free payment of $ $
            { }` with
            <img
              style={{ height: "20px", width: "50px", marginLeft: "10px" }}
              src="https://mma.prnewswire.com/media/1224081/Afterpay_Mint_Logo.jpg?p=twitter"
              alt="afterPay"
            />
          </div>
          <div style={{ fontSize: "17px" }}>Tax Included</div>
          <div style={{ fontSize: "18px" }}>{} in Stock</div>
          <div>
            <p>Size</p>
            <Tabs variant="solid-rounded" colorScheme="green">
              <TabList>
                <Tab>S</Tab>
                <Tab>M</Tab>
                <Tab>L</Tab>
              </TabList>
            </Tabs>
          </div>
          <button ref={btnRef} onClick={()=>dispatch(addtocart(id))} id="addToCart">
            Add to cart
          </button>
         
          <button id="buyBtn">
            Buy with{" "}
            <img
              style={{ height: "30px", width: "60px", marginLeft: "10px" }}
              src="data:image/png;base64,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"
              alt="afterPay"
            />
          </button>
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <a
              href="/Product.js"
              style={{
                textAlign: "center",
                marginBottom: "60px",
                textDecoration: "none",
              }}
            >
              More payment options
            </a>
          </div>
          <div
            style={{
              width: "500px",
            }}
          >
            <Tabs>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Shipping</Tab>
                <Tab>Returns</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>{productArray[0].desciption}</p>
                </TabPanel>
                <TabPanel>
                  <h3>CLICK & COLLECT</h3>
                  <p>
                    For all online orders we offer the option to ‘pick up
                    instore’ which means you can whip in and pick up your
                    parcel. Your purchase will be packaged up, ready to go.
                  </p>

                  <p>
                    If you’re not able to get out of the house but are local, we
                    are happy to deliver your item to your door. There is a
                    charge of just $3 and delivery takes place after shop hours
                    (5pm-7pm). Delivery applies to Masterton and Carterton.
                  </p>
                  <h3>SHIPPING COSTS</h3>
                  <p>
                    Hebe Boutique is aligned with GoSweetSpot who ensure you get
                    the safest, most efficient shipping possible including
                    Saturday and overnight delivery. The majority of couriers we
                    use deliver overnight nationwide, yay!
                  </p>

                  <p>
                    All customers with an online transaction total over $200 get
                    FREE shipping!
                  </p>

                  <p>
                    We charge a flat rate of $6 per package (based on mean
                    calculations) for any purchase of clothing- this is
                    regardless of whether it is overnight, Saturday or rural.
                    FYI rural parcels can be around $15, so our aim is to make
                    it reasonable for all.
                  </p>

                  <p>
                    A charge of $4.00 applies for any purchase of jewellery or
                    an accessory (sunglasses, watches etc.)
                  </p>

                  <h3>Shipping to Australia</h3>
                  <p>
                    $10 shipping fee applies 5-15 working days (excluding Public
                    Holidays) untracked. If you would like a tracking quote,
                    email us.
                  </p>

                  <h3>International</h3>
                  <p>$20 shipping fee applies.</p>
                  <p>
                    5-15 working days untracked. If you would like a tracking
                    quote, email us.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Worried an item you bought online won’t be right? Don’t
                    stress, we want to make it easy! Follow the conditions below
                    and you can return your item to us for an exchange or
                    refund. Email us at hellothere@hebeboutique.com or call us
                    on +64 (6) 378 8924 to notify us that you’re returning
                    something.
                  </p>
                  <p>
                    You must return the item within 7 working days (Nationwide)
                    and 10 days (International) from receiving it. We recommend
                    tracking your return so there’s no risk of it going missing.
                    We won't be able to process your return if we don't receive
                    it.
                  </p>
                  <p>
                    You know the drill- all tags attached, include your receipt
                    and contact details, and the item must be in brand new,
                    unworn condition.
                  </p>
                  <p>
                    If a refund is issued, you will be refunded via your
                    original payment method- or to a nominated bank account once
                    your return is approved.
                  </p>
                  <p>
                    The shipping aspects of your order are non-refunable. Return
                    courier fees are also at the expense of the customer.
                  </p>
                  <p>
                    Due to hygiene reasons we cannot accept returns for change
                    of mind on jewellery, lingerie or eyewear- these terms are
                    also forwarded to us by the supplier and we are unable to
                    return these items to them unless faulty.
                  </p>
                  <p>
                    Sale items are not eligible for return, all sale
                    transactions are final and cannot be accepted.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
      <div id="bottom">
        <div id="topBottom">You may also like</div>
        <SliderProducts />
      </div>
    </div>
  );
}
