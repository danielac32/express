import { Request, Response } from 'express';
import { ReservationServices } from '../services/reserve.service';



export class ReservationController {

    constructor (
        private ReservationServices: ReservationServices
    ) {}


	
};