import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    // Delete all related records safely
    await prisma.payment.deleteMany({ where: { userId } });
    await prisma.favorite.deleteMany({ where: { userId } });
    // Add any other user-related tables here, e.g., enrollments, comments

    // Finally delete the user
    await prisma.user.delete({ where: { id: userId } });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Delete account error:", error);
    return NextResponse.json(
      { error: "Failed to delete account: " + error.message },
      { status: 500 }
    );
  }
}
