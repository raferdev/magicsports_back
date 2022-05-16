import express from "express";
import getRootController from "../controllers/getRootController.js";
const rootRouter = express.Router();
rootRouter.get("/user",getRootController)
export default rootRouter;