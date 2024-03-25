import { Request, Response } from 'express';
import { ReservationServices } from '../services/reservation.service';



export class ReservationController {

    constructor (
        private reservationServices: ReservationServices
    ) {}

    public createReservation = async(req: Request, res: Response) => {
        const {
            startDate,
            endDate,
            requerimiento,
            cantidad_persona,
            descripcion,
            state,
            userId,
            salonId,
        } = req.body;
        try {
            const newReservation = await this.reservationServices.createReservation({
                startDate: new Date(),
                endDate: new Date(),
                requerimiento,
                cantidad_persona,
                descripcion,
                state,
                userId,
                salonId,  
            });

            res.status(201).json({
                message: 'Reservation created',
                reservation: newReservation
            });
        } catch (error) {
            console.log('ERROR CREATE RESERVATION -> ', error);
            res.status(500).json({ error: 'Talk to administrator' });
        }
    };
};