
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserId } from "@/lib/auth";
import {Event} from "@/src/hooks/useEvents";

export async function GET() {
  const userId = await getCurrentUserId();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const favs = await prisma.favorite.findMany({
    where: { userId },
    include: { event: true },
  });

  return NextResponse.json({
    events: favs.map((f ) => f.event),
  });
}

export async function POST(req: Request) {
  const userId = await getCurrentUserId();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { eventId } = await req.json();
  if (!eventId) return NextResponse.json({ error: "eventId required" }, { status: 400 });

  try {
    await prisma.favorite.create({
      data: { userId, eventId: Number(eventId) },
    });
    return NextResponse.json({ success: true });
  } catch (e : any) {
    if (e.code === "P2002") {
      return NextResponse.json({ success: true, message: "Already favorited" });
    }
    return NextResponse.json({ error: "Error creating favorite" }, { status: 500 });
  }
}
