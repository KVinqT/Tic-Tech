import dotenv from "dotenv";
import path from "node:path";
import { app } from "./app";
const NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(__dirname, "./.env." + NODE_ENV) });
const port = process.env.PORT; // npm run dev ==> .env.development

app.listen(port, () => {
  console.log("Server listening on port 5000");
});
