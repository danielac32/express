import { prisma } from "../../db/db-connection";
import { Direction } from "../interfaces/direction.interface";


export class DirectionService {
    public createDirection = async(data: Direction) => {
        try {
            const newDirection = await prisma.direction.create({
                data: {
                    address: data.address
                }
            });
            return newDirection;
        } catch (error) {
            throw error;
        }
    };

    public getDirections = async() => {
        try {
            const Directions = await prisma.direction.findMany();
            return Directions;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    
    public getDirection = async(id: number) => {
        try {
            const Direction = await prisma.direction.findFirst({
              where: {
                //userId: userId,
                id:id
              },
            })
            return Direction;
        } catch (error) {
            console.log(error);       
            throw error;
        }
    }

    public UpdateDirection = async(id: number,newData:Direction) => {
        try {
            const DataDirection = await this.getDirection(id);
            if(!DataDirection) return null;
            const updatedDirection = await prisma.direction.update({

              where: {
                id: DataDirection.id
              },
              data: {address:newData.address},
            });
            return updatedDirection;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    public deleteDirection = async(id: number) => {
        try {
            const DataDirection = await this.getDirection(id);
            if(!DataDirection) return null;
    
            const deletedDirection = await prisma.direction.update({//delete
              where: {
                id: DataDirection.id
              },
              data: {address:"null"},
            });
            return deletedDirection;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};