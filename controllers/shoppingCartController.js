import jwt from "jsonwebtoken";
import db from "../database/db.js";

async function shoppingCartController(req, res) {
  const authorization = req.headers.authorization;
  const filteredToken = authorization.replace("Bearer", "").trim();
  console.log(filteredToken)
  try{
    const dados = jwt.verify(filteredToken, process.env.JWT_SECRET);
    const email = dados.email
    const shoppingCarts = await db.collection("shopping").findOne({email});
    res.send(shoppingCarts.cart);
  } catch(e){
    res.sendStatus(500)
  }
}
export default shoppingCartController;
