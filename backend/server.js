import express from 'express';

// Utils:
import data from './data.js';

const app = express();

// Products
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// Server
app.get('/', (req, res) => {
  res.send('Server is Ready');
});
const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
