'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {}

    isPasswordValid(password){
      return bcrypt.compareSync(password, this.password);
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "Invalid E-mail"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password){
        this.setDataValue("password", bcrypt.hashSync(password, 10));
      },

    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};