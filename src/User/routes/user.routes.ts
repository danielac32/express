import { Router } from 'express';
import { userController } from '../dependencies';
import { createUserMiddleware } from '../middlewares/create-user.middleware';
import { loginUserMiddleware } from '../middlewares/login-user.middleware';
import { updateUserMiddleware } from '../middlewares/update-user.middleware';
const router = Router();

// CRUD USERS
router.post('/users',[
    createUserMiddleware
],userController.storeUser);
//router.post('/users',userController.sotreUser);
router.get('/users', userController.allUsers);
router.get('/users/:email', userController.userByEmail);
router.patch('/users/:email', [updateUserMiddleware],userController.updateUserByEmail);
router.delete('/users/:email', userController.deleteUserByEmail);

// RESERVATIONS USERS
router.get('/users/:term/reservations', userController.reservationsByUser);
//LOGIN
router.post('/auth/login', [loginUserMiddleware],userController.login);

export default router;