import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';

import { FilterQueryReservation } from '../../Reservar/interfaces/filter-querys';
import { StatusReserveTypes } from "../../Reservar/interfaces/reserve.interface";



export class UserController {
    constructor (
        private userServices: UserServices
    ) {}

    public storeUser = async(req: Request, res: Response) => {
        try {
            const body = req.body;
            const data = await this.userServices.createUser(body);  
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                return res.status(data.code).json(data.newUser);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    public allUsers = async(req: Request, res: Response) => {
        try {
            const data = await this.userServices.getUsers();
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                //console.log(data.users)
                return res.status(data.code).json(data);
            }

        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    public userByEmail = async(req: Request, res: Response) => {
        try {
            const { email } = req.params;
            const data = await this.userServices.getUser(email);
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                return res.status(data.code).json(data.user);
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };
    public updateUserByEmail = async(req: Request, res: Response) => {
    try {
            const body = req.body;
            const { email } = req.params;
            const data = await this.userServices.updateUser(email,body);
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                return res.status(data.code).json({
                    user:data.updatedUser,
                    status:data.code
                });
            }
            //if(!data) return res.status(404).json({ msg: 'User not found' });
            //res.status(200).json( data );
        } catch (error) {
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };
    public updateUserIsActive = async(req: Request, res: Response) => {
    try {
            const {isActive} = req.body;
            const { email } = req.params;

            const data = await this.userServices.updateActive(email,isActive);
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                return res.status(data.code).json({
                    user:data.updatedUser,
                    status:data.code
                });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };
    public updateUserRol = async(req: Request, res: Response) => {
    try {
            const {rol} = req.body;
            const { email } = req.params;

            const data = await this.userServices.updateRol(email,rol);
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                return res.status(data.code).json({
                    user:data.updatedUser,
                    status:data.code
                });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };
    public deleteUserByEmail = async(req: Request, res: Response) => {
        try {
            const data = await this.userServices.deleteUser(req.params.email);
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                return res.status(data.code).json(data.deletedUser);
            }
            //if(!data) return res.status(404).json({ msg: 'User not found' });
            //res.status(200).json( data );
        } catch (error) {
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    public reservationsByUser = async(req: Request, res: Response) => {
        const { term } = req.params;
        const { state } = req.params;
        //const filter: FilterQueryReservation = {};
        //filter.state = state as StatusReserveTypes;

        try {

            const reservations = await this.userServices.getReservationsByUser(term as string,state as string);
            if(reservations.error){
                return res.status(reservations.code).json(reservations.message);
            }else{
                return res.status(reservations.code).json({ reservations: reservations.reservations });
            }
            //res.status(200).json({ reservations });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    public login = async(req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
    
            const data = await this.userServices.loginUser(email, password);
            console.log(email, password,data.error);
            if(data.error){
                return res.status(data.code).json(data.message);
            }else{
                return res.status(data.code).json({
                    user:data.user,
                    token:data.token,
                    status:data.code
                });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };
};