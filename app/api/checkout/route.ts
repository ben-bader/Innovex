import { prisma } from "@/lib/prisma";
import { getCurrentUserId } from "@/lib/auth";

export async function POST(req: Request) {
  try {

    const userId = await getCurrentUserId();

    const body = await req.json();


    const { eventId, price,cardNumber } = body;

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
        userId: userId, 
        eventId: eventIdInt,
        amount: priceInt,
        cardNumber: cardNumber,
        status: "paid", 
      },
    });

    return new Response(JSON.stringify({ success: true, payment }), { status: 200 });
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
