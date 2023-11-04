'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MahasiswaBimbingan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MahasiswaBimbingan.belongsTo(models.Dosen,{foreignKey : 'id_dosen'})
      MahasiswaBimbingan.belongsTo(models.Mahasiswa,{foreignKey : 'id_mahasiswa'})
      
    }
  }
  MahasiswaBimbingan.init({
    id_mahasiswa:{
      type : DataTypes.INTEGER,
      references : {
        model : 'Mahasiswa',
        key : 'id'
      },
      field :'id_mahasiswa' 
    } ,
    id_dosen: {
      type : DataTypes.INTEGER,
      references : {
        model : 'Dosen',
        key : 'id'
      },
      field : 'id_dosen'
    }
  }, {
    sequelize,
    modelName: 'MahasiswaBimbingan',
  });
  return MahasiswaBimbingan;
};