import {
    findOnePsiById, findAllPsicologoRepository, createPsicologoRepositpry, updatePsicologoRepository, deletePsicologoRepository} from "../../repositories/psicologo.repository.js";

export const findOnePsicologoById = async (req, res) => {
    const { id } = req.params

    const psicologo = await findOnePsiById(id)

    if (!psicologo) {
        return res.status(404).json({ mesage: 'NOT FOUND' })
    }

    return res.status(200).json({ psicologo });
}

export const findAllUPsicologos = async (req, res) => {
    const psicologo = await findAllPsicologoRepository();
    return res.status(200).json({ psicologo })
} 

export const createPsicologo = async (req, res) => {
    const { nome, email, senha, apresentacao} = req.body

    const psicologo = await createPsicologoRepositpry(nome, email, senha, apresentacao)

    console.log(psicologo)

    return res.status(201).json({ psicologo });
}

export const updatePsicologoById = async (req, res) => {
    const { id } = req.headers;
    const { nome, email, senha, apresentacao} = req.body;

    const psicologo = await updatePsicologoRepository(id, nome, email, senha, apresentacao)

    return res.status(202).json(psicologo);
}

export const deletePsicologoById = async (req, res) => {
    const { id } = req.params

    await deletePsicologoRepository(id)

    return res.status(204).send();
}