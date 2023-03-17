import { Pacientes } from "../database/Models/paciente.model.js"

export const findPacienteById = async (id) => {
    const paciente = await Pacientes.findOne({ where: { id } })
    return paciente
}

export const findAllPacienteRepository = async () => {
    return await Pacientes.findAll();
}

export const createPacienteRepositpry = async (nome, email, data_nascimento) => {
    return await Pacientes.create({ nome, email, data_nascimento })
}

export const updatePacienteRepository = async (id, nome, email, data_nascimento) => {
    await Pacientes.update({ nome, email, data_nascimento }, { where: { id }})
    return await Pacientes.findOne({where: { id }})
}

export const deletePacienteRepository = async (id) => {
    await Pacientes.destroy({where: { id }})
}

export const countAllPacienteRepository = async () => {
    return await Pacientes.count();
}