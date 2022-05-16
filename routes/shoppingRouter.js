import express from "express";
import deleteShoppingCart from "../controllers/deleteShoppingCart.js";
import shoppingCartController from "../controllers/shoppingCartController.js";
import tokenValidation from "../middlewares/tokenVerifyMiddleware.js";

const shoppingRouter = express.Router();

shoppingRouter.get("/shopping-cart",shoppingCartController)
shoppingRouter.delete("/shopping-cart",deleteShoppingCart)
export default shoppingRouter;