import express from "express";
import shoppingCartController from "../controllers/shoppingCartController.js";

const shoppingRouter = express.Router();

shoppingRouter.get("/shopping-cart",shoppingCartController)

export default shoppingRouter;