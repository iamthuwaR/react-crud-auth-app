const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Task = sequelize.define(
    "Task",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notEmpty: {
                    msg: "Task title cannot be empty",
                },
                len: {
                    args: [2, 100],
                    msg: "Task must be between 2 and 100 characters",
                },
            },

            set(value) {
                this.setDataValue("title", value.trim());
            },
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Task;