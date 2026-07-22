import { allSchemas } from "./Schemas";

export const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: allSchemas,
    },
  },
  apis: ["./src/app.ts", "./src/routers/*.ts", "./src/routers/**/*.ts"],
};
