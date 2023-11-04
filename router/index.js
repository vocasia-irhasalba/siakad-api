const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatkul = require("./matakuliah");
const routeDsnMat = require("./dosenmatkul");
const routeUser = require("./user");
const authVerify = require("../middleware/authVerify");
const routemhsBimbingan = require("./mahasiswabimbingan");
const routeJadwalMat = require("./jadwalmatkul");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',(req,res,next) => authVerify(req,res,next),routeMahasiswa)
route.use('/dosen',(req,res,next) => authVerify(req,res,next),routeDosen);
route.use('/matkul',(req,res,next) => authVerify(req,res,next),routeMatkul)
route.use('/dosen-matkul',(req,res,next) => authVerify(req,res,next),routeDsnMat)
route.use('/auth',routeUser)
route.use('/mhs-bim',routemhsBimbingan)
route.use('/jadwal-mat',routeJadwalMat)


module.exports = route