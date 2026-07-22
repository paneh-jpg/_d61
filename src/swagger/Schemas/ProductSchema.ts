export const productSchemas = {
  Product: {
    allOf: [
      {
        type: "object",
        properties: {
          name: { type: "string", example: "Macbook Air M4" },
          price: {
            type: "string",
            example: "21000000",
          },
          description: {
            type: "string",
            example:
              "Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum . Lorem ipsum's purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.",
          },
        },
      },
      { $ref: "#/components/schemas/BaseEntity" },
    ],
  },
};
