const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  { id: 6, name: 'Product 6', price: 60 },
  { id: 7, name: 'Product 7', price: 70 },
  { id: 8, name: 'Product 8', price: 80 }
];

app.post('/products', (req, res) => {
  const productIds = req.body;
  const productDetails = products.filter(product => productIds.includes(product.id));

  if (productDetails.length > 0) {
    res.json(productDetails);
  } else {
    res.status(404).send('Products not found');
  }
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
