import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/Mongoose/dbConnect";
import User from "@/app/utils/Mongoose/Models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const reqBody = await req.json();

    const { username, password } = reqBody;
    let user = await User.findOne({ username: username });
    if (!user) {
      return NextResponse.json(
        { message: "Password or username invalid" },
        { status: 400 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Password or username invalid" },
        { status: 400 }
      );
    }

    const tokenData = { username: user.username, _id: user._id };
    const token = await jwt.sign(
      tokenData,
      process.env.NEXT_PUBLIC_TOKEN_SECRET!!,
      { expiresIn: "1h" }
    );
    const response = NextResponse.json(
      { message: "user logged in!", success: true },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      //httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
