import { PrismaClient }  from "@prisma/client";
import { Reserve } from "../interfaces/reserve.interface";
import { prisma } from "../../db/db-connection";

export class ReservationServices {
    public createReservation = async(reserveData: Reserve) => {
        try {
            const newReservation = await prisma.reservation.create({
                data:{
                    startDate: reserveData.startDate,
                    endDate:reserveData.endDate,
                    requerimiento:reserveData.requerimiento,
                    cantidad_persona:reserveData.cantidad_persona,
                    descripcion:reserveData.descripcion,
                    state:reserveData.state,
                    userId: reserveData.userId,
                    salonId: reserveData.salonId
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
            const Reservations = await prisma.reservation.findMany();
            return Reservations;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    public getReservation = async(id: number) => {
        try {
            const Reservation = await prisma.reservation.findFirst({
              where: {
                //userId: userId,
                id:id
              },
            })
            return Reservation;
        } catch (error) {
            console.log(error);       
            throw error;
        }
    }

    public updateReservation = async(reservationId: number,newData: Reserve) => {
        try {
            const DataReservation = await this.getReservation(reservationId);
            if(!DataReservation) return null;
            //const prisma = new PrismaClient();
            const updatedReservation = await prisma.reservation.update({
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

    public deleteReservation = async(reservationId: number) => {
        try {
            const DataReservation = await this.getReservation(reservationId);
            if(!DataReservation) return null;
    
           // const prisma = new PrismaClient();
            const deletedReservation = await prisma.reservation.delete({
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

    public reservationsByUser = async(userId: number) => {
        try {
            const reservations = await prisma.reservation.findMany({
                where: {
                    userId
                }
            })
            return reservations;
        } catch (error) {
            throw error;
        }
    }

    public reservationsBySalon = async(salonId: number) => {
        try {
            const reservations = await prisma.reservation.findMany({
                where: {
                    salonId
                }
            })
            return reservations;
        } catch (error) {
            throw error;
        }
    }
};