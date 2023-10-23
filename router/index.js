const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatkul = require("./matakuliah");
const routeDsnMat = require("./dosenmatkul");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',routeMahasiswa)
route.use('/dosen',routeDosen);
route.use('/matkul',routeMatkul)


module.exports = route