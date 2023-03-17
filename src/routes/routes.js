import { Router } from "express";
import { createAtendimento, deleteAtendimentoById, findAllAtendimentos, findOneAtendimentoById, updateAtendimentoById } from "../controllers/atendimento/atendimento.controller.js";
import { countAllAPacientes, countAllAPsicologos, countAllAtenddimentos, mediaAtendimenos } from "../controllers/dashboard/dashboard.controller.js";
import { createPaciente, deletePacienteById, findAllPacientes, findOnePacienteById, updatePacienteById } from "../controllers/paciente/paciente.controller.js";
import { createPsicologo, deletePsicologoById, findAllUPsicologos, findOnePsicologoById, login, updatePsicologoById } from "../controllers/psicologo/psicologo.controller.js";
import verifyEmailsAll from "../middlewares/verifyEmailsAll.js";
import verifyIdade from "../middlewares/verifyIdade.js";
import verifyApresentacao from "../middlewares/verifyApresentacao.js";
import verifyEmail from "../middlewares/verifyEmail.js";
import verifyName from "../middlewares/verifyName.js";
import verifySenha from "../middlewares/verifySenha.js";
import verifyId from "../middlewares/verifyId.js";

const routes = Router()

//PACIENTES
routes.get('/paciente', findAllPacientes);
routes.get('/paciente/:id', findOnePacienteById);
routes.post('/paciente', verifyEmail, verifyEmailsAll, verifyName, verifyIdade, createPaciente);
routes.put('/paciente', verifyId, verifyEmail, verifyName, verifyIdade, updatePacienteById);
routes.delete('/paciente/:id', verifyId, deletePacienteById);

//PSICOLOGO

routes.post('/login', verifyEmail, verifySenha, login);

routes.get('/psicologo', findAllUPsicologos);
routes.get('/psicologo/:id', verifyId, findOnePsicologoById);
routes.post('/psicologo', verifyEmail, verifyEmailsAll, verifyName, verifySenha, verifyApresentacao, createPsicologo);
routes.put('/psicologo', verifyEmail, verifyName, verifySenha, verifyApresentacao, updatePsicologoById);
routes.delete('/psicologo/:id', verifyId, deletePsicologoById);

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