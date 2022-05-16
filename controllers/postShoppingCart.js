import db from "../database/db.js";

async function postShoppingCart(req, res) {
  const product = req.product;
  const email = res.locals.user.email;
  console.log(product)
  try {
    await db
      .collection("shopping")
      .updateMany({ email }, { $push: { cart: { ...product } } });
  } catch (e) {
    res.sendStatus(500);
  }
}
export default postShoppingCart;
