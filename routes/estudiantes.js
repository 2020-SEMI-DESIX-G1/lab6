const express = require('express');
const router = express.Router();

/* 
[GET] /estudiantes/  (Retorna la lista completa de estudiantes almacenados)

[POST] /estudiantes/ (Crea un nuevo estudiante y lo agrega a la lista de estudiantes)

[GET] /estudiantes/<id> (Retorna a un estudiante específico basado en el id recibido)

[PUT] /estudiantes/<id> (Actualiza uno o más campos de un estudiante específico basado en el id recibido)

[DELETE] /estudiantes/<id> (Elimina un estudiante de la lista de estudiantes basado en el id recibido)
*/

var estudiantes = require('../data/data.js');


router.get('/estudiantes' , (req, res) => {
    res.status(200).json({ success: true , msg: estudiantes })
})

router.post('/estudiantes' , (req, res) => {
    let estudiante = { id: Math.floor(Math.random() * 100) + 1 ,  name: 'test'}
    estudiantes.push(estudiante);
    res.status(200).json({ success: true , msg: "estudiantes" })
})

router.get('/estudiante/:id' , (req, res) => {
    let idfind = req.params.id;
    const found = estudiantes.find( estudiante => estudiante.id == idfind );
    
    res.status(200).json({ success: true , msg: `${found ?  'estudiante ' + found.name : 'no estudiantes'} ` })
})

router.put('/estudiante/' , (req, res) => {
    let idfind = req.body.id;
    let name = req.body.name;
    console.log(req.body);
    const found = estudiantes.find( estudiante => estudiante.id == idfind );
    if ( found ) { 
        found.name = name
        res.status(200).json({ success: true , msg: found.name + 'actualizado' })
    } else {
        res.status(200).json({ success: true , msg: 'no data' })
    }
    
})


router.delete('/estudiantes' , (req, res) => {
    let idfind = req.body.id;
    const result = estudiantes.filter(estudiante => estudiante.id  == idfind );
    if ( result) {   estudiantes = result 
        res.status(200).json({ success: true , msg: `eliminado ${req.body.id}` })
    } else {
        res.status(200).json({ success: true , msg: `no data` })
    }
  
   
})

module.exports = router;