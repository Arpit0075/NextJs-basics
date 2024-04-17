import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/Mongoose/dbConnect";
import DummyUser from "@/app/utils/Mongoose/Models/DummyUsers";

export async function GET(req: Request) {
  await dbConnect();
  const users = await DummyUser.find();
  return NextResponse.json({ success: true, users }, { status: 200 });
}

export async function POST(req: Request) {
  await dbConnect();

  const newPost = await req.json();
  const user = new DummyUser(newPost);
  await user.save();

  return NextResponse.json(
    { success: true, message: "new user created" },
    { status: 200 }
  );
}
