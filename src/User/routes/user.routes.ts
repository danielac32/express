import { Router } from 'express';
import { userController } from '../dependencies';
import { createUserMiddleware } from '../middlewares/create-user.middleware';


const router = Router();

// CRUD USERS
router.post('/users',[
    createUserMiddleware
],userController.storeUser);
//router.post('/users',userController.sotreUser);
router.get('/users', userController.allUsers);
router.get('/users/:email', userController.userByEmail);
router.patch('/users/:email', userController.UpdateUserByEmail);
router.delete('/users/:email', userController.deleteUserByEmail);
//LOGIN
router.post('/auth/login', userController.login);

export default router;