// routes/pqrsRoutes.js
import express from 'express';
import { crearPqrs, verTodasPqrs, verUnaPqrs, actualizarPqrs, eliminarPqrs } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', crearPqrs);        // POST /pqrs
router.get('/', verTodasPqrs);        // GET /pqrs
router.get('/:id', verUnaPqrs);    // GET /pqrs/1
router.put('/:id', actualizarPqrs); // PUT /pqrs/1
router.delete('/:id', eliminarPqrs);// DELETE /pqrs/1

export default router;