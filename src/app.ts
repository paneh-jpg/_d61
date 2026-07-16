import express, { type Express } from "express";
import { customerRouter } from "./routers";

const app: Express = express();

app.use(express.json());
app.use("/customers", customerRouter);

app.listen(3000, () => {
  console.log("OK");
});
