import prisma from "./Prisma";

describe("Prisma Instance", () => {
  test("Prisma instance is created", () => {
    expect(prisma).toBeDefined();
    expect(prisma.$connect).toBeInstanceOf(Function);
    expect(prisma.$disconnect).toBeInstanceOf(Function);
  });
});
