import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message,userId } = await req.json();
    if (!userId) {
      return NextResponse.json(
        { error: "User must be logged in to send a message." },
        { status: 400 }
      );
    }
    const Message = await prisma.message.create({
      data: { name, email, phone, message, userId },
    });

    return NextResponse.json(
      {
        success: true,
        message: {
          id: Message.id,
          name: Message.name,
          email: Message.email,
          phone: Message.phone,
          message: Message.message,
          userId: Message.userId
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { error: "Server error", details: String(err) },
      { status: 500 }
    );
  }
}
