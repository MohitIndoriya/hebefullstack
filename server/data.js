const Products = require("./database/products.model")
const {connect} = require("./database/connect")

const data = [
  {
    "id": 1,
    "title": "Nilsa skirt // Teal Green",
    "price": 145,
    "desciption": "This premium linen skirt features an effortless, maxi-length silhouette, a comfortable elasticised waistband, and side vents in the hem create movement around the body. Style your Nilsa Linen Skirt with the matching Nilsa Top, or a simple cotton rib tank.",
    "category": "skirts",
    "quantity": 1,
    "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_84950a9c-b6d8-4692-8b21-cbc9fe44e1d8_1800x1800.jpg?v=1666223088"
  },
  {
    "id": 2,
    "title": "Runa Skirt // Black",
    "price":350 ,
    "desciption": "The Runa Skirt is a mid-length linen skirt that sits on a fixed waistband, secured by an invisible zip closure at the side. The top of the skirt features a wide panel of small tucks that create a subtle fullness and volume through the body of the skirt.",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/runa-skirt-black"
  },
  {
    "id": 3,
    "title": "Denim Mini Skirt // Jet Black",
    "price": 110,
    "desciption": "Cut from premium cotton denim, our Denim Mini Skirt is an essential in every spring and summer wardrobe. This high-waisted skirt features a classic fit that sits close to the hips but still offers room to move. Style your denim skirt with a cotton rib tank, an asymmetric top, or wear it to the beach with swimwear.",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/denim-mini-skirt-jet-black"
  },
  {
    "id": 4,
    "title": "Blazing Skirt // Grey Gingham",
    "price":149 ,
    "desciption": "Our best selling Blazing Tiered Maxi Skirt now comes in a gorgeous grey and white gingham print. Wear with your favourite plain tank or crop and some mules. Featuring a flat waist and perfectly balanced tiers for a super flattering fit!",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/blazing-skirt-grey-gingham-coming-soon"
  },
  {
    "id": 5,
    "title": "Charming Skirt",
    "price": 139,
    "desciption": "The Charming skirt is a must-have staple in your wardrobe! Make a statement in this stunning emerald-coloured maxi, perfect for every occasion.",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/charming-skirt"
  },
  {
    "id": 6,
    "title": "Utility Skirt // Ecru",
    "price": 129,
    "desciption": "The Charming skirt is a must-have staple in your wardrobe! Make a statement in this stunning emerald-coloured maxi, perfect for every occasion.",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/utility-skirt-ecru"
  },
  {
    "id": 7,
    "title": "Salty Dog Chained Mini Skirt",
    "price": 139,
    "desciption": "THE PERFECT FITTED DENIM MINI SKIRT. HIGH WAISTED AND FITTED TO YOUR WAIST AND HIPS. CLASSIC 5 POCKET DETAILS WITH A RAW HEM. THIS BEAUTY ALSO COMES WITH A METAL CHAIN THAT RUNS THROUGH THE BELT LOOPS AND FASTENS AROUND YOUR WAIST.",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/salty-dog-jain"
  },
  {
    "id": 8,
    "title": "Still The One Skirt // Black",
    "price":395 ,
    "desciption": "The Still the One Skirt is about to be your summer wardrobe MVP. Three ways to wear this skirt",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/still-the-one-skirt-black-coming-soon"
  },
  {
    "id": 9,
    "title": "Aubrey Knit Skirt // Black",
    "price":145 ,
    "desciption": "HIGH WAISTED AND FITTED TO YOUR WAIST AND HIPS. CLASSIC 5 POCKET DETAILS WITH A RAW HEM. THIS BEAUTY ALSO COMES WITH A METAL CHAIN THAT RUNS THROUGH THE BELT LOOPS AND FASTENS AROUND YOUR WAIST.",
    "category": "skirts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/skirts/products/aubrey-knit-skirt-black"
  },
  {
    "id": 10,
    "title": "Mini Pearl Huggies // Gold",
    "price": 78,
    "desciption": "Delicate little huggies, made up of mini pearls. Super sweet on their own, even better layered with other earrings.",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/mini-pearl-huggies"
  },
   {
    "id": 12,
    "title": "So Square Huggies // Silver",
    "price": 74,
    "desciption": "Delicate square huggies. Classic & perfect for stacking.",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/so-square-huggies-silver-coming-soon"
  },
   {
    "id": 13,
    "title": "Mini Pearl Huggies // Silver",
    "price":78,
    "desciption": "Delicate little huggies, made up of mini pearls. Super sweet on their own, even better layered with other earrings.",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/copy-of-mini-pearl-huggies-silver"
  },
   {
    "id": 14,
    "title": "Hieroglyph Pendant // Gold",
    "price": 120,
    "desciption": "jewellery",
    "category": "Textured brass with 24k gold plating and crystal stud detail.",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/hieroglyph-pendant-gold"
  },
   {
    "id": 15,
    "title": "Milky Way Earring",
    "price": 59,
    "desciption": "A collaboration between local label Odi Jewellery and Hebe Boutique. Nodding towards 90’s bling, shop our small edit of current styles that will add an element of playful edge to your outfit. Pair back with a casual sweat, blazer and denim for a feminine luxe accent or be totally extra and go all out! ",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/milkyway-earring"
  },
   {
    "id": 16,
    "title": "Vesta Hoops // Gold",
    "price": 120,
    "desciption": "Crumpled irregular texture is what make these hoops super special.",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/vesta-hoops "
  },
   {
    "id": 17,
    "title": "Drop Huggies // Gold",
    "price":78,
    "desciption": "A slightly bolder huggie with a smooth drop shape. Timeless & perfect for everyday wear.",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/mini-pearl-huggies-coming-soon"
  },
   {
    "id": 18,
    "title": "Capella Earring",
    "price": 59,
    "desciption": "A collaboration between local label Odi Jewellery and Hebe Boutique. Nodding towards 90’s bling, shop our small edit of current styles that will add an element of playful edge to your outfit. Pair back with a casual sweat, blazer and denim for a feminine luxe accent or be totally extra and go all out! ",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/capella-earring"
  },
   {
    "id": 19,
    "title": "Guitar Pic Anchor Sleeper",
    "price": 129,
    "desciption": "Guitar Pic Anchor Sleeper crafted in high polished sterling silver ",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/guitar-pic-anchor-sleeper"
  },
   {
    "id": 20,
    "title": "Snake Band Skinny",
    "price": 169,
    "desciption": "Textural snake skin pattern with STOLEN branded plate.",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/snake-band-skinny"
  },
   {
    "id": 21,
    "title": "You Rock Chain Studs",
    "price": 52,
    "desciption": "A pair of simple rectangular studs with chain.",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/you-rock-chain-studs"
  },
  {
    "id": 22,
    "title": "Pretty In Pearls Necklace",
    "price": 98,
    "desciption": "A delicate freshwater pearl necklace. Super layered or simply sweet on it's own. Secured with a clasp & adjustable length. ",
    "category": "jewellery",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/jewellery/products/pretty-in-pearls-necklace"
  },
  {
    "id": 23,
    "title": "Nevada // Tort",
    "price": 359,
    "quantity": 1,
    "desciption": "Nevada is our oversized aviator. Equal parts retro flair and contemporary cool. The ultimate frame for road-tripping. The oversized teardrop frame helps to block out the world and lock in the shade. ",
    "category": "sunglasses",
    "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_caeecdf7-7e94-4882-832c-a5da36497aeb_750x.jpg?v=1670027686"
  },
  {
    "id": 24,
    "title": "Piper // Purple",
    "price": 159,
    "quantity": 1,
    "desciption": "Soak up everything that is Piper. Stylish, feminine, and simply delicious. We would eat her all up if we could, and so will you. Our frames are made from Italian Acetate that is derived from materials such as sustainably sourced wood pulp and cotton.",
    "category": "sunglasses",
    "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/DB4195DB-9D54-42C3-981E-EBE9EB034A1B_750x.jpg?v=1667252957"
  },
  {
    "id": 25,
    "title": "Marilyn Frame",
    "price": 349,
    "quantity": 1,
    "desciption": "Marilyn is like a 60's time-warp. Somewhere between Palm Springs and Beverly Hills, preferably poolside. This classic cats-eye gets a modern makeover with sharper edges and a more robust frame. feminine and retro, Y2K meets surf grunge. ",
    "category": "sunglasses",
    "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_8606e394-46c2-47d7-bdcc-e62f1a58631c_750x.jpg?v=1670028396"
  },
  {
    "id": 26,
    "title": "Milla // Black",
    "price": 159,
    "quantity": 1,
    "desciption": "Milla's thin frame reflects the bad vibes and inspires your next move. We also protect your b·g’s by giving you a sleek bored·george hard case and a protective soft case for your sunglasses to live in when not being worn. - hyperextending spring metal hinges on all  frames, providing both unrivaled durability and exceptional comfort when worn. - All frames are fitted with featherweight TAC lenses, and most importantly, the lenses are polarized with 100% UVA protection.",
    "category": "sunglasses",
    "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/B8DA6301-8CAE-4EDC-94F9-A2890ABF29FA_750x.jpg?v=1667252307"
  },
  {
    "id": 27,
    "title": "Linkage",
    "price": 269,
    "quantity": 1,
    "desciption": "A positive take on dulling a shine - The linkage lives up to its name by combining two different polish methods turning it into a favourite frame to date. Diamond shape face and teardrop shape arms.",
    "category": "sunglasses",
    "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/image_cb09d75f-45dc-47ef-8080-0b3c5702aa7c_750x.webp.jpg?v=1667096098"
  },
  {
    "id": 28,
    "title": "Quinn // Green",
    "price": 169,
    "quantity": 1,
    "desciption": "Colour-Way: Green; Designed in NZ. The epitome of sass and class. The Quinn brings a whole new feel to fashion, making the world envious and lusting for a pair. Our latest bio-degradable range is made from M49 Bio-Acetate. It is classed as bio-degradable due to its degree of biodegradation (90%) after an incubation time of no more than 6 months.",
    "category": "sunglasses",
    "image": "https://cdn.shopify.com/s/files/1/1132/3440/products/B2C501E1-38FB-4852-B7B5-40FB61F23740_750x.webp.jpg?v=1668127652"
  },
  {
    "id": 29,
    "title": "Milla // Silver",
    "price": 159,
    "desciption": "Milla's thin frame reflects the bad vibes and inspires your next move.",
    "category": "sunglasses",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/sunglasses/products/milla-silver"
  },
  {
    "id": 30,
    "title": "Last Resort Frame // Black",
    "price": 329,
    "desciption": "Last Resort is the blurred resurrection of a dream where Jim Morrison sings and the Thunderbirds hover and rock n roll is king. Originally launched with our first eyewear collection back in 2013, we have now modified this frame with sharper edges and a much more sustainable manufacturing process.",
    "category": "sunglasses",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/sunglasses/products/last-resort-frame-black"
  },
  {
    "id": 31,
    "title": "Parker // Pink - COMING SOON",
    "price":169 ,
    "desciption": "Feel empowered by the captivating figure of our Parker. Bolder than ever, and here to make an almighty statement.",
    "category": "sunglasses",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/sunglasses/products/parker-pink-coming-soon"
  },
  {
    "id": 32,
    "title": "Duke Hoodie // Black",
    "price": 280,
    "desciption": "The Duke Hoodie is a staple sweatshirt, perfect for elevated winter layering. In cosy and comfortable 100% cotton, the Duke features the latest in logo branding from Camilla & Marc.",
    "category": "sweatshirt",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/sweatshirts-hoodies/products/duke-hoodie-black-pre-order"
  },
  {
    "id": 33,
    "title": "Sutton Sweater // Black",
    "price": 260,
    "desciption": "C&M CAMILLA AND MARC Sutton Crew Neck Sweater in Black.",
    "category": "sweatshirt",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/sweatshirts-hoodies/products/sutton-sweater-black-pre-order"
  },
  {
    "id": 34,
    "title": "Script Logo Hood // Baby Pink",
    "price": 299,
    "desciption": "From perfect palm trees to the Wild West, the Hollywood hustle to the idyllic Palm Springs. Our latest collection 'American Dream' celebrates vintage Americana aesthetics from the 50s and 60s with a remixed Y2K mood. This is Americana meets rock n roll.",
    "category": "sweatshirt",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/sweatshirts-hoodies/products/script-logo-hood-baby-pink"
  },
  {
    "id": 35,
    "title": "Wonder Short // Garden",
    "price": 89,
    "desciption": "A Summer staple so good, you will want it in all colours! ",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/wonder-short-garden-coming-soon"
  },
  {
    "id": 36,
    "title": "Leighton Short // Sky",
    "price": 140,
    "desciption": "Boxer Style Shorts made with 100% cotton poplin that’s light, breathable and fit for lounging, sleeping, and even wearing out.",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/leighton-short-sky"
  },
  {
    "id": 37,
    "title": "Wonder Short // Black",
    "price": 79,
    "desciption": "The Wonder Short is a classic paper bag style with an elasticated high cut waist, a removable tie and pockets",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/wonder-short-black-coming-soon"
  },
  {
    "id": 38,
    "title": "Ramona Short // Clover",
    "price": 320,
    "desciption": "The Ramona Short is built upon our adored Willow Pant. They are crafted in 100% Silk and feature the same relaxed tailored fit, sitting on a fixed waistband and secured with a zip and shell button closure. These shorts feature two pleats on either side of the zip as well as pockets and belt loops",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/ramona-short-clover"
  },
  {
    "id": 39,
    "title": "Valencia Short // White",
    "price": 210,
    "desciption": "C&M CAMILLA AND MARC Valencia Cotton Logo Short in White.",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/valencia-short-white"
  },
  {
    "id": 40,
    "title": "Newport Short // Marigold Broderie",
    "price": 219,
    "desciption": "The Newport Shorts are back! Our favorite frilly skort, this time in a sunny marigold broderie. Featuring a side zip and a beautiful scalloped broderie edge.",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/newport-short-marigold-broderie"
  },
   {
    "id": 41,
    "title": "Outline Shorts // Black Denim",
    "price": 229,
    "desciption": "A mid-rise denim short that finishes above the knee, featuring elastic at the waistband for a comfortable fit. The shorts have front pleats, both side seam and back patch pockets, and are fastened with nickel-free tacks in a concealed front fly.",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/outline-shorts-black-denim-coming-soon"
  },
   {
    "id": 42,
    "title": "Casey Short // Pink",
    "price": 120,
    "desciption": "A mid-rise denim short that finishes above the knee, featuring elastic at the waistband for a comfortable fit.",
    "category": "shorts",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/shorts/products/casey-short-pink-coming-soon"
  },
   {
    "id": 43,
    "title": "Super Luxe Elastic Wide Leg // Black Satin",
    "price": 139,
    "desciption": "Feel luxurious in the super soft drapey wide leg satin pants by Among the Brave. These pants will effortlessly take you from desk to dinner, We love these paired with a button up shirt and heels or a simple cami and sneakers for a more casual look. ",
    "category": "pants",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/pants/products/super-luxe-elastic-wide-leg-black-satin"
  },
   {
    "id": 44,
    "title": "Sweetheart Pants // Black",
    "price": 285,
    "desciption": "Classic linen pants with a scalloped spin. We love our new sweet heart pants paired with thematching sweetheart shirt. Dress them up with a heel or wear them everyday with your favoritesummer sandal.",
    "category": "pants",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/pants/products/sweetheart-pants-black"
  },
   {
    "id": 45,
    "title": "Home Pant // Natural",
    "price": 249,
    "desciption": "60% linen 35% viscose 5% elastane",
    "category": "pants",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/pants/products/home-pant-natural"
  },
   {
    "id": 46,
    "title": "Luna Knit Pant // Black",
    "price": 420,
    "desciption": "C&M CAMILLA AND MARC Luna Knit Wide Leg Pant in Black.",
    "category": "pants",
    "quantity": 1,
    "image": "https://hebeboutique.com/collections/pants/products/luna-knit-pant-black"
  }

]

  connect()
  .then(async () => {
    const prods = [];
    for(let i = 0; i < data.length; i++) {
        const prod = {
            title: data[i].title,
            price: data[i].price,
            description: data[i].desciption,
            category: data[i].category,
            image: data[i].image
        }
        prods.push(prod)
    }
    await Products.insertMany(prods)
  })
