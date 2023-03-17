import { findPacienteByEmail } from "../repositories/paciente.repository.js";
import { findOnePsiByEmail } from "../repositories/psicologo.repository.js";

export default async function verifyEmailsAll(req, res, next) {
    const { email } = req.body;
    const { url } = req;
  
    if ((url == "/pacientes")) {
      const paciente = await findPacienteByEmail(email);
  
      if (paciente) {
        return res.status(409).json({ message: `O email ${email} já existe!` });
      }
    }
  
    if ((url == "/psicologos")) {
      const psicologo = await findOnePsiByEmail(email);
  
      if (psicologo) {
        return res.status(409).json({ message: `O email ${email} já existe!` });
      }
    }
  
    next();
  }