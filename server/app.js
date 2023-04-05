const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5001;
const MONGODB_URL = "mongodb+srv://cluster0.l7za2ki.mongodb.net/organick-db";

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use("/api", require("./routes"));

const run = async () => {
	try {
		// mongodb
		await mongoose.connect(MONGODB_URL);

		// start server
		app.listen(PORT, () => {
			console.log(`Listening to requests on http://localhost:${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

run();
