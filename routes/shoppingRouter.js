import express from "express";
import deleteShoppingCart from "../controllers/deleteShoppingCart.js";
import postShoppingCart from "../controllers/postShoppingCart.js";
import shoppingCartController from "../controllers/shoppingCartController.js";
import findProductMiddleware from "../middlewares/findProductMiddleware.js";
import tokenValidation from "../middlewares/tokenVerifyMiddleware.js";

const shoppingRouter = express.Router();

shoppingRouter.get("/shopping-cart",tokenValidation,shoppingCartController)
shoppingRouter.post("/shopping-cart",tokenValidation,findProductMiddleware,postShoppingCart)
shoppingRouter.delete("/shopping-cart",tokenValidation,deleteShoppingCart)

export default shoppingRouter;