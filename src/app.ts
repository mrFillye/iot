import { config } from "dotenv";
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

config();

const app: Application = express();

app.use((err: any, _: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 3009;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
