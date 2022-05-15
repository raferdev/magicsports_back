import db from "../database/db.js";

async function addProd (req, res) {
    try {
        // for (let i = 1; i <= 50; i++) {
        //     const newProd = { 
        //         name: "bola de basquete spalding", 
        //         price: 149.99, 
        //         description: "bola de basquete spalding oficial, usada nos jogos da NBA", 
        //         image: "https://m.media-amazon.com/images/I/91j3VymnXSL._AC_SL1500_.jpg", 
        //         stock: 10, 
        //         id: i 
        //     };
        //     await db.collection("products").insertOne(newProd);
        //     console.log("foi")
        //     continue;
        // }

        const token = req.headers.authorization;
        console.log(token)
    } catch (error) {
        console.log(error)
    }
}

export default addProd;