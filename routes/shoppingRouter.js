import express from "express";
import deleteShoppingCart from "../controllers/deleteShoppingCart.js";
import postShoppingCart from "../controllers/postShoppingCart.js";
import shoppingCartController from "../controllers/shoppingCartController.js";
import findProductMiddleware from "../middlewares/findProductMiddleware.js";
import tokenValidation from "../middlewares/tokenVerifyMiddleware.js";

const shoppingRouter = express.Router();

shoppingRouter.get("/shopping-cart",shoppingCartController)
shoppingRouter.post("/shopping-cart",findProductMiddleware,postShoppingCart)
shoppingRouter.delete("/shopping-cart",deleteShoppingCart)
export default shoppingRouter;