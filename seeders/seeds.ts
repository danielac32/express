import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.userEntity.create({
    data:
      {
        name: 'Usuario 1',
        email: 'usuario1@example.com',
        password: 'password1',
        direction: {
          create: {
            address: 'Dirección 1'
          }
        }
      }
  });

  await prisma.salon.create({
    data:
      { name: 'Salón 1' }
  });

  await prisma.reservation.create({
        data:
        {
            startDate: new Date(),
            endDate: new Date(),
            requerimiento: 'Requerimiento 1',
            cantidad_persona: 5,
            descripcion: 'Descripción 1',
            state: 'PENDING',
            userId: 1, // ID del usuario asociado
            salonId: 1 // ID del salón asociado
        },
    })

}

main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});