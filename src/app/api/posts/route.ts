import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/Mongoose/dbConnect";
import Post from "@/app/utils/Mongoose/Models/Posts";

export async function POST(req: Request) {
  await dbConnect();

  const newPost = await req.json();
  const post = new Post(newPost);
  await post.save();

  return NextResponse.json(
    { success: true, message: "new post created" },
    { status: 200 }
  );
}

export async function GET(req: Request) {
  await dbConnect();
  const posts = await Post.find();
  return NextResponse.json({ success: true, posts }, { status: 200 });
}
