export interface Pet {
  id: string;
  name: string;
  type: 'Perro' | 'Gato';
  age: {
    years?: number;
    months?: number;
  };
  sex: 'Macho' | 'Hembra';
  size: 'Pequeño' | 'Mediano' | 'Grande';
  
  // Estado de salud
  health: {
    dewormed: boolean;
    vaccinated: boolean;
    sterilized: boolean;
    vaccineDetails?: string[]; // ej: ["Rabia", "Múltiple"]
  };
  
  // Historia de rescate
  rescueStory: {
    origin: string; // De dónde fue rescatada
    rescueDate: string; // Fecha de rescate
    condition: string; // Estado cuando llegó
    story: string; // Historia completa/emotiva
  };
  
  // Imágenes
  images: {
    main: string; // URL imagen principal (para cards y destacada)
    gallery: string[]; // URLs galería adicional
    s3Bucket?: string; // Bucket de S3 si se usa
  };
  
  // Estado de adopción
  adoptionStatus: 'Disponible' | 'Adoptada';
  
  // Ubicación de la mascota
  city: string;
  
  // Filtros/requisitos para adopción
  petFilters: {
    age: number; // Minimum age required for adopter
    nationality: string; // Required nationality of adopter
  };
  
  // Información del refugio (para uso interno, no mostrar al usuario)
  shelter: {
    name: string;
    contact: string;
    email: string;
    location: string;
  };
  
  // Metadatos
  createdAt: string;
  updatedAt: string;
  featured?: boolean; // Para destacar en homepage
}

export interface PetCard {
  id: string;
  name: string;
  type: Pet['type'];
  age: string; // "2 años" o "6 meses"
  sex: string;
  mainImage: string;
  adoptionStatus: Pet['adoptionStatus'];
  featured?: boolean;
} 