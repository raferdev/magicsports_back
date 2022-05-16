import jwt from "jsonwebtoken";
import db from "../database/db.js";

async function shoppingCartController(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization.replace("Bearer", "").trim();
  const decoded = jwt.decode(token,{complete: true})
  console.log(decoded.header);
  console.log(decoded.payload)
  try{
    const shoppingCarts = await db.collection("shopping").findOne({email});
    res.send(shoppingCarts.cart);
  } catch(e){
    res.sendStatus(500)
  }
}
export default shoppingCartController;
