import 'reflect-metadata';
import 'dotenv/config';
import app from './server';
//import { AppDataSource } from './db/db-connection';
import { PrismaClient }  from "@prisma/client";

async function main() {
    try {
        // Conect DB
        //await AppDataSource.initialize();
        //console.log('DB ONLINE');
        // Start server
        const prisma = new PrismaClient();
        console.log(prisma);
        
        /*const newUser = await prisma.userEntity.create({
            data:{
                  name: "daniel",
                  email:"daniel@daniel.com",
                  password:"ac32mqn42",
                  direction:"dgtic"
            }
        });
        console.log(newUser);*/
 
        /*await prisma.direction.create({
            data: {
                address:"dgtic"
            }
        });*/
        
        /*await prisma.salon.create({
            data: {
                name:"simon bolivar"
            }
        });*/


        /*const newReservation = await prisma.reservation.create({
          data: {
            startDate: new Date(), // Asigna la fecha de inicio actual
            endDate: new Date(), // Asigna la fecha de finalización actual
            requerimiento: 'Algo', // Ejemplo de requerimiento
            cantidad_persona: 2, // Ejemplo de cantidad de personas
            descripcion: 'Descripción de la reserva', // Ejemplo de descripción
            state: 'Pendiente', // Estado inicial de la reserva
            userId: 1, // ID del usuario asociado
            salonId: 1 // ID del salón asociado
          }
        });*/

       // console.log('Nueva reservación creada:', newReservation);
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port -> ${ process.env.PORT }`)
        });
    } catch (error) {
        console.log(error);
    }
};

main();
