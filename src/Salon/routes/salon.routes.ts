import { Router } from 'express';
import { salonController } from '../dependencies';

const router = Router();

router.post('/', salonController.create);
router.get('/', salonController.read);
router.get('/:id', salonController.readById);
router.patch('/:id', salonController.update);
router.delete('/:id', salonController.delete);

// Reservations
router.get('/:id/reservations', salonController.getReservationsBySalon);

export default router;