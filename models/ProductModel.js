const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    Model: String,
    price: Number,
    slug: {
        type: String,
        lowercase: true,
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;