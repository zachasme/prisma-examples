import { PrismaClient } from '@example/prisma'

const prisma = new PrismaClient()

export async function createUser() {
  await prisma.user.upsert({
    where: {
      email: 'foo@bar.com',
    },
    create: {
      email: 'foo@bar.com',
    },
    update: {},
  })
}

export async function getUsers() {
  return await prisma.user.findMany()
}

export default prisma
