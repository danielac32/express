import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /*await prisma.userEntity.create({
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
*/

    const valoresAdicionales = [
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 1', requerimiento: 'Requerimiento adicional 1' },
        { descripcion: 'Descripción adicional 2', requerimiento: 'Requerimiento adicional 2' },
        { descripcion: 'Descripción adicional 3', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 4', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 5', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 6', requerimiento: 'Requerimiento adicional 3' },
        { descripcion: 'Descripción adicional 7', requerimiento: 'Requerimiento adicional 3' },
    ];
    let count=0;


    for (const valor of valoresAdicionales) {
        await prisma.reservation.create({
            data: {
                startDate: new Date(),
                endDate: new Date(),
                requerimiento: valor.requerimiento,
                cantidad_persona: 5,
                descripcion: valor.descripcion,
                state: 'PENDING',
                userId: 3, // ID del usuario asociado
                salonId: 1 // ID del salón asociado
            }
        });
        count = count +1
    }

}

main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});