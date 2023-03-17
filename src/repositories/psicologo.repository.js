import { Psicologos } from "../database/Models/psicologo.model.js"

export const findOnePsiById = async(id) => {
    const psicologo = await Psicologos.findOne({ where: { id }})

    return psicologo
}

export const findAllPsicologoRepository = async () => {
    return await Psicologos.findAll();
}

export const createPsicologoRepositpry = async ( nome, email, senha, apresentacao ) => {
    return await Psicologos.create({ nome, email, senha, apresentacao })
}

export const updatePsicologoRepository = async (id, nome, email, senha, apresentacao ) => {
    await Psicologos.update({ nome, email, senha, apresentacao }, { where: { id }})
    return await Psicologos.findOne({where: { id }})
}

export const deletePsicologoRepository = async (id) => {
    await Psicologos.destroy({where: { id }})
}

export const countAllPsicologoRepository = async () => {
    return await Psicologos.count();
}
