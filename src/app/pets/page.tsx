import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { samplePets, formatAge } from '@/data/pets';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, HeartHandshake, MapPin } from 'lucide-react';

export default function PetsPage() {
  const allPets = samplePets; // Mostrar todas las mascotas

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
              Nuestras Mascotas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a nuestros adorables compañeros que buscan un hogar lleno de amor. 
              Cada uno tiene una historia única y mucho amor por dar.
            </p>
          </div>
        </section>

        {/* Pets Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allPets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
            
            {allPets.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No hay mascotas disponibles en este momento.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function PetCard({ pet }: { pet: typeof samplePets[0] }) {
  return (
    <Link href={`/pets/${pet.id}`}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-border hover:border-primary/30">
        {/* Imagen principal */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={pet.images.main}
            alt={`Foto de ${pet.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {/* Franja superior para mascotas adoptadas */}
          {pet.adoptionStatus === 'Adoptada' && (
            <div className="absolute top-0 left-0 right-0 bg-red-400/80 text-white text-center py-2 text-xs font-medium">
              ¡Adoptada!
            </div>
          )}
          {/* Badge de estado para disponibles */}
          {pet.adoptionStatus !== 'Adoptada' && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                {pet.adoptionStatus}
              </span>
            </div>
          )}
        </div>
        
        {/* Información */}
        <div className="p-4">
          <h3 className="text-xl font-headline font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {pet.name}
          </h3>
          
          <div className="space-y-1 text-sm text-muted-foreground">
            <p className="flex items-center">
              <span className="font-medium">Tipo:</span> 
              <span className="ml-2 flex items-center">
                {pet.type === 'Perro' ? (
                  <span className="text-lg mr-1">🐕</span>
                ) : (
                  <span className="text-lg mr-1">🐱</span>
                )}
                {pet.type}
              </span>
            </p>
            <p>
              <span className="font-medium">Edad:</span> {formatAge(pet.age)}
            </p>
            <p className="flex items-center">
              <span className="font-medium">Sexo:</span> 
              <span className="ml-2 flex items-center">
                {pet.sex === 'Macho' ? (
                  <Heart className="w-4 h-4 text-blue-500 mr-1" />
                ) : (
                  <HeartHandshake className="w-4 h-4 text-pink-500 mr-1" />
                )}
                {pet.sex}
              </span>
            </p>
            <p className="flex items-center">
              <span className="font-medium">Ciudad:</span> 
              <span className="ml-2 flex items-center">
                <MapPin className="w-4 h-4 text-green-600 mr-1" />
                {pet.city}
              </span>
            </p>
          </div>
          
          {/* Call to action */}
          <div className="mt-4">
            <div className="bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground rounded-lg px-3 py-2 transition-all duration-300">
              <span className="text-accent group-hover:text-accent-foreground font-medium text-sm flex items-center justify-center">
                <Heart className="w-4 h-4 mr-1" />
                ¡Conoce mi historia!
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 