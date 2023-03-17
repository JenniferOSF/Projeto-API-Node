import express from "express";
import verifyUserType from "./middlewares/verify-user-type.middleware.js";
import routes from "./routes/routes.js";

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(verifyUserType);


app.use(routes)

app.listen(PORT, () => console.log(`server running in loclhost:${PORT}`))