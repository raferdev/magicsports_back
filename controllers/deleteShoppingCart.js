import db from "../database/db.js";

async function deleteShoppingCart(req,res) {
    const id = req.query.id;
    try {
       await db.collection("shopping").update({email},{$pull:{id}})
        res.sendStatus(201);
    } catch(e) {
        res.sendStatus(500);
    }

}
export default deleteShoppingCart;