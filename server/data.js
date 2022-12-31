const Products = require("./database/products.model")
const connect = require("./database/connect")

const data = [
    {
      "id": 1,
      "title": "Adelade Skirt // Clay",
      "price": 168,
      "description": "The Adelade skirt is guaranteed to be your go to for everything! Pair it with a tank or tee for a look that’s all about ease. A stunning feminine skirt with a wide waist yoke. A perfect style that will take you from day to night for any occasion.",
      "category": "skirts",
      "quantity": 1,
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/ADELADE-SKIRT-CLAY-01_540x.jpg?v=1661383877"
    },
    {
      "id": 2,
      "title": "Salty Dog Chained Mini Skirt",
      "price": 139,
      "quantity": 1,
      "description": "THE PERFECT FITTED DENIM MINI SKIRT. HIGH WAISTED AND FITTED TO YOUR WAIST AND HIPS. CLASSIC 5 POCKET DETAILS WITH A RAW HEM. THIS BEAUTY ALSO COMES WITH A METAL CHAIN THAT RUNS THROUGH THE BELT LOOPS AND FASTENS AROUND YOUR WAIST.",
      "category": "skirts",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/C4221CAA-57F4-41A3-AAE0-0867680273F4_750x.jpg?v=1630647452"
    },
    {
      "id": 3,
      "title": "Petal Skirt Mini // Inky Floral",
      "price": 119,
      "quantity": 1,
      "description": "A must have mini for a summer outing. The Petal skirt comes with statement oversized frill detail and an exposed side metal zipper.",
      "category": "skirts",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/4B1DCE71-B8CA-4F57-B063-F1E445DD1B16_750x.webp.jpg?v=1662440627"
    },
    {
      "id": 4,
      "title": "Aubrey Knit Skirt // Black",
      "price": 145,
      "quantity": 1,
      "description": "Aubrey Knit Skirt // Black",
      "category": "skirts",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/DB15556F-DFF2-4E44-B6C1-7AB2C6960A0A_540x.jpg?v=1664925895"
    },
    {
      "id": 5,
      "title": "Field Skirt // Evergreen",
      "price": 229,
      "quantity": 1,
      "description": "A versatile style with a standard fit, the Field Skirt features an elasticated waist with drawstring and falls to a midi-length.",
      "category": "skirts",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/AF7335C6-5A22-4D4C-91D0-71A9AB795BBA_750x.webp.jpg?v=1665613486"
    },
    {
      "id": 6,
      "title": "Cait Blazer",
      "quantity": 1,
      "price": 247,
      "description": "A classic style for work or leisure. The Cait Blazer comes with a detachable belt in an oversized fit so you can style it as you please. Effortless street style when paired with a tee.",
      "category": "jackets",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/B7127B69-9466-4939-BD9C-FF09BAA45F06_750x.webp.jpg?v=1657162591"
    },
    {
      "id": 7,
      "title": "Nevada // Tort",
      "price": 359,
      "quantity": 1,
      "description": "Nevada is our oversized aviator. Equal parts retro flair and contemporary cool. The ultimate frame for road-tripping. The oversized teardrop frame helps to block out the world and lock in the shade. ",
      "category": "sunglasses",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_caeecdf7-7e94-4882-832c-a5da36497aeb_750x.jpg?v=1670027686"
    },
    {
      "id": 8,
      "title": "Piper // Purple",
      "price": 159,
      "quantity": 1,
      "description": "Soak up everything that is Piper. Stylish, feminine, and simply delicious. We would eat her all up if we could, and so will you. Our frames are made from Italian Acetate that is derived from materials such as sustainably sourced wood pulp and cotton.",
      "category": "sunglasses",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/DB4195DB-9D54-42C3-981E-EBE9EB034A1B_750x.jpg?v=1667252957"
    },
    {
      "id": 9,
      "title": "Marilyn Frame",
      "price": 349,
      "quantity": 1,
      "description": "Marilyn is like a 60's time-warp. Somewhere between Palm Springs and Beverly Hills, preferably poolside. This classic cats-eye gets a modern makeover with sharper edges and a more robust frame. feminine and retro, Y2K meets surf grunge. ",
      "category": "sunglasses",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_8606e394-46c2-47d7-bdcc-e62f1a58631c_750x.jpg?v=1670028396"
    },
    {
      "id": 10,
      "title": "Milla // Black",
      "price": 159,
      "quantity": 1,
      "description": "Milla's thin frame reflects the bad vibes and inspires your next move. We also protect your b·g’s by giving you a sleek bored·george hard case and a protective soft case for your sunglasses to live in when not being worn. - hyperextending spring metal hinges on all  frames, providing both unrivaled durability and exceptional comfort when worn. - All frames are fitted with featherweight TAC lenses, and most importantly, the lenses are polarized with 100% UVA protection.",
      "category": "sunglasses",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/B8DA6301-8CAE-4EDC-94F9-A2890ABF29FA_750x.jpg?v=1667252307"
    },
    {
      "id": 11,
      "title": "Linkage",
      "price": 269,
      "quantity": 1,
      "description": "A positive take on dulling a shine - The linkage lives up to its name by combining two different polish methods turning it into a favourite frame to date. Diamond shape face and teardrop shape arms.",
      "category": "sunglasses",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_cb09d75f-45dc-47ef-8080-0b3c5702aa7c_750x.webp.jpg?v=1667096098"
    },
    {
      "id": 12,
      "title": "Quinn // Green",
      "price": 169,
      "quantity": 1,
      "description": "Colour-Way: Green; Designed in NZ. The epitome of sass and class. The Quinn brings a whole new feel to fashion, making the world envious and lusting for a pair. Our latest bio-degradable range is made from M49 Bio-Acetate. It is classed as bio-degradable due to its degree of biodegradation (90%) after an incubation time of no more than 6 months.",
      "category": "sunglasses",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/B2C501E1-38FB-4852-B7B5-40FB61F23740_750x.webp.jpg?v=1668127652"
    },
    {
      "id": 13,
      "title": "Piper Sweater // Sherbert",
      "price": 161,
      "quantity": 1,
      "description": "Hip length, relaxed fit sweater. Dropped shoulder gives an effortless look. Ribbed neckline, sleeve cuffs and waistband. Large solid logo in white print on the front chest. 100% cotton terry fabric. Nikki wears a size medium and is 173cm tall. Ellery 2022 collection",
      "category": "sweatshirts",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/F9024F23-53C9-4D8B-9921-6E137EE9565C_750x.webp.jpg?v=1666390802"
    },
    {
      "id": 14,
      "title": "Lonely Hunter Hoody // Washed Black",
      "price": 329,
      "quantity": 1,
      "description": "Stolen’s latest collection celebrates the unashamed expressions that were present in the rock glam era. Taking us back to a time when glittery gold tear drops sat atop of Marc Bolan's cheeks and Pamela & Tommy were a force to be reckoned with. This collection explores the theme of 'Rock Glam and the iterations that unfolded between the 1970s and Y2K.  ",
      "category": "sweatshirts",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/88F05555-C756-4B2C-9251-2BAF073A9AFA_750x.jpg?v=1657581505"
    },
    {
      "id": 15,
      "title": "Duke Hoodie // Oak",
      "price": 280,
      "quantity": 1,
      "description": "The Duke Hoodie is a staple sweatshirt, perfect for elevated winter layering. In cosy and comfortable 100% cotton, the Duke features the latest in logo branding from Camilla & Marc.",
      "category": "sweatshirts",
      "rating": {
        "rate": 3.9,
        "count": 70
      },
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/E69CE3B8-EB22-4121-953A-FB8B91A18ACE_750x.webp.jpg?v=1662516994"
    },
    {
      "id": 16,
      "title": "Six Piece Band Ring",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "quantity": 1,
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/38A48FA9-3301-474E-B314-710628A4C6CC_750x.jpeg.jpg?v=1571709542",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 17,
      "title": "Snake Band Skinny",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "quantity": 1,
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/B78CA27C-1144-49BA-8554-4592FD2ECB81_750x.jpeg.jpg?v=1571709542",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 18,
      "title": "Dusted Heart Shield Ring",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "quantity": 1,
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/61064061-3E99-4C63-962C-C8DE87B05DCE_750x.jpg?v=1639440995",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 19,
      "title": "Flashy Necklace // Sterling Silver",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "quantity": 1,
      "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_aafe4a0e-9784-499f-a660-bd59cf296ebb_750x.jpg?v=1571709519",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    }
  ]

  connect()
  .then(async () => {
    const prods = [];
    for(let i = 0; i < data.length; i++) {
        const prod = {
            title: data[i].title,
            price: data[i].price,
            product_id: data[i].id,
            description: data[i].description,
            category: data[i].category,
            quantity: data[i].quantity,
            rating: {
                rate:data[i].rating.rate,
                count:data[i].rating.count
            },
            image: data[i].image
        }
        prods.push(prod)
    }
    await Products.insertMany(prods)
  })
//   "id": 2,
//       "title": "Salty Dog Chained Mini Skirt",
//       "price": 139,
//       "quantity": 1,
//       "description": "THE PERFECT FITTED DENIM MINI SKIRT. HIGH WAISTED AND FITTED TO YOUR WAIST AND HIPS. CLASSIC 5 POCKET DETAILS WITH A RAW HEM. THIS BEAUTY ALSO COMES WITH A METAL CHAIN THAT RUNS THROUGH THE BELT LOOPS AND FASTENS AROUND YOUR WAIST.",
//       "category": "skirts",
//       "rating": {
//         "rate": 3.9,
//         "count": 70
//       },
//       "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/C4221CAA-57F4-41A3-AAE0-0867680273F4_750x.jpg?v=1630647452"

