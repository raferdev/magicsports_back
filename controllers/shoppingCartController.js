function shoppingCartController(req, res) {
  const shopping = [
    {
      name: "Bola",
      price: "60.99",
      description: "para chutar",
      image: "https://decathlonpro.vteximg.com.br/arquivos/ids/2688903-500-500/bola-de-futebol-sunny-3001.jpg?v=637474421407400000%3A%2F%2Fwww.decathlon.com.br%2Fbola-de-futebol-sunny-300-copy-2125582768-%2Fp&psig=AOvVaw0_qs1yZwdYeAVRkruGbm4s&ust=1652667133651000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOCL7v-24PcCFQAAAAAdAAAAABAD",
      stock: "30",
      id: "4",
    },
    {
      name: "Raquete",
      price: "50.99",
      description: "para rebater",
      image: "https://cdnv2.moovin.com.br/casadotenista/imagens/produtos/original/raquete-de-tenis-infantil-us-open-23-wilson-6fe1cf8de57734087ad6f6c3d0d44786.jpg",
      stock: "20",
      id: "3",
    },
    {
      name: "Cesta",
      price: "130.20",
      description: "para jogar a bola dentro",
      image: "https://cf.shopee.com.br/file/5f3957dcc702f182f025d0c5a012fe8f",
      stock: "10",
      id: "2",
    },
    {
      name: "Bermuda",
      price: "30.50",
      description: "pra vestir",
      image: "https://cf.shopee.com.br/file/52fdb8f239fd58c7d1be93aa60ee0b5b",
      stock: "20",
      id: "1",
    },
    {
      name: "Camisa",
      price: "10.99",
      description: "pra vestir",
      image: "https://img.elo7.com.br/product/original/345D93F/camiseta-nike-nike.jpg",
      stock: "10",
      id: "5",
    },
  ];
  res.send(shopping)
}
export default shoppingCartController;
