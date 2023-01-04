import React from "react";
let ProductContext = React.createContext({
  id: 1,
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
});
export default ProductContext;
