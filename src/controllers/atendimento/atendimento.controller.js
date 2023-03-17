import { createAtendimentoRepositpry, deleteAtendimentoRepository, findAllAtendimentoRepository, findAtendimentoById, updateAtendimentoRepository } from "../../repositories/atendimento.repositorry.js";


export const findOneAtendimentoById = async (req, res) => {
    const { id } = req.params

    const atendimento = await findAtendimentoById(id)

    if (!atendimento) {
        return res.status(404).json({ message: 'NOT FOUND' })
    }

    return res.status(200).json({ atendimento });
}

export const findAllAtendimentos = async (req, res) => {
    const atendimento = await findAllAtendimentoRepository();
    return res.status(200).json({ atendimento })
}

export const createAtendimento = async (req, res) => {
    const { DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID } = req.body

    const atendimento = await createAtendimentoRepositpry(DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID)

    return res.status(201).json({ atendimento });
}

export const updateAtendimentoById = async (req, res) => {
    const { id } = req.headers;
    const { DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID } = req.body;

    const atendimento = await updateAtendimentoRepository(id, DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID)

    return res.status(202).json(atendimento);
}

export const deleteAtendimentoById = async (req, res) => {
    const { id } = req.params

    await deleteAtendimentoRepository(id)

    return res.status(204).send();
}