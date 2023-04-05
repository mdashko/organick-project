const getData = async (req, res) => {
	res.send({
		data: {
			orders: await OrderModel.find(),
			products: await ProductModel.find(),
		},
	});
};

module.exports = { getData };
