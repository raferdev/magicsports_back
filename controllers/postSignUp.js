import db from "../database/db.js";
import bcrypt from "bcrypt";
async function postSignUp(req, res) {
  const { name, email, password } = req.body;
  const passHash = bcrypt.hashSync(password, 10);
  try {
    await db.collection("users").insertOne({
      name,
      email,
      password: passHash,
      purchasehistory: [],
    });
    await db.collection("shopping").insertOne({
        email,
        cart:[]
    });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}
export default postSignUp;