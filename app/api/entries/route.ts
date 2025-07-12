
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const entries = await prisma.entry.findMany();
  return NextResponse.json(entries);
}

export async function PATCH(req: Request) {
  const data = await req.json();
  const { id, title, content } = data;

  const updated = await prisma.entry.update({
    where: { id },
    data: { title, content },
  });

  return NextResponse.json(updated);
}
