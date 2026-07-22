export const customerSchemas = {
  Customer: {
    allOf: [
      {
        type: "object",
        properties: {
          name: { type: "string", example: "Nguyễn Văn A" },
          email: {
            type: "string",
            example: "nguyenvana@example.com",
            nullable: true,
          },
          phone: { type: "string", example: "0901234567", nullable: true },
          address: {
            type: "string",
            example: "Hà Nội, Việt Nam",
            nullable: true,
          },
        },
      },
      { $ref: "#/components/schemas/BaseEntity" },
    ],
  },

  CustomerInput: {
    type: "object",
    required: ["name"],
    properties: {
      name: { type: "string", example: "Nguyễn Văn A" },
      email: { type: "string", example: "nguyenvana@example.com" },
      phone: { type: "string", example: "0901234567" },
      address: { type: "string", example: "Hà Nội, Việt Nam" },
    },
  },

  CustomerUpdate: {
    type: "object",
    properties: {
      name: { type: "string", example: "Nguyễn Văn A" },
      email: { type: "string", example: "nguyenvana@example.com" },
      phone: { type: "string", example: "0901234567" },
      address: { type: "string", example: "Hà Nội, Việt Nam" },
    },
  },
};
