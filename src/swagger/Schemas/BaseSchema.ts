export const baseSchema = {
  BaseEntity: {
    type: "object",
    properties: {
      id: { type: "integer", example: 1 },
      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-22T08:50:00.000Z",
      },
      createdBy: { type: "integer", example: 1 },
      updatedAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-22T08:50:00.000Z",
      },
      updatedBy: { type: "integer", example: 1 },
      deletedAt: {
        type: "string",
        format: "date-time",
        nullable: true,
        example: null,
      },
      deletedBy: { type: "integer", nullable: true, example: null },
      isActive: { type: "boolean", example: true },
    },
  },
};
