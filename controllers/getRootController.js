async function getRootController(req,res) {
    const authorization = req.headers.authorization;
    const filteredToken = authorization.replace("Bearer", "").trim();
  try {
    const dados = jwt.verify(filteredToken, process.env.JWT_SECRET);
    const nome = dados.name;
    res.send(nome).status(201);
} catch(e){
    res.sendStatus(500)
}
}
export default getRootController;