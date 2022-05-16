import express from "express";
import cors from "cors";
import chalk from "chalk";
import "dotenv/config";
import shoppingRouter from "./routes/shoppingRouter.js";

import router from "./routes/routerIndex.js";
import rootRouter from "./routes/rootRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use(shoppingRouter);
app.use(router);
app.use(rootRouter)

app.listen(process.env.PORT, () =>
  console.log(chalk.bold.blue("Server running on port " + process.env.PORT))
);
