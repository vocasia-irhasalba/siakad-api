const {JadwalMataKuliah,MataKuliah} = require("./../models")

const JadwalMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
JadwalMatkulController.index = async(req,res) => {
    res.json({
        message : "Hello JadwalMatkulController"
    })
}

JadwalMatkulController.create = async (req,res) => {
    const {id_matkul,jam,hari} = req.body
    const createJadwal = JadwalMataKuliah.create({
        id_matkul : id_matkul,
        jam : jam,
        hari : hari

    })
    return res.status(201).json({
        message : 'Data Berhasil Ditambahkan !',
        data : createJadwal
    })
}

JadwalMatkulController.getAll = async (req,res) => {
    const getJadwal = await MataKuliah.findAll({
        include : [
            {
                model : JadwalMataKuliah
            }
        ]
    })
    return res.status(200).json({
        data : getJadwal
    })
}

JadwalMatkulController.getById = async (req,res) => {
    const {id} = req.params
    const getJadwal = await MataKuliah.findOne({
        include : [
            {
                model : JadwalMataKuliah
            }
        ],
        where : {
            id : id
        }
    })
    return res.status(200).json({
        data : getJadwal
    })
}

JadwalMatkulController.update = async (req,res) => {
    const {id_matkul,jam,hari} = req.body
    const {id} = req.params
    const updateJadWal = JadwalMataKuliah.update({
        id_matkul : id_matkul,
        jam : jam,
        hari : hari

    },{
        id : id
    })
    return res.status(200).json({
        message : 'Data Berhasil Diubah !',
        data : updateJadWal
    })
}

JadwalMatkulController.delete = async(req,res) => {
    const {id} = req.params
    const deleteJadwal = await JadwalMataKuliah.destroy({
        where : {
            id : id
        }
    })

    return res.status(201).json({
        message : 'Data Berhasil Dihapus !',
        data : deleteJadwal
    })
}

module.exports = JadwalMatkulController

