import { Router } from "express";
import { reservationController } from "../dependencies";
import { createReserveMiddleware } from '../middlewares/create-reserve.middleware';



const router = Router();

router.post('/', [createReserveMiddleware],reservationController.create);
router.get('/', reservationController.read);
router.get('/:id', reservationController.readById);
router.patch('/:id', reservationController.update);
router.delete('/:id', reservationController.delete);


export default router;