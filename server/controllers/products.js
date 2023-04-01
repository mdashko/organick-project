const { ProductModel } = require("../models/product");

const getProducts = async (req, res) => {
	res.send({data: await ProductModel.find()});
};

module.exports = { getProducts };
