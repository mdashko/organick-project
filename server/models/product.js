const { Schema, model } = require("mongoose");

const Product = new Schema({
	_id: {
		type: Number,
		required: true,
	},

	image: {
		type: String,
		required: true,
	},

	name: {
		type: String,
		required: true,
	},

	type: {
		type: String,
		required: true,
	},

	rating: {
		type: String,
		required: true,
	},

	price: {
		type: Number,
		required: false,
	},

	newPrice: {
		type: Number,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},
});

const ProductModel = model("product", Product);
module.exports = { ProductModel };
