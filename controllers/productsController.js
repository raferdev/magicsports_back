import db from "../database/db.js";

async function getProducts (req, res) {
    const limit = parseInt(req.query.limit);
    const last = parseInt(req.query.last);

    try {
        const overallStock = await db.collection("products").find().toArray();
        const condition = Math.ceil(overallStock.length / limit);
        let pages = [];
        for (let i = 1; i <= condition; i++) {
            pages.push(i);
        }

        const products = await db.collection("products").find({
            $and: [
                { id: { $gt: last } },
                { id: { $lte: (last + limit) } }
            ]
        }).toArray();

        products.forEach(product => delete product._id);

        res.send({page: products, pages: pages}).status(200);
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