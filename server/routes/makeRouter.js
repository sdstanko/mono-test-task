import Router from 'express';
import makeController from '../controllers/makeController.js';
const router = new Router();

router.post('/', makeController.create);
router.get('/', makeController.getAll);
router.get('/:id', makeController.findById);
router.delete('/:id', makeController.delete);
router.patch('/:id', makeController.update);

export default router;
