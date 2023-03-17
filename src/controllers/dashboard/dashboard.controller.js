import { countAllAtendimentosRepository } from "../../repositories/atendimento.repositorry.js";
import { countAllPacienteRepository } from "../../repositories/paciente.repository.js";
import { countAllPsicologoRepository } from "../../repositories/psicologo.repository.js";

export const countAllAPsicologos = async (req, res) => {
    const psicologos = await countAllPsicologoRepository();
    return res.status(200).json({ psicologos })
}

export const countAllAPacientes = async (req, res) => {
    const pacientes = await countAllPacienteRepository();
    return res.status(200).json({ pacientes })
}

export const countAllAtenddimentos = async (req, res) => {
    const atendimento = await countAllAtendimentosRepository();
    return res.status(200).json({ atendimento })
}

export const mediaAtendimenos = async (req, res) =>{
    const psicologos = await countAllPsicologoRepository(); 
    const atendimentos = await countAllAtendimentosRepository();

    const media = atendimentos / psicologos

    return res.status(200).json({ media })
    
}

