import joi from "joi";

function signInValidation (req, res, next) {
    const signInSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });

    const validation = signInSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        console.log(validation.error);
        return res.sendStatus(400);
    }

    next();
}

export default signInValidation;