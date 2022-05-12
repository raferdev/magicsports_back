import db from "../database/db.js";

async function getProducts (req, res) {
    const limit = parseInt(req.query.limit);
    const last = parseInt(req.query.last);

    try {
        const products = await db.collection("products").find({
            $and: [
                { id: { $gt: last } },
                { id: { $lte: (last + limit) } }
            ]
        }).toArray();

        res.send(products).status(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getProduct (req, res) {
    const ID = parseInt(req.params.id);

    try {
        const product = await db.collection("products").findOne({ id: ID });
        
        res.send(product).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { getProducts, getProduct };