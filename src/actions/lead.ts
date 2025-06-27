"use server";

import type { LeadFormData, ServerActionResponse } from '@/lib/types';
import { leadSchema } from '@/lib/types';
import { adminDB } from '@/lib/firebase/admin';
import { Timestamp } from 'firebase-admin/firestore';

export async function submitLead(
  formData: LeadFormData
): Promise<ServerActionResponse<LeadFormData>> {
  const validationResult = leadSchema.safeParse(formData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Datos de formulario inválidos. " + validationResult.error.errors.map(e => e.message).join(' '),
    };
  }

  const data = validationResult.data;

  try {
    if (!adminDB) {
      throw new Error('Firebase Admin not initialized');
    }

    const docRef = await adminDB.collection('leads').add({
      name: data.name,
      email: data.email,
      role: data.role,
      submittedAt: Timestamp.now(),
    });

    return {
      success: true,
      message: "¡Gracias! Has sido añadido/a a nuestra lista de espera. Tus datos han sido guardados.",
      data: data,
    };

  } catch (error) {
    console.error("Error al guardar el lead en Firestore:", error);
    let errorMessage = "Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.";
    return {
      success: false,
      message: errorMessage,
    };
  }
}
