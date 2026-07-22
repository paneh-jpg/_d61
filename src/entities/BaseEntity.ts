import "reflect-metadata";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    "id": number

    @Column({ type: 'timestamptz' })
   "createdAt": Date

   @Column({ type: 'timestamptz' })
   "createdBy": number

   @Column({ type: 'timestamptz' })
   "updatedAt": Date

   @Column({ type: 'bigint' })
   "updatedBy": number

   @Column({ type: 'timestamptz' })
  "deletedAt": Date

   @Column({ type: 'bigint' })
   "deletedBy": number

   @Column({ type: 'boolean' })
   "isActive": boolean
}