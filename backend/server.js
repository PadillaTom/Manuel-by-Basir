import express from 'express';

// Utils:
import data from './data.js';

const app = express();

// Products:
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// Individual Product:
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id == req.params.id);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

// Server
app.get('/', (req, res) => {
  res.send('Server is Ready');
});
const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
