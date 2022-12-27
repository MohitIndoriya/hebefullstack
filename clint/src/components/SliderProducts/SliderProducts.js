import React from "react";
import "./SliderProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function SliderProducts() {
  let SliderData = [
    {
      id: 1,
      title: "Cali Midi Dress // Ice Blue Zebra",
      price: 139,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "CHARLIE HOLIDAY",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/image_388e02d0-c9b5-4bd3-9849-1a791c6c31e8_750x.jpg?v=1668728366",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 2,
      title: "Casia Shoulder Bag // Black",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "SABEN",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/4C8FF75C-F42C-4E46-BEE8-8376F3469683_750x.jpg?v=1667606083",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 3,
      title: "Cassie Top // Seaside Floral",
      price: 389,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "REMAIN",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/image_472d7bd1-5488-4674-b83f-6c196ab91a2d_750x.jpg?v=1667195057",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 4,
      title: "Flashy Necklace // Sterling Silver",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/image_f33d681e-872a-492b-a42f-1a57e1a6398e_750x.webp?v=1669602207",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 5,
      title: "Six Piece Band Ring",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/621A9514-DB1E-4DEF-BC3E-6F1AB0CEEBBD_750x.webp?v=1664327754",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Snake Band Skinny",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/7ECEB353-4A54-4199-A900-CCFC9DB76636_750x.jpg?v=1669692257",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "Dusted Heart Shield Ring",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/image_e1b8a394-2ec0-4e1b-a484-75f44d192b5a_750x.jpg?v=1669795277",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Flashy Necklace // Sterling Silver",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/image_e1b8a394-2ec0-4e1b-a484-75f44d192b5a_750x.jpg?v=1669795277",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "Six Piece Band Ring",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/38A48FA9-3301-474E-B314-710628A4C6CC_750x.jpeg.jpg?v=1571709542",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 12,
      title: "Snake Band Skinny",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/B78CA27C-1144-49BA-8554-4592FD2ECB81_750x.jpeg.jpg?v=1571709542",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 11,
      title: "Dusted Heart Shield Ring",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/61064061-3E99-4C63-962C-C8DE87B05DCE_750x.jpg?v=1639440995",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 12,
      title: "Flashy Necklace // Sterling Silver",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image:
        "https://cdn.shopify.com/s/files/1/1132/3440/products/image_aafe4a0e-9784-499f-a660-bd59cf296ebb_750x.jpg?v=1571709519",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
  ];
  return (
    <div className="slider-section">
      <Swiper
        id="sip"
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {SliderData.map((el, ind) => {
          return (
            <SwiperSlide key={ind + 1}>
              <div>
                <img src={el.image} alt={el.id} />
                <h4>{el.title}</h4>
                <p>{el.category}</p>
                <h5>$ {el.price}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default SliderProducts;
