import { Request, Response } from "express";
import { DirectionService } from "../services/direction.service";

export class DirectionController {
    constructor(
        private directionService: DirectionService
    ) {}

    public create = async(req: Request, res: Response) => {
        try {
            const newDirection = await this.directionService.createDirection({
                address: req.body.address
            })

            res.status(201).json({
                message: 'Direction created',
                salon: newDirection
            });
        } catch (error) {
            console.log(error);
            res.status(500)
        }
    };

    public read = async(req: Request, res: Response) => {
        try {
            const Directions = await this.directionService.getDirections();
            res.status(200).json({
                Directions
            });
        } catch (error) {
            res.status(500)
        }
    }
    public readById = async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const Direction = await this.directionService.getDirection(Number(id));
            console.log(Direction)
            res.status(200).json({
                Direction
            });
        } catch (error) {
            res.status(500)
        }
    }
    public update = async(req: Request, res: Response) => {
    try {
            const body = req.body;
            const { id } = req.params;
            const data = await this.directionService.UpdateDirection(Number(id),body);
            if(!data) return res.status(404).json({ msg: 'Direction not found' });
            res.status(200).json( data );
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    };

    public delete = async(req: Request, res: Response) => {
    try {
            const { id } = req.params;
            const data = await this.directionService.deleteDirection(Number(id));
            if(!data) return res.status(404).json({ msg: 'Direction not found' });
            res.status(200).json( data );
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    };
     
};