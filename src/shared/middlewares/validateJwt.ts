import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const validateJwt = ( req: Request, res: Response, next: NextFunction ) => {
    
    const token = req.header('token');

    if(!token) return res.status(401).json({ msg: 'Unathorized' });

    try {
        const { email } = <JwtPayload>jwt.verify( token, process.env.JWT_KEY! );
        console.log({email})
    } catch (error) {
        res.status(401).json({ msg: 'Invalid token' });
    }

    next();
}