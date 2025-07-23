import { NextRequest, NextResponse } from 'next/server';
import { adminDB } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

// Interface for the adoption form data
interface AdoptionFormData {
  // Adopter data
  name: string;
  email: string;
  age: string;
  city: string;
  neighborhood: string;
  phone: string;
  occupation: string;
  housingType: string;
  housingOwnership: string;
  nationality: string;
  agreesToProcess: boolean;
  
  // Pet data
  petId: string;
  petName: string;
  petType: string;
  petAge: { years?: number; months?: number };
  petSex: string;
  petSize: string;
  petFilters: {
    age: number;
    nationality: string;
  };
}

export async function POST(request: NextRequest) {
  console.log('API route reached - POST /api/adoption');
  
  try {
    const formData: AdoptionFormData = await request.json();
    console.log('Form data received:', formData);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.petId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Firebase
    const adoptionData = {
      // Adopter information
      adopter: {
        name: formData.name,
        email: formData.email,
        age: parseInt(formData.age),
        location: {
          city: formData.city,
          neighborhood: formData.neighborhood
        },
        phone: formData.phone,
        occupation: formData.occupation,
        housing: {
          type: formData.housingType,
          ownership: formData.housingOwnership
        },
        nationality: formData.nationality,
        agreesToProcess: formData.agreesToProcess
      },
      
      // Pet information
      pet: {
        id: formData.petId,
        name: formData.petName,
        type: formData.petType,
        age: formData.petAge,
        sex: formData.petSex,
        size: formData.petSize,
        filters: formData.petFilters
      },
      
      // Metadata
      status: 'pending',
      submittedAt: FieldValue.serverTimestamp(),
      source: 'website'
    };

    // Save to Firebase using existing admin configuration
    // Using the 'contacts' database and 'leads' collection
    console.log('Attempting to save to Firebase...', { adminDB: !!adminDB });
    const docRef = await adminDB!.collection('leads').add(adoptionData);
    console.log('Successfully saved to Firebase with ID:', docRef.id);
    
    console.log('Adoption request saved with ID:', docRef.id);
    
    return NextResponse.json(
      { 
        success: true, 
        id: docRef.id,
        message: 'Adoption request submitted successfully' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error saving adoption request:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit adoption request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 