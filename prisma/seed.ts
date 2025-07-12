
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  await prisma.user.createMany({
    data: [
      { email: 'demo1@example.com', name: 'Demo One', password },
      { email: 'demo2@example.com', name: 'Demo Two', password },
      { email: 'demo3@example.com', name: 'Demo Three', password }
    ],
    skipDuplicates: true
  });

  console.log('✅ Dummy users seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
