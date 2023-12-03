const ProductModel = require("./models/ProductModel")
const createProduct = async (title, Model, price) => {
    console.log("Created Product successfully");
    let product = new ProductModel();
    product.title = title;
    product.Model = Model;
    product.price = price;
    await product.save();
    return product;
}

const updateProduct = async (_id, title, Model, price) => {
    let product = await ProductModel.findById(_id);
    if (!product) {
        throw new Error("Product not found");
    }
    console.log("Updated Product successfully!");
    product.title = title;
    product.Model = Model;
    product.price = price;
    await product.save();
    return product;
}

const getProduct = async () => {
    let product = await ProductModel.find();
    return product;
}

const deleteProduct = async (_id) => {
    let product = await ProductModel.findByIdAndDelete(_id);
    return product;
}

module.exports.createProduct = createProduct;
module.exports.getProduct = getProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;