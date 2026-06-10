import express from "express";
import "dotenv/config"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middlewares/errorHandler.ts";
import routes from "./routes/index.ts";
import cors  from "cors"

const app = express();
const PORT = process.env.PORT ?? 3031

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello");
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})