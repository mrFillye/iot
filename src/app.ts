import { config } from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";

config();

const app: Application = express();

app.use((err: any, _: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Express server with TypeScript");
});

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
