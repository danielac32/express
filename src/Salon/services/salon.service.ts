import { ReservationServices } from "../../Reservar/services/reservation.service";
import { prisma } from "../../db/db-connection";
import { Salon } from "../interfaces/salon.interface";


export class SalonService {
    constructor(
        private reservationServices: ReservationServices
    ) {}

    public createSalon = async(data: Salon) => {
        try {
            const newSalon = await prisma.salon.create({
                data: {
                    name: data.name
                }
            });
            return newSalon;
        } catch (error) {
            throw error;
        }
    };

    public getSalones = async() => {
        try {
            const Salones = await prisma.salon.findMany();
            return Salones;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    
    public getSalon = async(id: number) => {
        try {
            const Salon = await prisma.salon.findFirst({
              where: {
                //userId: userId,
                id:id
              },
            })
            return Salon;
        } catch (error) {
            console.log(error);       
            throw error;
        }
    }

    public updateSalon = async(id: number,newData:Salon) => {
        try {
            const dataSalon = await this.getSalon(id);
            if(!dataSalon) return null;
            const updatedSalon = await prisma.salon.update({

              where: {
                id: dataSalon.id
              },
              data: {name:newData.name},
            });
            return updatedSalon;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public deleteSalon = async(id: number) => {
        try {
            const dataSalon = await this.getSalon(id);
            if(!dataSalon) return null;
    
            const deletedSalon = await prisma.salon.update({//delete
              where: {
                id: dataSalon.id
              },
              data: {name:"null"},
            });
            return deletedSalon;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public getReservationsBySalon = async(id: number) => {
        try {
            const salon = await this.getSalon(id);
            if(!salon) return null;

            const reservations = await this.reservationServices.reservationsBySalon(salon.id);
            return reservations;
        } catch (error) {
            throw error;
        }
    }
};