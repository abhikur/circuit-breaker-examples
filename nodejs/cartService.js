const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000

app.get('/cart', async (req, res) => {
  const userId = parseInt(req.query.userId);
  const cart = carts.find(c => c.userId === userId);

  if (cart) {
    try {
      const response = await axios.post('http://localhost:3001/products', cart.products);
      const detailedCart = {
        ...cart,
        products: response.data
      };
      res.json(detailedCart);
    } catch (error) {
      res.status(500).send('Error fetching product details');
    }
  } else {
    res.status(404).send('Cart not found');
  }
});


const carts = [
  {
    userId: 123,
    products: [1, 2, 3],
    totalPrice: 100
  },
  {
    userId: 345,
    products: [6, 7, 8],
    totalPrice: 200
  }
];

app.listen(port, () => {
  console.log(`Cart service listening at http://localhost:${port}`);
});
