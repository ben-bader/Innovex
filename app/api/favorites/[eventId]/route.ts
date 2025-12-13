import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserId } from "@/lib/auth";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ eventId: string }> }
) {
  const { eventId } = await params; // ✅ unwrap params

  const userId = await getCurrentUserId();
  if (!userId) {
    return NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 }
    );
  }

  const numericEventId = Number(eventId);
  if (isNaN(numericEventId)) {
    return NextResponse.json(
      { error: "Invalid eventId" },
      { status: 400 }
    );
  }

  try {
    await prisma.favorite.delete({
      where: {
        userId_eventId: {
          userId,
          eventId: numericEventId,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { success: false, message: "Favorite not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Error deleting favorite" },
      { status: 500 }
    );
  }
}
