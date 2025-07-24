import { Pet } from '@/lib/types/pet';

export const samplePets: Pet[] = [
  {
    id: 'roco-001',
    name: 'Roco',
    type: 'Perro',
    age: { years: 3 },
    sex: 'Macho',
    size: 'Mediano',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: true,
      vaccineDetails: ['Rabia', 'Múltiple', 'Parvovirus']
    },
    rescueStory: {
      origin: 'Rescatado de la calle',
      rescueDate: '2023-06-15',
      condition: 'En buen estado',
      story: 'Roco es un perro muy cariñoso y juguetón. Le encanta estar con personas y otros perros. Es muy obediente y está listo para encontrar su familia perfecta.'
    },
          images: {
        main: 'https://drive.google.com/uc?export=view&id=1bKHSnDFo9zt2QzHGLscFk_4M0zACGq_X',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1bKHSnDFo9zt2QzHGLscFk_4M0zACGq_X',
        'https://drive.google.com/uc?export=view&id=1bR1g0NS98Af6D-_9ei9LjXcTjgZ8fVIC',
        'https://drive.google.com/uc?export=view&id=1bScHxGpqQGXLgteDMLCEl1qaIcnhskCY',
        'https://drive.google.com/uc?export=view&id=1bhCYP79J9h-Wn-QbKysMxEfeppQQa45v'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcoramed@gmail.com'
    },
    createdAt: '2023-06-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: true
  },
  {
    id: 'caramelo-002',
    name: 'Caramelo',
    type: 'Perro',
    age: { months: 10 },
    sex: 'Macho',
    size: 'Pequeño',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: false,
      vaccineDetails: ['Múltiple', 'Parvovirus']
    },
    rescueStory: {
      origin: 'Rescatado cachorro',
      rescueDate: '2024-02-20',
      condition: 'Cachorro saludable',
      story: 'Caramelo es un cachorro lleno de energía y amor. Le encanta jugar y aprender cosas nuevas. Es perfecto para una familia que quiera educar a un perrito desde pequeño.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1bk_ctaUH-Hwg6Cl76smSfxDnZvqLhLYo',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1bk_ctaUH-Hwg6Cl76smSfxDnZvqLhLYo',
        'https://drive.google.com/uc?export=view&id=1bm71GGUNacGL61tYPuNnGUI0IdZ7Sq0v',
        'https://drive.google.com/uc?export=view&id=1c7Ih2SoCivtOKiW9fpUj0PQX-DGurlMb',
        'https://drive.google.com/uc?export=view&id=1cBqKOZe1sdPmYUZwh-FvD-Lcu8IHJtxA'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      email: 'funcoramed@gmail.com',
      location: 'Bogotá, Colombia'
    },
    createdAt: '2024-02-20T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: false
  },
  {
    id: 'lex-003',
    name: 'Lex',
    type: 'Perro',
    age: { years: 13 },
    sex: 'Macho',
    size: 'Grande',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: true,
      vaccineDetails: ['Rabia', 'Múltiple']
    },
    rescueStory: {
      origin: 'Abandonado por edad',
      rescueDate: '2023-03-10',
      condition: 'Senior en buen estado',
      story: 'Lex es un perro senior con mucha sabiduría y amor para dar. A pesar de su edad, sigue siendo activo y cariñoso. Busca una familia que valore la tranquilidad y compañía de un perro maduro.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1cEVdl--Z0Mp01A13Xh6fokMAMai9V8Y_',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1cEVdl--Z0Mp01A13Xh6fokMAMai9V8Y_',
        'https://drive.google.com/uc?export=view&id=1cH3TSZ2Lo9Q29DmPs0cInpqS7XuXJWfJ',
        'https://drive.google.com/uc?export=view&id=1cJ5ii4c9AI3c7gqT-9dXg0XVAWq2S5dr'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcoramed@gmail.com'
    },
    createdAt: '2023-03-10T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: false
  },
  {
    id: 'rubio-004',
    name: 'Rubio',
    type: 'Perro',
    age: { years: 1 },
    sex: 'Macho',
    size: 'Mediano',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: false,
      vaccineDetails: ['Rabia', 'Múltiple', 'Parvovirus']
    },
    rescueStory: {
      origin: 'Rescatado joven',
      rescueDate: '2023-11-05',
      condition: 'Joven y saludable',
      story: 'Rubio es un perro joven lleno de vida. Le encanta correr, jugar y explorar. Es muy inteligente y aprende rápido. Perfecto para una familia activa que disfrute de aventuras al aire libre.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1cTqwJv7fS_NOQUvCAHu68mUhN4rzzddR',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1cTqwJv7fS_NOQUvCAHu68mUhN4rzzddR',
        'https://drive.google.com/uc?export=view&id=1cU5LVQWhlePbFjZ_N4d4Xd1MVsiQ2KSf',
        'https://drive.google.com/uc?export=view&id=1ca7aTylCuUCWnBoXRqJBBFpFaFgRwqU7'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcoramed@gmail.com'
    },
    createdAt: '2023-11-05T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: false
  },
  {
    id: 'susi-005',
    name: 'Susi',
    type: 'Perro',
    age: { years: 1 },
    sex: 'Hembra',
    size: 'Pequeño',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: false,
      vaccineDetails: ['Rabia', 'Múltiple', 'Parvovirus']
    },
    rescueStory: {
      origin: 'Rescatada cachorra',
      rescueDate: '2023-10-12',
      condition: 'Joven y saludable',
      story: 'Susi es una perrita dulce y cariñosa. Le encanta recibir mimos y estar cerca de las personas. Es muy sociable y se lleva bien con otros perros. Ideal para una familia que busque una compañera fiel.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1cdzjOrmIeU5SxIiPUhOV4TKd8gemjyHd',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1cdzjOrmIeU5SxIiPUhOV4TKd8gemjyHd',
        'https://drive.google.com/uc?export=view&id=1cNXE7B4NI17QfJUSyzhAsgIcbbzWDB_D',
        'https://drive.google.com/uc?export=view&id=1cb3rIiZIUvRJUen8xVnj9HoTcrEBfNja'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcoramed@gmail.com'
    },
    createdAt: '2023-10-12T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: true
  },
  {
    id: 'morgan-006',
    name: 'Morgan',
    type: 'Gato',
    age: { years: 5 },
    sex: 'Macho',
    size: 'Mediano',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: true,
      vaccineDetails: ['Triple felina', 'Rabia']
    },
    rescueStory: {
      origin: 'Rescatado de la calle',
      rescueDate: '2023-07-22',
      condition: 'En buen estado',
      story: 'Morgan es un gato independiente pero cariñoso. Le gusta tener su espacio pero también disfruta de la compañía humana. Es perfecto para alguien que quiera un compañero tranquilo y relajado.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1cyNuxocFVuMr8sVldTXN1kJMs_gn5hpE',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1cyNuxocFVuMr8sVldTXN1kJMs_gn5hpE',
        'https://drive.google.com/uc?export=view&id=1cma4HwIWdQesQK1OZ_68LQd6rmanKaDX',
        'https://drive.google.com/uc?export=view&id=1cpJ3bFiIUl0KVNV75fjY_Ss2Gkxkfl73',
        'https://drive.google.com/uc?export=view&id=1cqoBfjM31iTjxfnm5Q4em_lEn7mAnig7'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcoramed@gmail.com'
    },
    createdAt: '2023-07-22T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: false
  },
  {
    id: 'luna-007',
    name: 'Luna',
    type: 'Perro',
    age: { months: 7 },
    sex: 'Hembra',
    size: 'Pequeño',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: false,
      vaccineDetails: ['Múltiple', 'Parvovirus']
    },
    rescueStory: {
      origin: 'Rescatada cachorra',
      rescueDate: '2024-05-15',
      condition: 'Cachorra saludable',
      story: 'Luna es una cachorra llena de energía y curiosidad. Le encanta explorar y jugar. Es muy inteligente y está aprendiendo rápidamente. Perfecta para una familia que quiera disfrutar de ver crecer a una perrita desde pequeña.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1dLNtz-jdHSVp3JCqUWeMpEE5gBVAns9W',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1dLNtz-jdHSVp3JCqUWeMpEE5gBVAns9W',
        'https://drive.google.com/uc?export=view&id=1d90C5-n6mAu7DhLttjxp0rQzxYNDXEbN',
        'https://drive.google.com/uc?export=view&id=1dBh-mNndNO9t3bok55IA4mkkEXdnqGKl'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcoramed@gmail.com'
    },
    createdAt: '2024-05-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: true
  },
  {
    id: 'duquesa-008',
    name: 'Duquesa',
    type: 'Perro',
    age: { years: 4 },
    sex: 'Hembra',
    size: 'Grande',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: true,
      vaccineDetails: ['Rabia', 'Múltiple', 'Parvovirus']
    },
    rescueStory: {
      origin: 'Rescatada adulta',
      rescueDate: '2023-09-08',
      condition: 'Adulta en buen estado',
      story: 'Duquesa es una perra elegante y tranquila, como su nombre lo indica. Es muy leal y protectora con su familia. Le gusta los paseos largos y es excelente guardiana. Ideal para alguien que busque una compañera madura y confiable.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1dW8KYWzrW39dLJ1JeNIsFu2D6bqckhxm',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1dW8KYWzrW39dLJ1JeNIsFu2D6bqckhxm',
        'https://drive.google.com/uc?export=view&id=1d_xnu3jq9Nj84a54qDsCwSz42HBf9xlp',
        'https://drive.google.com/uc?export=view&id=1db9xNNseFyJbcdWNIQCctrvn7FPFFPLe'
      ]
    },
    adoptionStatus: 'Disponible',
    city: 'Medellin',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcoramed@gmail.com'
    },
    createdAt: '2023-09-08T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: false
  },
  {
    id: 'sasha-009',
    name: 'Sasha',
    type: 'Perro',
    age: { years: 1, months: 4 },
    sex: 'Hembra',
    size: 'Mediano',
    health: {
      dewormed: true,
      vaccinated: true,
      sterilized: true,
      vaccineDetails: ['Rabia', 'Múltiple']
    },
    rescueStory: {
      origin: 'Rescatada de la calle',
      rescueDate: '2024-01-10',
      condition: 'En buen estado',
      story: 'Sasha es una perrita muy dulce y cariñosa. Le encanta jugar y es muy sociable con otros perros y personas. Está buscando una familia que le dé mucho amor y cuidado.'
    },
    images: {
      main: 'https://drive.google.com/uc?export=view&id=1er4dw5r7mhzTyzMxSvKTZON3pvqYPwRK',
      gallery: [
        'https://drive.google.com/uc?export=view&id=1er4dw5r7mhzTyzMxSvKTZON3pvqYPwRK',
        'https://drive.google.com/uc?export=view&id=1ejyfecqEdJJGaQYufDYAe_3YvYwXyxBi',
        'https://drive.google.com/uc?export=view&id=1eiuT6SMaGRqiPeDFFR-wckxnSk-FxTU5'
      ]
    },
    adoptionStatus: 'Adoptada',
    city: 'Cali',
    petFilters: {
      age: 25,
      nationality: 'colombia'
    },
    shelter: {
      name: 'Refugio Patitas Felices',
      contact: '+57 301 234 5678',
      location: 'Bogotá, Colombia',
      email: 'funcorame@gmail.com'
    },
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    featured: false
  }
];

// Función para formatear la edad de las mascotas
export function formatAge(age: { years?: number; months?: number }): string {
  if (age.years && age.months) {
    return `${age.years} año${age.years > 1 ? 's' : ''} y ${age.months} mes${age.months > 1 ? 'es' : ''}`;
  } else if (age.years) {
    return `${age.years} año${age.years > 1 ? 's' : ''}`;
  } else if (age.months) {
    return `${age.months} mes${age.months > 1 ? 'es' : ''}`;
  }
  return 'Edad no especificada';
} 