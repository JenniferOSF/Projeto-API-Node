export default function verifyDataNascimento(req, res, next) {
    const { data_nascimento } = req.body;
  
    const regex = /^\d{4}-\d{2}-\d{2}$/;
  
    const partes = idade.split("-");
    const ano = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const dia = parseInt(partes[2], 10);
  
    const dataObj = new Date(ano, mes - 1, dia);
  
    if (
      data_nascimento.length !== 10 ||
      !regex.test(data_nascimento) ||
      dataObj.getFullYear() !== ano ||
      dataObj.getMonth() !== mes - 1 ||
      dataObj.getDate() !== dia
    ) {
      return res.status(400).json({ message: "A data de nascimento deve ser no formato YYYY-MM-DD" });
    }
  
    next();
  }