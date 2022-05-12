import express from "express";
import cors from "cors";
import chalk from "chalk";
import "dotenv/config";

import router from "./routes/routerIndex.js";

const app = express();

app.use(express.json());
app.use(cors());

// rotas
app.use(router);

app.listen(process.env.PORT, () => console.log(chalk.bold.blue("Server running on port " + process.env.PORT)));
