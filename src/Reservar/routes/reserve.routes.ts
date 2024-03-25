import { Router } from "express";
import { reservationController } from "../dependencies";

const router = Router();

router.post('/', reservationController.createReservation);
router.get('/', reservationController.findAll);

export default router;