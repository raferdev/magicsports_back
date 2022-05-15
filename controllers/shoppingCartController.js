import db from "../database/db.js";

async function shoppingCartController(req, res) {
  const email = req.email;
  try{
    const shoppingCarts = await db.collection("shopping").findOne({email});
    res.send(shoppingCarts.cart);
  } catch(e){
    res.sendStatus(500)
  }
}
export default shoppingCartController;
