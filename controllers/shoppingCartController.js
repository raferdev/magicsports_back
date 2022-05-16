import jwt from "jsonwebtoken";
import db from "../database/db.js";

async function shoppingCartController(req, res) {
  const authorization = req.headers.authorization;
  const filteredToken = authorization.replace("Bearer", "").trim();
  try{
    const dados = jwt.verify(filteredToken, process.env.JWT_SECRET);
  console.log(dados)
    const shoppingCarts = await db.collection("shopping").findOne({email});
    res.send(shoppingCarts.cart);
  } catch(e){
    res.sendStatus(500)
  }
}
export default shoppingCartController;
