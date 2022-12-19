const Product = require("../models/products.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => res.json({ Products: allProducts }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json({ Product: oneProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title: title,
    price: price,
    description: description,
  })
    .then((newProduct) => res.json({ Product: newProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json({ Product: updatedProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((res) => res.json({ result: res }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
