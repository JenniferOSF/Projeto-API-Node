export default function verifyName(req, res, next) {
    const { nome } = req.body;
  
    if (typeof nome !== "string") {
      return res.status(400).json({ message: "O nome deve ser uma string" });
    }
  
    if (nome.length < 3 || nome.length > 100) {
      return res.status(400).json({ message: "O nome deve ter de 3 a 100 caracteres" });
    }
  
    next();
  }