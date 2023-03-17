import { Router } from "express";
import { createAtendimento, deleteAtendimentoById, findAllAtendimentos, findOneAtendimentoById, updateAtendimentoById } from "../controllers/atendimento/atendimento.controller.js";
import { countAllAPacientes, countAllAPsicologos, countAllAtenddimentos, mediaAtendimenos } from "../controllers/dashboard/dashboard.controller.js";
import { createPaciente, deletePacienteById, findAllPacientes, findOnePacienteById, updatePacienteById } from "../controllers/paciente/paciente.controller.js";
import { createPsicologo, deletePsicologoById, findAllUPsicologos, findOnePsicologoById, updatePsicologoById } from "../controllers/psicologo/psicologo.controller.js";

const routes = Router()

//PACIENTES
routes.get('/paciente', findAllPacientes);
routes.get('/paciente/:id', findOnePacienteById);
routes.post('/paciente', createPaciente);
routes.put('/paciente', updatePacienteById);
routes.delete('/paciente/:id', deletePacienteById);

//PSICOLOGO
routes.get('/psicologo', findAllUPsicologos);
routes.get('/psicologo/:id', findOnePsicologoById);
routes.post('/psicologo', createPsicologo);
routes.put('/psicologo', updatePsicologoById);
routes.delete('/psicologo/:id', deletePsicologoById);

//ATENDIMENTO
routes.get('/atendimento', findAllAtendimentos);
routes.get('/atendimento/:id', findOneAtendimentoById);
routes.post('/atendimento', createAtendimento);
routes.put('/atendimento', updateAtendimentoById);
routes.delete('/atendimento/:id', deleteAtendimentoById);

//DASHBOARD
routes.get('/dashboard/pacientes', countAllAPacientes);
routes.get('/dashboard/psicologos', countAllAPsicologos);
routes.get('/dashboard/atendimentos', countAllAtenddimentos);
routes.get('/dashboard/media', mediaAtendimenos);

export default routes;