import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';

export class UserController {

    constructor (
        private userServices: UserServices
    ) {}

    public storeUser = async(req: Request, res: Response) => {
        /*const {
            name,
            email,
            password,
            directionId
        } = req.body;*/
        try {
            const body = req.body;
            const data = await this.userServices.createUser(body);
            /*const data = await this.userServices.createUser({
                name,
                email,
                password,
                directionId
            });*/    
            res.status(201).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Internal server error' });
        }
    };

    public allUsers = async(req: Request, res: Response) => {
        try {
            const data = await this.userServices.getUsers()
            res.json(data);
        } catch (error) {
            console.log(error)
            res.json({ msg: 'Internal server error' });
        }
    };

    public userByEmail = async(req: Request, res: Response) => {
        try {
            const { email } = req.params;
            const data = await this.userServices.getUser(email);
            res.status(200).json( data );
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    };
    public updateUserByEmail = async(req: Request, res: Response) => {
    try {
            const body = req.body;
            const { email } = req.params;
            const data = await this.userServices.updateUser(email,body);
            if(!data) return res.status(404).json({ msg: 'User not found' });
            res.status(200).json( data );
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    };

    public deleteUserByEmail = async(req: Request, res: Response) => {
        try {
            const data = await this.userServices.deleteUser(req.params.email);
            if(!data) return res.status(404).json({ msg: 'User not found' });
            res.status(200).json( data );
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    };

    public reservationsByUser = async(req: Request, res: Response) => {
        try {
            const { term } = req.query;
            const reservations = await this.userServices.getReservationsByUser(term as string);
            res.status(200).json({ reservations });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    public login = async(req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
    
            const resp = await this.userServices.loginUser(email, password);
            if(!resp) return res.status(404).json({ msg: 'User not found' });
    
            res.status(200).json(resp);
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    };
};