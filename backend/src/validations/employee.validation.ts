import { z } from "zod";

export const createEmployeeSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  jobTitle: z.string().min(2),
  country: z.string().min(2),
  salary: z.number().positive(),
  department: z.string().min(2)
});