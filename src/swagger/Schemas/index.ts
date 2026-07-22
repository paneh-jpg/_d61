import { baseSchema } from "./BaseSchema";
import { customerSchemas } from "./CustomerSchema";
import { productSchemas } from "./ProductSchema";

export const allSchemas = {
  ...baseSchema,
  ...customerSchemas,
  ...productSchemas,
};
