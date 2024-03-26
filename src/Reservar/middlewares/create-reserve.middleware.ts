import { NextFunction, Request, Response } from "express";

export const createReserveMiddleware = (req: Request, res: Response, next: NextFunction) => {
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

    if(
        !startDate ||
        !endDate ||
        !requerimiento ||
        !cantidad_persona ||
        !descripcion ||
        !state ||
        !userId ||
        !salonId
    ) return res.status(400).json({
        message: 'startDate, endDate, requerimiento .... are required'
    });

    next();
};