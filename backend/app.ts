//express app
import express, { Request, Response } from "express";
import morgan from "morgan";

export const app = express();

app.use("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from express app",
  });
});
