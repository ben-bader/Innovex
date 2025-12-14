import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getCurrentUserId } from "@/lib/auth";

export async function POST(req: Request) {
  try {

    const userId = await getCurrentUserId();

    const body = await req.json();
    console.log("Request body:", body);

    const { eventId, price } = body;

    if (eventId == null || price == null) {
      return new Response("Bad Request: missing eventId or price", { status: 400 });
    }

    const eventIdInt = Number(eventId);
    const priceInt = Number(price);

    if (isNaN(eventIdInt) || isNaN(priceInt) || priceInt <= 0) {
      return new Response("Bad Request: invalid eventId or price", { status: 400 });
    }

  
    const event = await prisma.event.findUnique({ where: { id: eventIdInt } });
    if (!event) {
      return new Response("Event not found", { status: 404 });
    }

    const payment = await prisma.payment.create({
      data: {
        userId: userId, // must exist in session callbacks
        eventId: eventIdInt,
        amount: priceInt,
        status: "paid", // fake/demo payment
      },
    });

    console.log("Payment created:", payment);


    return new Response(JSON.stringify({ success: true, payment }), { status: 200 });
  } catch (err) {
    console.error("Checkout error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
