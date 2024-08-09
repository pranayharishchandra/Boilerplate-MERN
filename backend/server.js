import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import { v2 as cloudinary } from "cloudinary";

// import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app       = express();
const PORT      = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(express.json({ limit: "5mb" })); // to parse req.body
// limit shouldn't be too high to prevent DOS
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use(cookieParser());

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	// connectMongoDB();
});
