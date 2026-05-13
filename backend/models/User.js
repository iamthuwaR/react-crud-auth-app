const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: {
          msg: "Name is required",
        },
        len: {
          args: [3, 50],
          msg: "Name must be between 3 and 50 characters",
        },
      },

      set(value) {
        this.setDataValue("name", value.trim());
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email already exists",
      },

      validate: {
        notEmpty: {
          msg: "Email is required",
        },
        isEmail: {
          msg: "Invalid email format",
        },
      },

      set(value) {
        this.setDataValue("email", value.toLowerCase().trim());
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: {
          msg: "Password is required",
        },
        len: {
          args: [6, 100],
          msg: "Password must be at least 6 characters",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;