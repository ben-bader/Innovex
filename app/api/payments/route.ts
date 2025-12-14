import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserId } from "@/lib/auth";

export async function GET() {
  const userId = await getCurrentUserId();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const pays = await prisma.payment.findMany({
    where: { userId },
    include: { event: true },
  });

  return NextResponse.json({
    events: pays.map((p) => p.event),
  });
}
