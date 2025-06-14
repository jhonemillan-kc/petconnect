
"use server";

import type { LeadFormData, ServerActionResponse } from '@/lib/types';
import { leadSchema } from '@/lib/types';
import { adminDB } from '@/lib/firebase/admin'; // Firebase Admin DB
import { Timestamp } from 'firebase-admin/firestore'; // Import Timestamp

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

  // Check if adminDB was initialized correctly
  if (!adminDB) {
    console.error("Error: adminDB is not initialized. Cannot save lead to Firestore. Check Firebase Admin SDK initialization in src/lib/firebase/admin.ts and environment variables.");
    return {
      success: false,
      message: "Error interno del servidor: No se pudo conectar a la base de datos. Por favor, inténtalo más tarde o contacta al soporte.",
    };
  }

  try {
    const leadCollection = adminDB.collection('leads');
    const newLeadRef = leadCollection.doc(); // Create a new document reference with an auto-generated ID

    await newLeadRef.set({
      name: data.name,
      email: data.email,
      role: data.role,
      submittedAt: Timestamp.now(), // Use Firestore Timestamp for server-side timestamping
    });

    console.log("Lead data successfully saved to Firestore with ID:", newLeadRef.id);

    return {
      success: true,
      message: "¡Gracias! Has sido añadido/a a nuestra lista de espera. Tus datos han sido guardados.",
      data: data,
    };

  } catch (error) {
    console.error("Error al guardar el lead en Firestore:", error);
    let errorMessage = "Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.";
    // In a production environment, you might want to log error.message
    // but not necessarily expose it directly to the user.
    return {
      success: false,
      message: errorMessage,
    };
  }
}
