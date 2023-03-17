import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Pacientes = db.define('pacientes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "pacientes"
})

Pacientes.associate = function(models) {
    Pacientes.hasMany(models.Atendimento, { foreignKey: 'paciente_ID' })
  }





