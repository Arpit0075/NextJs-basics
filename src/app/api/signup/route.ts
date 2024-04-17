import { NextResponse } from "next/server";
import { inputSchema } from "@/app/utils/zodSchema";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const result = inputSchema.safeParse(body);
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}

export async function GET(req: Request) {
  console.log("received");
  return NextResponse.json({ success: true });
}
