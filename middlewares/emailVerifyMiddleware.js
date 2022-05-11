import db from "../database/db.js";

export default async function emailVerifyMiddleware (req,res,next) {

    const {email} = req.body;

    try {
        const duplicateEmail = await db.collection("users").findOne({email});
        if(duplicateEmail) {
            return res.status(422).send('Email já se encontra em uso');
        }
    } catch(e) {
        return res.status(409).send(e);
    }
    
    next();
}