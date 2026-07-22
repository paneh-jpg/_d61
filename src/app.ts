import express, { type Express } from "express";
import { customerRouter, productRouter } from "./routers";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { AppDataSource } from "./config/database";
import { swaggerOptions } from "./swagger/SwaggerOption";

const app: Express = express();
AppDataSource.initialize();

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    explorer: true,
    customSiteTitle: "API Documents",
  }),
);

app.use("/customers", customerRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("OK");
});
