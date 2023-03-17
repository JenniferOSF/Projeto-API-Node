
export default function verifyApresentacao(req, res, next) {
    const { apresentacao } = req.body;
  
    if (typeof apresentacao !== "string") {
      return res.status(400).json({ message: "O campo deve ser uma string" });
    }
  
    if (apresentacao.length < 1) {
      return res.status(400).json({ message: "É preciso ter um texto de apresentação" });
    }
  
    if (apresentacao.length > 700) {
      return res.status(400).json({ message: "Apresentação deve ter até 700 caracteres" });
    }
  
    next();
  }