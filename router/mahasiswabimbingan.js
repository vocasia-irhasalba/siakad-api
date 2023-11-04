const express = require("express");
const dosenMatkulController = require("../controller/dosenMatkulController");
const mahasiswaBimbinganController = require("../controller/mahasiswaBimbinganController");
const routemhsBimbingan = express.Router()

routemhsBimbingan.post('/',mahasiswaBimbinganController.create)
routemhsBimbingan.get('/get',mahasiswaBimbinganController.getAll)
routemhsBimbingan.get('/get/:id',mahasiswaBimbinganController.getById)
// routemhsBimbingan.put('/update/:id',mahasiswaBimbinganController.update)
// routemhsBimbingan.delete('/delete/:id',mahasiswaBimbinganController.delete)

module.exports = routemhsBimbingan