import { NextFunction, Request, Response } from "express";

export const createUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { 
        name,
        email,
        password,
        directionId,/*direction,*/
    } = req.body;

    if(!name || !email || !password || !directionId) return res.status(400).json({
        message: 'Name, email, password and direction are required'
    });

    next();
};