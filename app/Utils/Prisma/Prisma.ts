import { PrismaClient } from "../../../prisma/generated/client/edge"


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'file:./dev.db',
    },
  },
});

export default prisma;

 