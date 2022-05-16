import express from "express";

import tokenValidation from "../middlewares/tokenVerifyMiddleware.js";

import { getProduct, getProducts } from "../controllers/productsController.js";
import addProd from "../controllers/teste.js";
import checkout from "../controllers/checkoutController.js";
import checkoutValidation from "../middlewares/checkoutMiddleware.js";


const productsRoute = express.Router();

productsRoute.get("/products", getProducts);
productsRoute.get("/products/:id", getProduct);
productsRoute.post("/newprod", tokenValidation, addProd);
productsRoute.post("/checkout", checkoutValidation, checkout);

export default productsRoute;