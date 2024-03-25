//import { UserEntity } from '../entities/user.entity';
//import { ReservationEntity} from '../../Reservar/entities/reserve.entity';


import { PrismaClient }  from "@prisma/client";
import { User } from '../interfaces/user.interface';
import { generateJwt } from '../../shared/generate-jwt';



export class UserServices {


    public createUser = async(user: User) => {
        try {

            //console.log(user)
            const prisma = new PrismaClient();
            const newUser = await prisma.userEntity.create({
                data:{
                      name: user.name,
                      email:user.email,
                      password:user.password,
                      direction: { connect: { id: user.directionId } }
                }
            });
            return newUser;
        } catch (error) {
            console.log(error);
            throw error
        }
    };

    public getUsers = async() => {
        try {
            const prisma = new PrismaClient();
            const users = await prisma.userEntity.findMany();
            return users;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    public getUser = async(email: string) => {
        try {
            const prisma = new PrismaClient();
            const User = await prisma.userEntity.findFirst({
              where: {
                email: email,
              },
            })
            return User;
        } catch (error) {
            console.log(error);       
            throw error;
        }
    }

    public UpdateUser = async(email: string,newData: User) => {
        try {
            const user = await this.getUser(email);
            console.log(user);
            if(!user) return null;
            const prisma = new PrismaClient();
            const updatedUser = await prisma.userEntity.update({
              where: {
                id: user.id
              },
              data: newData,
            });
            return updatedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public deleteUser = async(email: string) => {
        try {
            const user = await this.getUser(email);
            console.log(user);
            if(!user) return null;
            const prisma = new PrismaClient();
            const deletedUser = await prisma.userEntity.delete({
              where: {
                id: user.id,
              },
            });
            return deletedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public loginUser = async(email: string, password: string) => {
        try {
            const user = await this.getUser(email);
            console.log(user);
            if(!user) return null;
    
            if( user.password === password ) {
                const token = await generateJwt(user.email);
    
                return {
                    user,
                    token
                }
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};