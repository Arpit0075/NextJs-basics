"use server";
import { dbConnect } from "../utils/Mongoose/dbConnect";
import Post from "@/app/utils/Mongoose/Models/Posts";
import { revalidatePath } from "next/cache";

export default async function submit(formData: FormData) {
  //console.log(formData);
  await dbConnect();
  let title = formData.get("title");
  let body = formData.get("body");

  let newPost = { title, body };
  const post = new Post(newPost);
  await post.save();
  revalidatePath("/posts"); // Update cached posts
}
