import db from "../database/db.js";

async function checkout (req, res) {
    const user = res.locals.user;

     try {
        await db.collection("users").updateOne(
            { 
                email: user.email 
            }, 
            { 
                $push: { purchasehistory: req.body } 
            }
        );

        res.sendStatus(200);
     } catch (error) {
        res.sendStatus(500);
     }
}

export default checkout;