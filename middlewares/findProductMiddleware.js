import db from "../database/db.js";

async function findProductMiddleware(req, res, next) {
  const id = req.query.id;
  try {
    const product = await db.collection("products").findOne({ id });
    id ? req.product : res.sendStatus(500);
  } catch (e) {
    res.sendStatus(500);
  }
  next();
}
export default findProductMiddleware;
