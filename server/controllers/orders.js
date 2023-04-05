const { OrderModel } = require("../models/order");

const getOrders = async (req, res) => {
  res.send({ data: await OrderModel.find() });
};

const createOrder = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    const { fullName, email, address, phone, message, products, totalPrice } =
      req.body;
    await OrderModel.create({
	 id: Date.now(),
      fullName,
      email,
      address,
      phone,
      message,
      products,
      totalPrice,
    });
    res.send({ status: "Ok", data: null });
  }
};

module.exports = { getOrders, createOrder };
