import express from "express";
import deleteShoppingCart from "../controllers/deleteShoppingCart.js";
import shoppingCartController from "../controllers/shoppingCartController.js";
import tokenValidation from "../middlewares/tokenVerifyMiddleware.js";

const shoppingRouter = express.Router();

shoppingRouter.get("/shopping-cart",tokenValidation,shoppingCartController)
shoppingRouter.delete("/shopping-cart",tokenValidation,deleteShoppingCart)
export default shoppingRouter;