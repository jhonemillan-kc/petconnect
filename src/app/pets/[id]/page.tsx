import { samplePets, formatAge } from '@/data/pets';
import { notFound } from 'next/navigation';
import PetPageContent from './pet-page-content';
//import PetPageContent from './pet-page-content';

interface PetPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PetPage({ params }: PetPageProps) {
  const { id } = await params;
  const pet = samplePets.find(p => p.id === id);

  if (!pet) {
    notFound();
  }

  return <PetPageContent pet={pet} />;
} 