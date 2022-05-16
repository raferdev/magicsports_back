import db from "../database/db.js";

async function findProductMiddleware(req, res, next) {
  const id = req.query.id;
  try {
    const product = await db.collection("products").findOne({ id });
    console.log(product)
    if(product) {
        req.product = product
    } else {
        res.sendStatus(501)
    }
  } catch (e) {
    res.sendStatus(500);
  }
  next();
}
export default findProductMiddleware;
