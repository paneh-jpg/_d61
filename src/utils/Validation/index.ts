import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";

async function valid<T>(dtoClass: new () => T, body: any) {
  const dto = plainToInstance(dtoClass, body);

  // @ts-ignore
  return await validate(dto);
}

export function ValidationPipe<T>(dtoClass: new () => T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    let allErrors: ValidationError[] = [];

    const body = req.body;
    const errors = await valid(dtoClass, body);
    if (errors.length > 0) {
      allErrors.push(...errors);
    }

    if (allErrors.length > 0) {
      const msges = allErrors.map(e => e.constraints ? Object.values(e.constraints) : []).flat();
      return res.status(422).json({
        statusCode: 422,
        message: msges.join(", "),
        error: "Unprocessable Entity"
      });
    }

    next();
  };
}