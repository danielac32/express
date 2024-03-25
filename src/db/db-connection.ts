/*import { ConnectionOptions, getConnectionManager } from 'typeorm';
import { UserEntity } from '../User/entities/user.entity';
import { ReservationEntity } from '../Reservar/entities/reserve.entity';
import { Salon } from '../Reservar/entities/salon.entity';

export const AppDataSource = getConnectionManager().create({
    type: 'sqlite',
    database: process.env.DB_STORAGE,
    synchronize: true,
    logging: true,
    entities: [UserEntity,ReservationEntity,Salon],
    subscribers: [],
    migrations: [],
} as ConnectionOptions);*/