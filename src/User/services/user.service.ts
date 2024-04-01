//import { UserEntity } from '../entities/user.entity';
//import { ReservationEntity} from '../../Reservar/entities/reserve.entity';
import { User } from '../interfaces/user.interface';
import { generateJwt } from '../../shared/generate-jwt';
import { prisma } from "../../db/db-connection";
import { ReservationServices } from '../../Reservar/services/reservation.service';
import { encrypt, decrypt } from '../../shared/helpers/encypt';

export class UserServices {
    constructor(
        private reservationServices: ReservationServices
    ) {}

    public createUser = async(user: User) => {
        const hashPassword = encrypt(user.password);
        try {
            const newUser = await prisma.userEntity.create({
                data:{
                    name:  user.name,
                    email: user.email,
                    password: hashPassword,
                    direction: { connect: { id: user.directionId } }
                }
            });
            return newUser;
        } catch (error) {
            console.log(error);
            throw error
        }
    };

    public getUsers = async() => {
        try {
            const users = await prisma.userEntity.findMany();
            return users;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    public getUser = async(term: string) => {
        let user;
        // Verifica si el término es un correo electrónico
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(term)) {
            user = await prisma.userEntity.findFirst({
                where: {
                        email: term
                }
            });
        }

        if (!user) {
            const userId = parseInt(term);
            if (!isNaN(userId)) {
              user = await prisma.userEntity.findUnique({
                where: {
                  id: userId
                }
              });
            }
        }
        return user;
    }

    public updateUser = async(email: string,newData: User) => {
        try {
            const user = await this.getUser(email);
            if(!user) return null;
            const updatedUser = await prisma.userEntity.update({
              where: {
                id: user.id
              },
              data: newData,
            });
            return updatedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public deleteUser = async(email: string) => {
        try {
            const user = await this.getUser(email);
            console.log(user);
            if(!user) return null;
            const deletedUser = await prisma.userEntity.delete({
              where: {
                id: user.id,
              },
            });
            return deletedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public loginUser = async(email: string, password: string) => {
        try {
            const user = await this.getUser(email);
            if(!user) return null;

            if(decrypt(password, user.password)) {
                const token = await generateJwt(user.email);

                return {
                    user,
                    token
                }
            }

            return null;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public getReservationsByUser = async(term: string) => {
        console.log({ term })
        try {
            const user = await this.getUser(term);
            if(!user) return null
            
            const reservations = await this.reservationServices.reservationsByUser(user.id);
            return reservations;
        } catch (error) {
            throw error;
        }
    }
};


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