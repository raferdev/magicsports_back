import joi from "joi";

async function checkoutValidation (req, res, next) {
    if (!req.body.billingAdress || !req.body.payment || !req.body.purchase) {
        return res.sendStatus(422);
    }

    const adressSchema = joi.object({
        street: joi.string().required(),
        number: joi.number().required(),
        CEP: joi.string().length(8).pattern(/^[0-9]{8}$/).required()
    }).unknown(true);

    const paymentSchema = joi.object({
        CCNumber: joi.string().length(16).pattern(/^[0-9]{16}$/).required(),
        name: joi.string().required(),
        CPF: joi.string().length(11).pattern(/^[0-9]{11}$/).required(),
        telephone: joi.string().length(12).pattern(/^[0-9]{12}$/).required(),
        CCSecurityCode: joi.string().length(3).pattern(/^[0-9]{3}$/).required()
    }).unknown(true);

    const adressValidation = adressSchema.validate(req.body.billingAdress);
    const paymentValidation = paymentSchema.validate(req.body.payment);

    if (adressValidation.error || paymentValidation.error) {
        console.log(adressValidation.error)
        return res.sendStatus(400);
    }

    next();
}

export default checkoutValidation;