import mongoose from "mongoose";

const DummyUserSchema = new mongoose.Schema({
  username: {
    type: String,
    requied: true,
    unique: true,
  },
  password: {
    type: String,
    requied: [true, "please provide a password"],
  },
});

const DummyUser =
  mongoose.models.dummyusers || mongoose.model("dummyusers", DummyUserSchema);
export default DummyUser;
