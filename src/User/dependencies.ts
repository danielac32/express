import { UserController } from "./controllers/user.controller";
import { UserServices } from "./services/user.service";

// USERS
export const userServices = new UserServices();
export const userController = new UserController(userServices);