import { findPacienteById } from "../repositories/paciente.repository.js";
import { findOnePsiById } from "../repositories/psicologo.repository.js";

export default async function verifyId(req, res, next) {
  const { id } = req.params;
  const { url } = req;

  if (url == `/pacientes/${id}`) {
    const paciente = await findPacienteById(id);

    if (!paciente) {
      return res.status(404).json({ message: "id não encontrado" });
    }
  }

  if (url == `/psicologos/${id}`) {
    const psicologo = await findOnePsiById(id);

    if (!psicologo) {
      return res.status(404).json({ message: "id não encontrado" });
    }
  }

  next();
}