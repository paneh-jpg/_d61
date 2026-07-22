import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { CustomerEntity } from "../entities/CustomerEntity";
import { ProductEntity } from "../entities/ProductEntity";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "default",
  synchronize: false,
  logging: true,
  entities: [CustomerEntity, ProductEntity],
  subscribers: [],
  migrations: [],
  namingStrategy: new SnakeNamingStrategy(),
});

