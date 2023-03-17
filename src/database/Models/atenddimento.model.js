import { DataTypes } from "sequelize";
import { db } from "../db.js";
import { Pacientes } from "./paciente.model.js";
import { Psicologos } from "./psicologo.model.js";

export const Atendimento = db.define('atendimento', {
    DATA_ATENDIMENTO: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
    },
    OBSERVACAO: {
        type: DataTypes.STRING,
        allowNull: false,
    },   
    PSICOLOGO_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },   
    paciente_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "atendimentos"
})


Pacientes.hasMany(Atendimento, { foreignKey: 'paciente_ID' })
Atendimento.belongsTo(Pacientes, { foreignKey: 'paciente_ID' })

Psicologos.hasMany(Atendimento, { foreignKey: 'PSICOLOGO_ID' })
Atendimento.belongsTo(Psicologos, { foreignKey: 'PSICOLOGO_ID' })


