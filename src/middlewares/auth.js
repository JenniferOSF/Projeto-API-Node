export default function auth(req, res, next) {
  const { method, url } = req;
  const { token } = req.headers;

  const validateLogin = method == "POST" && url == "/login";
  const validateCreatePsicologo = method == "POST" && url == "/psicologos";

  const secret = "secret";

  if (validateLogin || validateCreatePsicologo) {
    next();
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ err: err.message });
      }
      next();
    });
  }
}