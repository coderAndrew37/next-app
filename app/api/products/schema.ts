import { z } from "zod";

const schema = z.object({
  id: z.number(),
  name: z.string().min(3),
  priceCents: z.number(),
});

export default schema;
