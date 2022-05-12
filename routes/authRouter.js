import express from "express";

import emailVerifyMiddleware from "../middlewares/emailVerifyMiddleware.js";
import signUpJoiMiddleware from "../middlewares/signUpJoiMiddleware.js";
import signInValidation from "../middlewares/signInMiddleware.js";

import signIn from "../controllers/signInController.js";
import postSignUp from "../controllers/postSignUp.js";

const authRoute = express.Router();

authRoute.post("/sign-up", signUpJoiMiddleware, emailVerifyMiddleware, postSignUp);
authRoute.post("/sign-in", signInValidation, signIn);

export default authRoute;