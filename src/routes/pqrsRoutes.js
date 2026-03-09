import express from 'express';
import { crearPqrs, verTodasPqrs, verUnaPqrs, actualizarPqrs, eliminarPqrs } from '../controllers/pqrsController.js';

const router = express.router;

router.get('/', verTodasPqrs);
router.get('/', verUnaPqrs);
router.post('/', crearPqrs)
router.put('/', actualizarPqrs);
router.delete('/', eliminarPqrs);

export default router;