import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';
// backend:
import User from '../Models/userModels.js';
import data from '../data.js';

const userRouter = express.Router();

// Getting users from DB
userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // Si queremos Borrar la DATA TEMPORAL almacenada para Users (no el user itself):
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

// User Signin API:
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid Email or Password' });
  })
);

export default userRouter;
