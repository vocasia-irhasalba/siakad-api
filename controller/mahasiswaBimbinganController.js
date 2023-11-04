const {Mahasiswa,MahasiswaBimbingan,Dosen} = require("./../models")

const mahasiswaBimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswaBimbinganController.index = async(req,res) => {
    res.json({
        message : "Hello mahasiswaBimbinganController"
    })
}
mahasiswaBimbinganController.getAll = async(req,res) => {
    const dosen = await Dosen.findAll({
        include : [
            {
                model : Mahasiswa
            }
        ]
    })

    res.json({
        data : dosen
    })

}
mahasiswaBimbinganController.getById = async(req,res) => {
    const {id} = req.params
    const getBimbingan = await Dosen.findOne({
        include : [
            {
                model : Mahasiswa
            }
        ],
        where : {
            id : id
        }
    })

    res.json({
        data : getBimbingan
    })

}

mahasiswaBimbinganController.create = async(req,res) => {
    const {id_mahasiswa,id_dosen} = req.body
    const mhsBimbingan = await MahasiswaBimbingan.create({
        id_dosen : id_dosen,
        id_mahasiswa : id_mahasiswa
    });

    res.json({
        data : mhsBimbingan
    })

}

mahasiswaBimbinganController.update = async(req,res) => {
    const {id_mahasiswa,id_dosen} = req.body
    const {id} = req.params
    const mhsBimbingan = await MahasiswaBimbingan.update({
        id_dosen : id_dosen,
        id_mahasiswa : id_mahasiswa
    },{
        where : {
            id : id
        }
    });

    res.json({
        data : mhsBimbingan
    })

}

mahasiswaBimbinganController.delete = async(req,res) => {
    const {id} = req.params
    const mhsBimbingan = await MahasiswaBimbingan.destroy({
        where : {
            id : id
        }
    });

    res.json({
        data : mhsBimbingan
    })

}


module.exports = mahasiswaBimbinganController

