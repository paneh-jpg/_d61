import { IsString } from "class-validator";

export class ProductCreateDTO {
  @IsString()
  "name": string;

  @IsString()
  "price": string;

  @IsString()
  "description": string;
}
