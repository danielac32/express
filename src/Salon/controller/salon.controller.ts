import { Request, Response } from "express";
import { SalonService } from "../services/salon.service";

export class SalonController {
    constructor(
        private salonService: SalonService
    ) {}

    public createSalon = async(req: Request, res: Response) => {
        try {
            const newSalon = await this.salonService.createSalon({
                name: req.body.name
            })

            res.status(201).json({
                message: 'Salon created',
                salon: newSalon
            });
        } catch (error) {
            console.log(error);
            res.status(500)
        }
    };

    public findAll = async(req: Request, res: Response) => {
        try {
            const salons = await this.salonService.findAll();
            res.status(200).json({
                salons
            });
        } catch (error) {
            res.status(500);
        }
    }
};