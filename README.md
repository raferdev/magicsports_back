<p align="center">
 <img height=200px src="./readme.png" alt="Project logo">
</p>

<h3 align="center">MAGICSports</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-closed-red.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/raferdev/MAGICSports-back.svg)](https://github.com//raferdev/MAGICSports-back/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/raferdev/MAGICSports-back/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
This is a backend part of FullStack project. The frontend you can see <a href="https://github.com/raferdev/MAGICSports-front">here</a>. This project was built using NodeJS, and simulate one e-commerce. User can see all products without account, and can register youself if want to save your list on wish list. 
</p>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

---

## 🧐 About <a name = "about"></a>

This project was built on one week and encrease my consepts about javascript enviroment, using ReactJS, and NodeJS to create one web app completly. This backend simulate one e-commerce API. User can see all products without account, and can register youself if want to save your list on cart list.<a href="https://github.com/raferdev/MAGICSports-front">(frontend)</a>.

---

## 🏁 Getting Started <a name = "getting_started"></a>

You can clone the project and start on your local host like below.

### Prerequisites

You need install **_GIT_** if you don't already have, to clone project,.

<a href="https://git-scm.com/downloads">Click here</a> or Acess:

```
https://git-scm.com/downloads
```

You need install **_Docker_** on your machine if you don't already have.

<a href="https://docs.docker.com/get-docker">Click here</a> or Acess:

```
https://docs.docker.com/get-docker/
```

And use the step-by-step doc to download and install on your specific system.

### Installing

1 - Clone on your local system

```
git clone https://github.com/raferdev/MAGICSports-back
```

2 - Go to project path

```
cd MAGICSports-back
```

3 - Create env file

You can rename the ".env.exemple" file to ".env", just removing ".exemple" and save, or follow this steps to create new one:

- Open a text editor or other editor do you prefeer, create this variables like below and save file with name '.env'.

```
MONGO_URI=mongodb://mongodb:27017/
DATA_BASE=magicsports
PORT=5000
JWT_SECRET=mysecret
```

You can change the values of variables if you want or need.

### Start

Use on terminal:

```
npm run start
```

_The attached console will show "Hello i'm running on port = (PORT)" and after some mongodb logs._

---

## 🎈 Usage <a name="usage"></a>

Now you will need one tool to make requests and interact whith your API. Some famous API Clients are <a href="https://insomnia.rest/download">Insomnia</a>, <a href="https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client">Thunder CLient</a> to VSCode users, <a href="https://www.postman.com/">Postman</a> and many others, like browsers plugins. If you dont use to complex jobs any of these will help you.

- **GUIDE** :

  **HTTP METHOD** - _/route_ - Little description of it behaviour.

  ```
    Received or sended object schema.
    Ex: {
    "text":"Lorem ipsum..."
    }
  ```

  _Final thoughts about API behaviour_

  ***

  Exemple:

  **GET** - _/health_ - API return status 200 with object below.

  ```
  {
    "message":"I'm Alive!"
  }
  ```

  Simple way to verify if API is up. _Maybe is not implemented on this project_

  ***

  **Usage** - In this case you will make a GET request on http://localhost:5000/health. And will receive the JSON object "message: I'm Alive!" on the console, terminal or display, depending on the case.

  ***

**LET'S GO** - API description.

**POST** - _/sign-in_ - Send user credentials to API, email must be valid format and password need be a string with 3 - 20 length characters.

```
  {
  "email":"",
  "password":""
  }
```

If are valid and registered credentials user can login and receive one token like below.

_response:_

```
{
  "token": "afbf3c09-bc88-424d-b3e2-ab042733a244"
}
```

**POST** - _/sign-up_ - Send user credentials to API to register on MongoDB. Email must be valid format, password and name need be a string with 3 - 20 length characters.

```
  {
  "name":""
  "email":"",
  "password":""
  }
```

**GET** - _/products?limit=(**number**)&last=(**number**)_ - Retun one array with all products.

body:

```
{}
```

_response:_

```
{
  "page": [
    {
      "id": 1,
      "name": "Bola",
      "price": "19,99",
      "description": "pra jogar um fut",
      "image": "https://static.netshoes.com.br/produtos/mini-bola-futebol-hyper-tamanho-2-vermelha/16/AHE-0073-016/AHE-0073-016_zoom1.jpg",
      "stock": "20"
    },
    {
      "id": 2,
      "name": "Camisa 10 barça",
      "price": "209,99",
      "description": "camisa bonita",
      "image": "https://static.netshoes.com.br/produtos/camisa-barcelona-home-1718-n-10-messi-torcedor-nike-masculina/66/D12-8701-066/D12-8701-066_zoom1.jpg?ts=1616689416&ims=544x",
      "stock": "13"
    },
    {
      "id": 3,
      "name": "Bermuda",
      "price": "59,99",
      "description": "de elastico bem de boa",
      "image": "https://img.irroba.com.br/fit-in/900x700/filters:format(webp):fill(fff):quality(95)/lidersho/catalog/shorts-novos/front-1s22.jpg",
      "stock": "41"
    },...
  ],
  "pages": [
    1,
    2,
    3
  ]
}
```

This route return only the number of products described on _limit_ and _last_ params, and its change depending on the page.
Ex: **_/products?limit=20&last=0_**

**GET** - _/products/:id_ - API return the product by id with the details.

body:

```
{
}
```

_response:_

```
{
  "_id": "637e185caa83fb2495b3a139",
  "id": 20,
  "name": "Kit Escalada",
  "price": "349,99",
  "description": "é pra se pendurar por bastante tempo. AVISO: Faça aulas com profissionais.",
  "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTev-KbLiLUcwp1UfegmeL4kwXF3j6BuddaijMzK05UaXmTSmsdqMfdu9w8QvJTjaS9HA3VjTD0&usqp=CAc",
  "stock": "3"
}
```

**GET** - _/user_ - Return user name.

```
{
  "authorization":"Bearer TOKEN"
}
```

body:

```
{
}
```

_response:_

```
"YOUR NAME"
```

**GET** - _/shopping-cart_ - Return the user wish list.

header:

```
{
  "authorization":"Bearer TOKEN"
}
```

body:

```
{
}
```

_response:_

```
[
  {
    "_id": "637e185caa83fb2495b3a128",
    "id": 3,
    "name": "Bermuda",
    "price": "59,99",
    "description": "de elastico bem de boa",
    "image": "https://img.irroba.com.br/fit-in/900x700/filters:format(webp):fill(fff):quality(95)/lidersho/catalog/shorts-novos/front-1s22.jpg",
    "stock": "41"
  },
  {
    "_id": "637e185caa83fb2495b3a130",
    "id": 11,
    "name": "Tẽnis Corrida Nike",
    "price": "40,99",
    "description": "pra dar aquela corrida maneira, serve bem, ja vem com o par do pé esquerdo também",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBMHYChArnuasqvAZuKQ8s8ZvrWkr0SS9aYE5lzahqk93XrEL2UagL-P1OFC-F3aaLKUv_KkDeaRP3pG4JcvvzBeBCK710CrW3z_681yafVH-OCy8WZ0R1&usqp=CAE",
    "stock": "80"
  }, ...
]
```

**POST** - _/shopping-cart?id=(**number**)_ - User can add products on your wish list.

header:

```
{
  "authorization":"Bearer TOKEN"
}
```

body:

```
{
}
```

_response:_

```
STATUS 200 (OK)
```

**POST** - _/shopping-cart?id=(**number**)_ - User can delete products on your wish list.

header:

```
{
  "authorization":"Bearer TOKEN"
}
```

body:

```
{
}
```

_response:_

```
STATUS 200 (OK)
```

**POST** - _/checkout_ - User can finish your buy.

header:

```
{
  "authorization":"Bearer TOKEN"
}
```

body:

```
{
  "payment":{
    "CCNumber":"",
    "CCOwner":"",
    "CPF":"",
    "telephone":"",
    "CCSecurityCode":"",
    "CCExpirationDate":""
  },
  "billingAdress":{
    "street":"",
    "number":"",
    "CEP":""
  }
}
```

_response:_

```
STATUS 200 (OK)
```

---

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJS](https://nodejs.org/en/docs/) - Backend Language
- [Express](https://expressjs.com/pt-br/) - Node Framework
- [Docker](https://www.docker.com/) - Container Technology

---

## ✍️ Authors <a name = "authors"></a>

- [@raferdev](https://github.com/raferdev)
- [@NikolasRR](https://github.com/NikolasRR)
