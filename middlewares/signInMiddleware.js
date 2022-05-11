import joi from "joi";

function signInValidation (req, res, next) {
    const signInSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });

    const validation = signInSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        return res.send(validation.error.details).status(400);
    }

    next();
}

export default signInValidation;