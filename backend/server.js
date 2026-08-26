import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import db from "./src/config/db.js";


const app = express();

const PORT = process.env.PORT;
db();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "DELETE", "GET"]
}));



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})