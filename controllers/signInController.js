import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import "dotenv/config";

import db from "./../database/db.js"


async function signIn (req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email: email });
        if (!user) {
            return res.sendStatus(404);
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.sendStatus(401);
        }

        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET);
        return res.send(token).status(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export default signIn;