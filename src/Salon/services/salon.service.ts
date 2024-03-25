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
}