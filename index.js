const express = require('express');
const punycode = require('punycode');
const app = express();
const mongoose = require('mongoose');
const { createProduct, getProduct, deleteProduct, updateProduct } = require("./src/ProductsOperation")
app.use(express.json());

mongoose.connect('mongodb+srv://asad:1410@cluster0.dviirxh.mongodb.net/').then(async () => { // for Global server
    console.log("Connection to MogoDB Successful");
// mongoose.connect('mongodb://localhost/Products').then(async () => { // fro local server
//     console.log("Connection to MogoDB Successful");
    // let product = await createProduct("Asus", "VivoBook", "234000");
    // console.log(product);
    let getProducts = await getProduct();
    console.log(getProducts);
    // console.log(await deleteProduct("656c60e474604fe82cabfff3"));
    // let UpdateProduct = updateProduct("656c641e957fcede2b2a6a09", "Asus", "Vivobook 3", "250000")
}).catch((err) => {
    console.log("Connection Failed");
    console.log(err);
});

app.listen(3000)