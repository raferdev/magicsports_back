import db from "../database/db.js";

async function postShoppingCart(req, res) {
  const authorization = req.headers.authorization;
  const filteredToken = authorization.replace("Bearer", "").trim();
  const product = req.product;

  try {
    const dados = jwt.verify(filteredToken, process.env.JWT_SECRET);
    const email = dados.email;

    await db
      .collection("shopping")
      .updateMany({ email }, { $push: { cart: { product } } });
  } catch (e) {
    res.sendStatus(500);
  }
}
export default postShoppingCart;
