// controllers/pqrsController.js
import { crear, verTodas, verUna, actualizar, eliminar } from '../models/pqrsModel.js';

export function crearPqrs(req, res){
    try {
        let datos = req.body;
        let resultado = crear(datos);
        res.status(201).json({
            mensaje : "PQRS creado con exito ",
            resultado
        })
    } catch (error){
        res.status(500).json({
            mensaje : "Error en el servidor"
        })
    }
}

export function verTodasPqrs(req, res){
    try{
        let datos = verTodas();
        res.status(200).json({
            mensaje : "Consulta de todos los PQRS",
            data : datos
        })
    } catch (error){
        res.status(500).json({
            mensaje : "Error en el servidor"
        })
    }
}

export function verUnaPqrs(req, res){
    try{
        let idPqrs = req.params.id;
        let datos = verUna(idPqrs);
        res.status(200).json({
            mensaje : "Consulta por ID, ¡Exitosa!",
            data : datos
        })
    } catch (error) {
        res.status(500).json({
            mensaje : "Error en el servidor",
            error : error.message
        })
    }
}

export function actualizarPqrs(req, res){
    try{
        let id = req.params.id;
        let datos = req.body;
        let resultado = actualizar(id, datos);
        res.status(200).json({
            mensaje : "PQRS Actualizada con exito",
            data : resultado
        })
    } catch (error) {
        res.status(500).json({
            mensaje : "Error en el servidor.. Intente despues"
        })
    }
}

export function eliminarPqrs(req, res){
    try{
        let id = req.params.id;
        eliminar(id);
        res.status(200).json({
            mensaje : "PQRS eliminada con exito"
        })
    } catch (error) {
        res.status(500).json({
            mensaje : "Error en el servidor"
        })
    }
}