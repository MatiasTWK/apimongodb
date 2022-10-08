const express = require('express');
const userSchema = require('../models/users');

const router = express.Router();

//RUTAS
router.post('/usuarios', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

//OBTENER USUARIOS
router.get('/usuarios', (req, res) => {
    userSchema
        .find()
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});


//OBTENER USUARIO POR ID
router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

//ACTUALIZAR UN USUARIO
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { rut, pass } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { rut, pass } })
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});


//ELIMINAR UN USUARIO
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;