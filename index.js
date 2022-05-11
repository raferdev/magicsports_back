import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoute from "./routes/authRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

// rotas
app.use(authRoute);

app.listen(process.env.PORT);
