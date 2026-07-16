import { IsString, IsEmail, IsOptional } from "class-validator";

export class CustomerCreateDTO {
  @IsString()
  "name": string;

  @IsEmail()
  "email": string;

  @IsString()
  "phone": string;

  @IsString()
  "address": string;
}

export class CustomerUpdateDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
