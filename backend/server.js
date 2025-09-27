import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
// user route

app.use("/api/movies", formRoute);


app.listen(5000, () => {
    connectDB();
    console.log("Serverr  is running on port 5000");
});