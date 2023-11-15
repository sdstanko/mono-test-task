import Router from 'express';
import modelController from '../controllers/modelController.js';
const router = new Router();

router.post('/', modelController.create);
router.get('/', modelController.getAll);
router.get('/:id', modelController.findById);
router.delete('/:id', modelController.delete);
router.patch('/:id', modelController.update);

export default router;
