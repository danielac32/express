import { Reserve, StatusReserve, StatusReserveTypes } from "../interfaces/reserve.interface";
import { prisma } from "../../db/db-connection";
import { FilterQueryReservation } from "../interfaces/filter-querys";

export class ReservationServices {
    public createReservation = async(reserveData: Reserve) => {
        const startDate=new Date(reserveData.startDate);
        const endDate=new Date(reserveData.endDate);

        startDate.setHours(startDate.getHours() - 4);
        //console.log(startDate); 

        endDate.setHours(endDate.getHours() - 4);
        //console.log(endDate); 

        try {
            const newReservation = await prisma.reservation.create({
                data:{
                    startDate: startDate,//new Date(reserveData.startDate),
                    endDate: endDate,//new Date(reserveData.endDate),
                    requerimiento:reserveData.requerimiento,
                    cantidad_persona:reserveData.cantidad_persona,
                    descripcion:reserveData.descripcion,
                    state: StatusReserve.PENDING,
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

    public getReservations = async(filter?: FilterQueryReservation) => {
        try {
            const reservations = await prisma.reservation.findMany({
                where: filter
            });
            return reservations;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    public getReservationWithUser = async(filter?: FilterQueryReservation) => {
        try {
            const reservations = await prisma.reservation.findMany({
                where: filter,
                include: {
                   user:{
                      include: {
                        direction:true
                      }
                   }
                }
            });
            return reservations;
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
            const updatedReservation = await prisma.reservation.update({
              where: {
                id: reservationId
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
            const dataReservation = await this.getReservation(reservationId);
            if(!dataReservation) return null;
    
           // const prisma = new PrismaClient();
            const deletedReservation = await prisma.reservation.delete({
              where: {
                id: dataReservation.id,
              },
            });
            return deletedReservation;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    public reservationsByUserAndStatus = async(userId: number,status: StatusReserveTypes) => {
        try {
            const reservations = await prisma.reservation.findMany({
                /*where: {
                    userId
                }*/
                where: {userId,state: status},
                include: {
                   user:{
                      include: {
                        direction:true
                      }
                   }
                }

            })
            return reservations;
        } catch (error) {
            throw error;
        }
    }

    public reservationsByUser = async(userId: number) => {
        try {
            const reservations = await prisma.reservation.findMany({
                /*where: {
                    userId
                }*/
                where: {userId},
                include: {
                   user:{
                      include: {
                        direction:true
                      }
                   }
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

    public changeReservationStatus = async(id: number, status: StatusReserveTypes) => {
        console.log({ status })
        try {
            const reservation = await prisma.reservation.update({
                where: {
                    id
                },
                data: {
                    state: status
                }
            });
            return reservation;
        } catch (error) {
            throw error;
        }
    }
};