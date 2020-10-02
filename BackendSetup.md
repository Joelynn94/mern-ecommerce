# Starting the project

1. Create a **backend** folder in the root directory
1. Create **package**.json file in the root directory

## Backend folder

1. RUN npm init -y
1. RUN npm i express
1. Create a **server.js** file
1. Create a **data** folder
1. Copy the **products.js** file from the **frontend** folder

## Basic server setup

Modules - the **require** syntax is commonJS (traditionally what Node.js used). Recent update to Node, you can use the ES modules

1. Create a script to run with node in the **package.json** file

```javascript
  "scripts": {
    "start": "node backend/server"
  },
```

### Server file

```javascript
const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server is running on port 5000'))
```

## Efficient setup

1. RUN npm i -D nodemon concurrently
1. Add a couple new scripts to **package.json** file

```javascript
  "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    // this will enable us to run the server and client at the same time
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

1. RUN npm run dev to run both servers
