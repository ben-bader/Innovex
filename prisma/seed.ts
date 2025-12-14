import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  const filePath = path.join(process.cwd(), "prisma", "events.json");
  const eventsJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (const event of eventsJSON.events) {
    await prisma.event.create({
      data: {
        id: event.id,
        name: event.name,
        url: event.url,
        date: new Date(event.date),
        time: event.time,
        venue: event.venue,
        city: event.city,
        country: event.country,
        category: event.category,
        image: event.image,
        description: event.description,
        price :event.price,
      },
    });
  }
}

main()
  .then(() => console.log("Seeded successfully"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
