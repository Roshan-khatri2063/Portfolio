import { Router } from 'express';
import { getHealth } from '../conytroller/health.controller.js';

const router = Router ();

router.get('./', getHelath);

export default router;