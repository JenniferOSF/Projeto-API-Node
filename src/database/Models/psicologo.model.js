import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Psicologos = db.define('psicologos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apresentacao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "psicologos"
})

Psicologos.associate = function(models) {
    Psicologos.hasMany(models.Atendimento, { foreignKey: 'PSICOLOGO_ID' })
  }