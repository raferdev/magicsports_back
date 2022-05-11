import express from "express";

import signIn from "../controllers/signInController.js";
import signInValidation from "../middlewares/signInMiddleware.js";

const authRoute = express.Router();

authRoute.post("/sign-up");
authRoute.post("/sign-in", signInValidation, signIn);

export default authRoute;