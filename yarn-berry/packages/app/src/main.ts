import prisma, { createUser, getUsers } from '@example/pkg1'

async function start() {
  await createUser()
  const users = await getUsers()
  console.log(users)

  prisma.$disconnect()
}

start()
