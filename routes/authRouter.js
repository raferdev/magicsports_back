import express from "express";
import postSignUp from "../crontrollers/postSignUp.js";
import emailVerifyMiddleware from "../middlewares/emailVerifyMiddleware.js";
import signUpJoiMiddleware from "../middlewares/signUpJoiMiddleware.js";

const authRoute = express.Router();

authRoute.post("/sign-up",signUpJoiMiddleware,emailVerifyMiddleware,postSignUp);
authRoute.post("/sign-in");

export default authRoute;