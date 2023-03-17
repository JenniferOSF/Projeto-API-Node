import {
    findOnePsiById, findAllPsicologoRepository, createPsicologoRepositpry, updatePsicologoRepository, deletePsicologoRepository, findOnePsiByEmail} from "../../repositories/psicologo.repository.js";


export const login = async (req, res) => {
    const { email, senha } = req.body;
    const psicologo = await findOnePsiByEmail(email);
    const id = psicologo.id;
    const nome = psicologo.nome;
      
    if (senha === psicologo.senha) {
        const secret = "secret";
      
        const token = ({ id, email, nome }, secret, { expiresIn: "1h" });
      
        return res.status(200).json({ token });
    }
      
    res.status(401).json({ message: "E-mail ou senha inválido, verifique e tente novamente" });
};

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
    try {
        const { id } = req.headers;
        const { nome, email, senha, apresentacao} = req.body;

        const psicologo = await findOnePsiByEmail(email);
        return psicologo !== null && id !== psicologo.id
        ? res.status(409).json({ message: `Este ${email} já existe!` })
        : res
            .status(200)
            .json(
              await updatePsicologoRepository(
                id,
                nome,
                email,
                senha,
                apresentacao
              )
            );
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Erro interno do servidor." });
    }


    
    const psicologo = await updatePsicologoRepository(id, nome, email, senha, apresentacao)

    return res.status(202).json(psicologo);
}

export const deletePsicologoById = async (req, res) => {
    const { id } = req.params

    await deletePsicologoRepository(id)

    return res.status(204).send();
}

