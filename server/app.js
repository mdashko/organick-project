const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT || 3000;
const MONGODB_URL =
	"mongodb+srv://martadashko:1234@cluster0.l7za2ki.mongodb.net/organick-db";

const app = express();

app.use(cors());
app.use("/api", require("./routes"));

const run = async () => {
	try {
		// mongodb
		// await mongoose.connect(MONGODB_URL);

		// start server
		app.listen(PORT, () => {
			console.log(`Listening to requests on http://localhost:${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

run();
