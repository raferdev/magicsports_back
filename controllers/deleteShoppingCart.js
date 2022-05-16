import db from "../database/db.js";
import jwt from "jsonwebtoken";

async function deleteShoppingCart(req, res) {
  const authorization = req.headers.authorization;
  const filteredToken = authorization.replace("Bearer", "").trim();
  const id = req.query.id;
  console.log(id);
  console.log;
  try {
    const dados = jwt.verify(filteredToken, process.env.JWT_SECRET);
    const email = dados.email;
    console.log(email);
    const del = await db
      .collection("shopping")
      .update({ email }, { $pull: { id } });
    console.log(del);
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}
export default deleteShoppingCart;
