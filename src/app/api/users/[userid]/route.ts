import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/Mongoose/dbConnect";
import DummyUser from "@/app/utils/Mongoose/Models/DummyUsers";

export async function DELETE(req: Request, route: any) {
  await dbConnect();

  const userid = route.params.userid;
  await DummyUser.deleteOne({
    _id: userid,
  });
  return NextResponse.json({ success: true }, { status: 200 });
}

export async function GET(req: Request, route: any) {
  const userId = route.params.userid;
  let user = await DummyUser.findOne({ _id: userId });
  return NextResponse.json({ success: true, user }, { status: 200 });
}

export async function PUT(req: Request, route: any) {
  const userId = route.params.userid;
  const reqBody = await req.json();

  let user = await DummyUser.updateOne(
    { _id: userId },
    {
      password: reqBody.password,
    }
  );
  return NextResponse.json({ success: true, user }, { status: 200 });
}
