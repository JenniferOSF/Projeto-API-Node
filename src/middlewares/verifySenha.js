
  export default function verifySenha(req, res, next) {
    const { senha } = req.body;
    if (typeof senha !== "string") {
      return res.status(400).json({ message: "A senha deve ser uma string" });
    }
  
    if (senha.length < 6 || senha.length > 30) {
      return res.status(400).json({ message: "A senha deve conter de 6 a 30 caracteres" });
    }
  
    next();
  }