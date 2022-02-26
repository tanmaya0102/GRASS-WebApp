var mongoose = require("mongoose");
const product = require("./models/product");
mongoose.set('useUnifiedTopology', true);

// Requiring necessary models
var Product = require("./models/product");

// Starter data

var data = [
    {
        product: "Bamboo Tooth Brushes",
        price: 69.99,
        productImage: "https://images.unsplash.com/photo-1592372554345-22ced975691d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=808&q=80",
        productPageLink: "https://sustainkart.com/products/bamboo-toothbrush-pack-of-2?variant=38192301047995&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2021-02-24&utm_source=google&utm_medium=smart_campaign&gclid=CjwKCAjwiLGGBhAqEiwAgq3q_o977M1NfIf2O7NSXkWbhkqEXH7H25IRM_ZOod9mx_H4iEce1O99fhoCjHQQAvD_BwE"
    },
    {
        product: "THOA: The Earth Box",
        price: 2200,
        productImage: "https://imgshopnewgumlet.lbb.in/catalog/product/i/m/img_0131_1_.jpg?fm=webp&w=750&h=500&dpr=2",
        productPageLink: "https://lbb.in/shop/product/HND042020N0023?utm_source=google&utm_medium=cpc&utm_campaign=Smart-Shopping-Campaign&gclid=CjwKCAjwiLGGBhAqEiwAgq3q_q1pi4J_enSCm6wQaQLBre_No5jyGeI5oJnSdzmTdvf8-Rq4HWKB0hoCp-kQAvD_BwE"
    },    
    
    {
        product: "Playing Cards",
        price: 250,
        productImage: "https://justkraft.s3.amazonaws.com/productimages/MTG-D9.jpg",
        productPageLink: "https://justkraft.com/product/eco-playing-cards-6x9x25-cm-mtg-d9?gclid=Cj0KCQiAmeKQBhDvARIsAHJ7mF5HPRmMsFirie8XHDQpQ1ytXaTG8fl2GzQz4jGFL3Evnwo2ASBO6pcaAseOEALw_wcB"
    },    
    
    {
        product: "Paper Pencils",
        price: 80,
        productImage: "https://images-na.ssl-images-amazon.com/images/I/519AJJUvKsL.jpg",
        productPageLink: "https://www.amazon.in/Paper-Nest-Eco-Friendly-Recycled-Newspapers/dp/B07DC8N8LM/ref=pd_lpo_229_t_0/261-8076415-7829649?_encoding=UTF8&pd_rd_i=B07DC8N8LM&pd_rd_r=70ff285b-bc1a-4bbf-bfc9-ad3236ea101d&pd_rd_w=qgQKC&pd_rd_wg=2bC0M&pf_rd_p=381a0cfc-e204-4c65-93f2-a892ca3da5ad&pf_rd_r=KQBHD9F07F2ANCJM02S3&psc=1&refRID=KQBHD9F07F2ANCJM02S3"
    },    
    
    {
        product: "Water bottle",
        price: 2000,
        productImage: "https://cdn.shopify.com/s/files/1/1013/4120/products/green_elephant_water_bottle_with_box_800x.jpg?v=1582923422",
        productPageLink: "https://treetribe.com/products/green-elephant-water-bottle-20-oz?variant=31453846241364&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=water-bottles&utm_source=google&utm_medium=paid&gclid=CjwKCAjwiLGGBhAqEiwAgq3q_pHa6o-vYT569N1TJFfhfTVwu1HQMOgXs3TQbO0jNOuRRFwkRv0w_BoC9YQQAvD_BwE"
    },    
    
    {
        product: "Hemp Pouch",
        price: 550,
        productImage: "https://cdn.shopify.com/s/files/1/1117/8758/products/IMG_2262_1800x1800.JPG?v=1569012452",
        productPageLink: "https://atrangi.in/products/pure-hemp-pouch?currency=INR&variant=991369363462&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=CjwKCAjwiLGGBhAqEiwAgq3q_gjKsTaPcM47l1vlNlISchP5w1XbFtoxoxBTn1EP5BE-z402ASb_tBoCBA0QAvD_BwE"
    },    {
        product: "Dishwashing liquid",
        price: 1830,
        productImage: "https://cdn.shopify.com/s/files/1/0549/4272/8429/products/LemonTamarindDishwashConcentrate260g-3_900x.png?v=1636356960",
        productPageLink: "https://rusticart.in/products/rustic-art-lemon-tamarind-dish-wash-concentrate-260g?variant=41978045989101&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=Cj0KCQiAmeKQBhDvARIsAHJ7mF6eaHgL_NwUyZdJ1HoR2xLWTXikCRIF0rubVcDOSPoNHnWlR_M-InMaArzVEALw_wcB"
    },
]

function seedDB(){
 data.forEach(function(val){
     Product.create(val, function(err, createdProd){
        if(err){ console.log(err);}
         else {
             console.log(createdProd)
         }
     })
 })
}



// // Export seedDB function
module.exports = seedDB;