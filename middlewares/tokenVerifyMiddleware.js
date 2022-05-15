import jwt from "jsonwebtoken";

async function tokenValidation (req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.sendStatus(422);
    }
    const filteredToken = token.replace("Bearer", "").trim();
    try {
        jwt.verify(filteredToken, process.env.JWT_SECRET);

    } catch (error) {
        return res.sendStatus(400);
    }

    next();
}  

export default tokenValidation;