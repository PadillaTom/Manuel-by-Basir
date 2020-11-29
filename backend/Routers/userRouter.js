import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// backend:
import User from '../Models/userModels.js';
import data from '../data.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // Si queremos Borrar la DATA TEMPORAL almacenada para Users (no el user itself):
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;
