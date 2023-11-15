import Router from 'express';
const router = new Router();

import makeRouter from './makeRouter.js';
import modelRouter from './modelRouter.js';

router.use('/makes', makeRouter);
router.use('/models', modelRouter);

export default router;
