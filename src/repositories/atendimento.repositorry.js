import { Atendimento } from "../database/Models/atenddimento.model.js"

export const findAtendimentoById = async (id) => {
    const atendimento = await Atendimento.findOne({ where: { id } })
    return atendimento
}

export const findAllAtendimentoRepository = async () => {
    return await Atendimento.findAll();
}

export const createAtendimentoRepositpry = async (DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID) => {
    return await Atendimento.create({ DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID })
}

export const updateAtendimentoRepository = async (id, DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID) => {
    await Atendimento.update({ DATA_ATENDIMENTO, OBSERVACAO, PSICOLOGO_ID, paciente_ID }, { where: { id }})
    return await Atendimento.findOne({where: { id }})
}

export const deleteAtendimentoRepository = async (id) => {
    await Atendimento.destroy({where: { id }})
}

export const countAllAtendimentosRepository = async () => {
    return await Atendimento.count();
}





// return await User.findAll({ 
//     where: email ? { email } : undefined,
//     include: [Notification]
//   });