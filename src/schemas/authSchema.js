import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("არასწორი Email-ის ფორმატი."),
    password: z.string().min(6, "მინიმუმ 6 სიმბოლო აუცილებელია პაროლისთვის"),
    confirmPassword: z.string(),
    //       {email:"test@gmail.com", password:"123456" confirm:"123456"}
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "პაროლი არ ემთხვევა",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("არასწორი Email-ის ფორმატი."),
  password: z.string().min(6, "მინიმუმ 6 სიმბოლო აუცილებელია პაროლისთვის"),
});
