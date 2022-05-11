import Joi from "joi";
export default async function signUpJoiMiddleware(req, res, next) {
  const signUpReq = req.body;
  const signUpScheme = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(8).max(20).required(),
  });
  const signUpValidate = signUpScheme.validate(signUpReq, {
    abortEarly: false,
  });
  if (signUpValidate) {
    return res.status(400).send("Erro de sintaxe. Requisição abortada!");
  }
  next();
}
