import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {
@Column({ name: "name", type: "varchar", length: 255 })
  "name": string;

  @Column({ name: "price", type: "bigint" })
  "price": string;

  @Column({ name: "description", type: "text" })
  "description": string;

}
