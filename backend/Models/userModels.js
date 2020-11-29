import mongoose from 'mongoose';

// Schema takes two objects:
// 1) Schema for the database (user, pass, email, etc // productname, id, etc)
// 2) timestamps
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
// Asociamos el USER con el Schema previamente creado, exportamos User.
const User = mongoose.model('User', userSchema);
export default User;
