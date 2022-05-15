import express from "express";

import { getProduct, getProducts } from "../controllers/productsController.js";
import addProd from "../controllers/teste.js";

const productsRoute = express.Router();

productsRoute.get("/products", getProducts);
productsRoute.get("/products/:id", getProduct);
productsRoute.post("/newprod", addProd);

export default productsRoute;