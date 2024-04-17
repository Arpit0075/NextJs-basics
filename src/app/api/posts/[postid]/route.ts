import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/Mongoose/dbConnect";
import Post from "@/app/utils/Mongoose/Models/Posts";

export async function DELETE(req: Request, route: any) {
  await dbConnect();

  const postId = route.params.postid;
  await Post.deleteOne({
    _id: postId,
  });
  return NextResponse.json({ success: true }, { status: 200 });
}
