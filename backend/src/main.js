import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { api } from "./api/api.js";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(json());
app.use(api);

const server = app.listen(port, (err) => {
    if (err) throw new Error(`Error listening -> ${err}`);
    console.log(`Server listening at http://localhost:${port}`);
});

export { server };
