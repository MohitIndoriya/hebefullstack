import React, { useEffect, useState } from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { loginUser } from "../../actions/loginAction";
import { useDispatch } from "react-redux";

// import "./styles.css";

function Home(props) {
  function App1() {
    document.title = " Hebe Boutique — Hebe Designer Boutique";
  }

  const [state, setState] = useState(1);
  const dispatch = useDispatch()
  const toggleState = (index) => {
    setState(index);
  };

  const search = window.location.search;
  if (search.includes("token")) {
    const copy = new URLSearchParams(search);
    localStorage.setItem("token", copy.get("token"));
    loginUser(copy.get("token"),dispatch)
  }

  return (
    <div>
      <App1 />
      <div className="hero-section">
        <div className="hero-text">
          <h1>Saben Resort</h1>
          <p className="bannerText">
            <span>Let The Good Times Roll</span> <span>Shop Now</span>
          </p>
        </div>
      </div>
      <div className="about-section">
        <p>
          Curators of ethical fashion and New Zealand designed. Hebe is a
          destination concept store and online haven for style-seekers. A
          fashion selection lovingly handpicked for you, sealed with personal
          touch. Open six days.
        </p>
      </div>
      <div className="slider-section">
        <h1>Must Haves</h1>
        <p>Some of our favourite picks this week.</p>

        <Swiper
          id="sip"
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide className="Slider">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_388e02d0-c9b5-4bd3-9849-1a791c6c31e8_750x.jpg?v=1668728366" />
              <h4>Cali Midi Dress // Ice Blue Zebra</h4>
              <p>CHARLIE HOLIDAY</p>
              <h5>$139.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/4C8FF75C-F42C-4E46-BEE8-8376F3469683_750x.jpg?v=1667606083" />
              <h4>Casia Shoulder Bag // Black</h4>
              <p>SABEN</p>
              <h5>$389.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_472d7bd1-5488-4674-b83f-6c196ab91a2d_750x.jpg?v=1667195057" />
              <h4>Cassie Top // Seaside Floral</h4>
              <p>REMAIN</p>
              <h5>$182.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/7ECEB353-4A54-4199-A900-CCFC9DB76636_750x.jpg?v=1669692257" />
              <h4>Classic Linen Shirt // Natural</h4>
              <p>COMMONERS ALIKE</p>
              <h5>$149.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/621A9514-DB1E-4DEF-BC3E-6F1AB0CEEBBD_750x.webp?v=1664327754" />
              <h4>Classic Tee // White</h4>
              <p>KOWTOW</p>
              <h5>$79.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_f33d681e-872a-492b-a42f-1a57e1a6398e_750x.webp?v=1669602207" />
              <h4>Coco Mini Bag // Black Crystal</h4>
              <p>SABEN</p>
              <h5>$399.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_acafe6ec-6caf-4b7e-9be4-6d04b30005a0_750x.jpg?v=1667347992" />
              <h4>Composure Cardi // Black</h4>
              <p>KOWTOW</p>
              <h5>$249.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_e1b8a394-2ec0-4e1b-a484-75f44d192b5a_750x.jpg?v=1669795277" />
              <h4>Darling Blouse // White</h4>
              <p>CAITLIN CRISP</p>
              <h5>$365.00</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/910F499E-8117-4B5E-8E72-AEBCF35BF08A_750x.jpg?v=1668200645" />
              <h4>Florence Dress // Blue Stripe</h4>
              <p>KOWTOW</p>
              <h5>$289.00</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="video-section">
        <video width="100%" height="auto" autoPlay muted loop>
          <source
            src="https://cdn.shopify.com/s/files/1/1132/3440/files/cutdown_1_1080_1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="brand-section">
        <div className="grid-container">
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/marle_55ab16d7-33ef-49b6-b69b-310b7265357f_180x.png?v=1628037743" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/Assembly_Label_180x.png?v=1627267743" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/Camilla_and_Marc_wordmark_180x.png?v=1628037827" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/remain_a61ef9cb-99e7-410d-a944-3a11ef1f10ec_180x.png?v=1628037863" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/StolenGirlfriendsClub2_8025ce91-0445-4139-814d-4252880cc414_180x.png?v=1628037894" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/commoners_374bbbd1-ad1c-46c8-a291-0bbd855ff672_180x.png?v=1628037958" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/twentysevennames_logo_170914_180x.png?v=1627007774" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/CAITLIN_CRISP_LOCKUP_FINAL-01_600x_545be233-b6ec-4abe-9464-fb3f7caf1835_180x.png?v=1628038010" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/IMG_3434_180x.png?v=1627007236" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/Black_logo_400px_wide_400x_fcd3108c-bb78-4720-8da2-a7e4f6aa591f_180x.png?v=1628038061" />
          </div>
        </div>
      </div>
      <div className="example-section">
        <div className="example-photo">
          <img src="https://cdn.shopify.com/s/files/1/1132/3440/products/image_6ac9bde4-f68e-422b-bd1d-e8bc1773f908_750x.webp.jpg?v=1666661513"/>
        </div>
        <div className="example-text">
          <p className="example-sub-title">UNKNOWN VENDORS</p>
          <h1>Example Product</h1>
          <p>
            <span>$19.99</span>&emsp;<span>New Arrival</span>
          </p>
          <div className="tabs">
            <div className="tab-btn">
              <div
                className={state === 1 ? "single-tab active-tab" : "single-tab"}
                onClick={() => toggleState(1)}
              >
                <h2>Description</h2>
              </div>
              <div
                className={state === 2 ? "single-tab active-tab" : "single-tab"}
                onClick={() => toggleState(2)}
              >
                <h2>Shipping</h2>
              </div>
              <div
                className={state === 3 ? "single-tab active-tab" : "single-tab"}
                onClick={() => toggleState(3)}
              >
                <h2>Returns</h2>
              </div>
            </div>
            <div className="tab-content">
              <div
                className={state === 1 ? "content active-content" : "content"}
              >
                <p>
                  This area is used to describe your product’s details. Tell
                  customers about the look, feel, and style of your product. Add
                  details on color, materials used, sizing, and where it was
                  made.
                </p>
              </div>
              <div
                className={state === 2 ? "content active-content" : "content"}
              >
                <p>
                  <b>CLICK & COLLECT</b>
                </p>
                <p>
                  For all online orders we offer the option to ‘pick up instore’
                  which means you can whip in and pick up your parcel. Your
                  purchase will be packaged up, ready to go.
                </p>
                <br />
                <p>
                  If you’re not able to get out of the house but are local, we
                  are happy to deliver your item to your door. There is a charge
                  of just $3 and delivery takes place after shop hours
                  (5pm-7pm). Delivery applies to Masterton and Carterton.
                </p>
                <p>
                  <b>SHIPPING COSTS</b>
                </p>
                <p>
                  Hebe Boutique is aligned with GoSweetSpot who ensure you get
                  the safest, most efficient shipping possible including
                  Saturday and overnight delivery. The majority of couriers we
                  use deliver overnight nationwide, yay!
                </p>
              </div>
              <div
                className={state === 3 ? "content active-content" : "content"}
              >
                <p>
                  Worried an item you bought online won’t be right? Don’t
                  stress, we want to make it easy! Follow the conditions below
                  and you can return your item to us for an exchange or refund.
                </p>
                <p>
                  <a href="mailto:example@gmail.com">
                    hellothere@hebeboutique.com
                  </a>{" "}
                  or call us on +64 (6) 378 8924 to notify us that you’re
                  returning something.
                </p>
                <p>
                  You must return the item within 7 working days (Nationwide)
                  and 10 days (International) from receiving it. We recommend
                  tracking your return so there’s no risk of it going missing.
                  We won't be able to process your return if we don't receive
                  it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homegrown-section">
        <div className="homegrown-text">
          <h1>Homegrown</h1>
          <p>
            We love all of our beautiful brands here at Hebe but there is a
            special place in our heart for the New Zealand brands. We have made
            it easy for you to find a little about each of these amazing brands.
            Head over to our Homegrown page where we give you a little insight
            into what makes each of these brands so special.
          </p>
          <button>Find out more</button>
        </div>
        <div className="homegron-image">
          <img src="https://cdn.shopify.com/s/files/1/1132/3440/files/LENNY_JACKET_BW_4_750x.jpg?v=1630056720" />
        </div>
      </div>
      <div className="featured-section">
        <div className="featured-grid featured-grid1">
          <h1 className="featured-title">New Arrivals</h1>
        </div>
        <div className="featured-grid featured-grid2">
          <h1 className="featured-title">Coming Soon</h1>
        </div>
        <div className="featured-grid featured-grid3">
          <h1 className="featured-title">Sale</h1>
        </div>
      </div>
      
    </div>
  );
}
export default Home;
