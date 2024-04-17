import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    requied: true,
    // unique:true
  },
  password: {
    type: String,
    requied: [true, "please provide a password"],
  },
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User;
