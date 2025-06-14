import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingresa una dirección de correo electrónico válida." }),
  role: z.enum(['adopter', 'center'], { message: "Por favor, selecciona tu rol." }),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export interface ServerActionResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
