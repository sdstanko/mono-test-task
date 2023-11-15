import Router from 'express';
import makeController from '../controllers/makeController.js';
const router = new Router();

router.post('/', makeController.create);
router.get('/', makeController.getAll);

export default router;
