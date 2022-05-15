import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoute from "./routes/authRouter.js";
import shoppingRouter from "./routes/shoppingRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use(authRoute);
app.use(shoppingRouter)
app.listen(process.env.PORT);
