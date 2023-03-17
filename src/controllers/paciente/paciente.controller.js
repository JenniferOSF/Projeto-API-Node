import {
    findPacienteById, findAllPacienteRepository, createPacienteRepositpry, updatePacienteRepository, deletePacienteRepository } from '../../repositories/paciente.repository.js';

export const findOnePacienteById = async (req, res) => {
    const { id } = req.params

    const paciente = await findPacienteById(id)

    if (!paciente) {
        return res.status(404).json({ mesage: 'NOT FOUND' })
    }

    return res.status(200).json({ paciente });
}

export const findAllPacientes = async (req, res) => {
    const paciente = await findAllPacienteRepository();

    return res.status(200).json({ paciente })
}

export const createPaciente = async (req, res) => {
    const { nome, email, data_nascimento } = req.body

    const paciente = await createPacienteRepositpry(nome, email, data_nascimento)

    return res.status(201).json({ paciente });
}

export const updatePacienteById = async (req, res) => {
    const { id } = req.headers;
    const { nome, email, data_nascimento } = req.body;

    const paciente = await updatePacienteRepository(id, nome, email, data_nascimento)

    

    return res.status(202).json(paciente);
}

export const deletePacienteById = async (req, res) => {
    const { id } = req.params

    await deletePacienteRepository(id)

    return res.status(204).send();
}