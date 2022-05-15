import express from 'express';

import authRoute from './authRouter.js';
import productsRoute from './productsRouter.js';

const router = express.Router();
router.use(authRoute);
router.use(productsRoute);

export default router;