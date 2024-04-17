import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    requied: true,
    // unique:true
  },
  body: {
    type: String,
    requied: true,
  },
});

const Post = mongoose.models.posts || mongoose.model("posts", PostSchema);
export default Post;
