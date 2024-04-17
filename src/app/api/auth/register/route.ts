import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/Mongoose/dbConnect";
import User from "@/app/utils/Mongoose/Models/Users";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const newUser = await req.json();
    // console.log(newUser);

    const { username, password } = newUser;
    let user = await User.findOne({ username: username });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let createdUser = new User({
      username,
      password: hashedPassword,
    });
    await createdUser.save();
    return NextResponse.json({ message: "New User created!" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
