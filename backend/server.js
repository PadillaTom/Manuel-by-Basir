import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Utils:
// import data from './data.js'; //--> Used before MONGO DB
import userRouter from './Routers/userRouter.js';
import productRouter from './Routers/productRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/manuel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Individual Product: HARD CODED BEFORE MONGO
// app.get('/api/products/:id', (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x) => x._id === productId);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });
// Products: HARD CODED BEFORE MONGO
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// Mongo ---------->
app.use('/api/users', userRouter);

app.use('/api/products', productRouter);
// Server
app.get('/', (req, res) => {
  res.send('Server is Ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
