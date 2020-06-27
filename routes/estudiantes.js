const express = require('express');
const router = express.Router();

/* 
[GET] /estudiantes/  (Retorna la lista completa de estudiantes almacenados)

[POST] /estudiantes/ (Crea un nuevo estudiante y lo agrega a la lista de estudiantes)

[GET] /estudiantes/<id> (Retorna a un estudiante específico basado en el id recibido)

[PUT] /estudiantes/<id> (Actualiza uno o más campos de un estudiante específico basado en el id recibido)

[DELETE] /estudiantes/<id> (Elimina un estudiante de la lista de estudiantes basado en el id recibido)
*/

var estudiantes

router.get('/estudiantes' , (req, res) => {
    res.status(200).json({ success: true , msg: "estudiantes" })
})

router.post('/estudiantes' , (req, res) => {
    res.status(200).json({ success: true , msg: "estudiantes" })
})

router.get('/estudiante/:id' , (req, res) => {
    res.status(200).json({ success: true , msg: `estudiantes ${req.params.id}` })
})

router.put('/estudiantes' , (req, res) => {
    res.status(200).json({ success: true , msg: `ingresar ${req.params.id}` })
})


router.delete('/estudiantes' , (req, res) => {
    res.status(200).json({ success: true , msg: `eliminar ${req.params.id}` })
})

module.exports = router;