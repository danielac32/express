import { Router } from 'express';
import { directionController } from '../dependencies';

const router = Router();

router.post('/', directionController.create);
router.get('/', directionController.read);
router.get('/:id', directionController.readById);
router.patch('/:id', directionController.update);
router.delete('/:id', directionController.delete);

export default router;