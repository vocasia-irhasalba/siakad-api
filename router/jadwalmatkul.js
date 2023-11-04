const express = require("express");
const JadwalMatkulController = require("../controller/JadwalMatkulController");
const routeJadwalMat = express.Router()

routeJadwalMat.post('/',JadwalMatkulController.create)
routeJadwalMat.get('/get',JadwalMatkulController.getAll)
routeJadwalMat.get('/get/:id',JadwalMatkulController.getById)
routeJadwalMat.put('/update/:id',JadwalMatkulController.update)
routeJadwalMat.delete('/delete/:id',JadwalMatkulController.delete)

module.exports = routeJadwalMat