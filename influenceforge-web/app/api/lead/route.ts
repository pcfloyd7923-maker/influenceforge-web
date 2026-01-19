import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body?.email || typeof body.email !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  // For now: log it (you can swap this to a DB later)
  console.log("NEW LEAD:", {
    email: body.email,
    plan: body.plan,
    source: body.source,
    ts: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
