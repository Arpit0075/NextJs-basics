import { z } from "zod";
export const inputSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(5, "Passwords must be atleast 5 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const throttleResponseSchema = z.object({ success: z.boolean() });
