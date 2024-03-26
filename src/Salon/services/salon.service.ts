import { prisma } from "../../db/db-connection";
import { Salon } from "../interfaces/salon.interface";


export class SalonService {
    public createSalon = async(data: Salon) => {
        try {
            const newSalon = await prisma.salon.create({
                data: {
                    name: data.name
                }
            });
            return newSalon;
        } catch (error) {
            throw error;
        }
    };

    public getSalones = async() => {
        try {
            const Salones = await prisma.salon.findMany();
            return Salones;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    
    public getSalon = async(id: number) => {
        try {
            const Salon = await prisma.salon.findFirst({
              where: {
                //userId: userId,
                id:id
              },
            })
            return Salon;
        } catch (error) {
            console.log(error);       
            throw error;
        }
    }

    public UpdateSalon = async(id: number,newData:Salon) => {
        try {
            const DataSalon = await this.getSalon(id);
            if(!DataSalon) return null;
            const updatedSalon = await prisma.salon.update({

              where: {
                id: DataSalon.id
              },
              data: {name:newData.name},
            });
            return updatedSalon;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    public deleteSalon = async(id: number) => {
        try {
            const DataSalon = await this.getSalon(id);
            if(!DataSalon) return null;
    
            const deletedSalon = await prisma.salon.update({//delete
              where: {
                id: DataSalon.id
              },
              data: {name:"null"},
            });
            return deletedSalon;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};