import jwt from "jsonwebtoken";
import db from "../database/db.js";

async function shoppingCartController(req, res) {
  
  const authorization = req.headers.authorization;
  const filteredToken = authorization.replace("Bearer", "").trim();
  try {
    const dados = jwt.verify(filteredToken, process.env.JWT_SECRET);
    const email = dados.email;
    const shoppingCarts = await db.collection("shopping").findOne({ email });
    const carts = [...shoppingCarts.cart];

    return res.send(carts);

  } catch (e) {

    res.sendStatus(500);

  }
}
export default shoppingCartController;
