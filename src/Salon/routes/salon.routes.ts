import { Router } from 'express';
import { salonController } from '../dependencies';

const router = Router();

router.post('/', salonController.createSalon);

export default router;