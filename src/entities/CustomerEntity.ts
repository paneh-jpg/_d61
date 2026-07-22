import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: "customer" })
export class CustomerEntity extends BaseEntity{
  @Column({ name: "name", type: "varchar", length: 255 })
  "name": string;

  @Column({ name: "email", type: "varchar", length: 255, nullable: true })
  "email": string;

  @Column({ name: "phone", type: "varchar", length: 20, nullable: true })
  "phone": string;

  @Column({ name: "address", type: "text", nullable: true })
  "address": string;
}
