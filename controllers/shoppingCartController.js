import jwt from "jsonwebtoken";
import db from "../database/db.js";

async function shoppingCartController(req, res) {
  try {
    const email = res.locals.user.email;
    const shoppingCarts = await db.collection("shopping").findOne({ email });
    const carts = [...shoppingCarts.cart];

    return res.send(carts);

  } catch (e) {

    res.sendStatus(500);

  }
}
export default shoppingCartController;
