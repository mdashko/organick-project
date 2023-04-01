const { Schema, model } = require("mongoose");

const Order = new Schema({
	id: {
		type: Number,
		required: true,
	},

	fullName: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	address: {
		type: String,
		required: true,
	},

	phone: {
		type: String,
		required: true,
	},

	message: {
		type: String,
		required: false,
	},

	products: {
		type: [
			new Schema({
				productId: { type: Number, required: true },
				quantity: { type: Number, required: true },
			}),
		],
		required: true,
	},

	totalPrice: {
		type: Number,
		required: true,
	},
});

const OrderModel = model("order", Order);
module.exports = { OrderModel };
