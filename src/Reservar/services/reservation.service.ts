import { PrismaClient }  from "@prisma/client";
import { User } from '../interfaces/reserve.interface';
//import { generateJwt } from '../../shared/generate-jwt';

export class ReservationServices {
    public createReservation = async(ReserveData: Reserve) => {
        try {
            const prisma = new PrismaClient();
            const newReservation = await prisma.Reservation.create({
                data:{
                      startDate: ReserveData.startDate,
                      endDate:ReserveData.endDate,
                      requerimiento:ReserveData.requerimiento,
                      cantidad_persona:ReserveData.cantidad_persona,
                      descripcion:ReserveData.descripcion,
                      state:ReserveData.state,
                      userId: { connect: { id: ReserveData.userId } },
                      salonId: { connect: { id: ReserveData.salonId } }
                }
            });
            return newReservation;

        } catch (error) {
            console.log(error);
            throw error
        }
    };

    public getReservations = async() => {
        try {
            const prisma = new PrismaClient();
            const Reservations = await prisma.Reservation.findMany();
            return Reservations;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    public getReservation = async(userId: number) => {
        try {
            const prisma = new PrismaClient();
            const Reservation = await prisma.Reservation.findFirst({
              where: {
                userId: userId,
              },
            })
            return Reservation;
        } catch (error) {
            console.log(error);       
            throw error;
        }
    }

    public UpdateReservation = async(userId: number,newData: Reserve) => {
        try {
            const DataReservation = await this.getUser(userId);
            if(!DataReservation) return null;
            const prisma = new PrismaClient();
            const updatedReservation = await prisma.Reservation.update({
              where: {
                id: DataReservation.id
              },
              data: newData,
            });
            return updatedReservation;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public deleteReservation = async(userId: number) => {
        try {
            const DataReservation = await this.getUser(userId);
            if(!DataReservation) return null;
    
            const prisma = new PrismaClient();
            const deletedReservation = await prisma.Reservation.delete({
              where: {
                id: DataReservation.id,
              },
            });
            return deletedReservation;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};