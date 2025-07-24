"use client";

import { useState } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { samplePets, formatAge } from '@/data/pets';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin, Shield, Syringe, Scissors, HeartHandshake } from 'lucide-react';
import AdoptionFormModal from '@/components/adoption-form-modal';

export default function PetPageContent({ pet }: { pet: typeof samplePets[0] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section con imagen principal */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src={pet.images.main}
            alt={`Foto principal de ${pet.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">
              {pet.name}
            </h1>
            <p className="text-xl opacity-90 flex items-center">
              <span className="flex items-center">
                {pet.type === 'Perro' ? (
                  <span className="text-xl mr-1">🐕</span>
                ) : (
                  <span className="text-xl mr-1">🐱</span>
                )}
                {pet.type}
              </span> • {formatAge(pet.age)} • 
              <span className="flex items-center ml-1 mr-1">
                {pet.sex === 'Macho' ? (
                  <Heart className="w-4 h-4 text-blue-300 mr-1 ml-1" />
                ) : (
                  <HeartHandshake className="w-4 h-4 text-pink-300 mr-1 ml-1" />
                )}
                {pet.sex}
              </span>
              • {pet.size}
            </p>
          </div>
          {/* Badge de estado */}
          <div className="absolute top-8 right-8">
            <span className={`px-4 py-2 rounded-full font-medium ${
              pet.adoptionStatus === 'Adoptada' 
                ? 'bg-red-500 text-white' 
                : 'bg-primary text-primary-foreground'
            }`}>
              {pet.adoptionStatus}
            </span>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Columna principal - Historia y galería */}
            <div className="lg:col-span-2 space-y-8">
              {/* Historia de rescate */}
              <section className="bg-secondary/10 rounded-xl p-6">
                <h2 className="text-2xl font-headline font-bold text-foreground mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-primary mr-2" />
                  Mi Historia
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Lugar de rescate</p>
                      <p className="text-muted-foreground">{pet.rescueStory.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Fecha de rescate</p>
                      <p className="text-muted-foreground">
                        {new Date(pet.rescueStory.rescueDate).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="font-medium text-foreground mb-2">Mi historia completa</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {pet.rescueStory.story}
                    </p>
                  </div>
                </div>
              </section>

              {/* Galería de imágenes */}
              {pet.images.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl font-headline font-bold text-foreground mb-6">
                    Más fotos mías
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pet.images.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`Foto ${index + 1} de ${pet.name}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar - Información y adopción */}
            <div className="space-y-6">
              {/* Información básica */}
              <section className="bg-white rounded-xl p-6 shadow-lg border border-border">
                <h2 className="text-xl font-headline font-bold text-foreground mb-4">
                  Información básica
                </h2>
                <div className="space-y-3">
                  <InfoItem label="Nombre" value={pet.name} />
                  <TypeInfoItem label="Tipo" type={pet.type} />
                  <InfoItem label="Edad" value={formatAge(pet.age)} />
                  <SexInfoItem label="Sexo" sex={pet.sex} />
                  <InfoItem label="Tamaño" value={pet.size} />
                  <CityInfoItem label="Ciudad" city={pet.city} />
                </div>
              </section>

              {/* Estado de salud */}
              <section className="bg-white rounded-xl p-6 shadow-lg border border-border">
                <h2 className="text-xl font-headline font-bold text-foreground mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  Estado de salud
                </h2>
                <div className="space-y-3">
                  <HealthItem 
                    icon={<Shield className="w-4 h-4" />}
                    label="Desparasitada" 
                    value={pet.health.dewormed} 
                  />
                  <HealthItem 
                    icon={<Syringe className="w-4 h-4" />}
                    label="Vacunada" 
                    value={pet.health.vaccinated} 
                  />
                  <HealthItem 
                    icon={<Scissors className="w-4 h-4" />}
                    label="Esterilizada" 
                    value={pet.health.sterilized} 
                  />
                  
                  {pet.health.vaccineDetails && pet.health.vaccineDetails.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="font-medium text-foreground text-sm mb-2">Vacunas aplicadas:</p>
                      <div className="flex flex-wrap gap-1">
                        {pet.health.vaccineDetails.map((vaccine, index) => (
                          <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                            {vaccine}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Call to action para adopción */}
              <section className={`rounded-xl p-6 text-center ${
                pet.adoptionStatus === 'Adoptada' ? 'bg-red-50 border border-red-200' : 'bg-accent/10'
              }`}>
                <h2 className="text-xl font-headline font-bold text-foreground mb-4">
                  {pet.adoptionStatus === 'Adoptada' ? '¡Ya tengo familia!' : '¿Quieres adoptarme?'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {pet.adoptionStatus === 'Adoptada' 
                    ? '¡Gracias a todos por el interés! Ya encontré mi hogar para siempre.' 
                    : '¡Me encantaría ser parte de tu familia! Contáctanos para comenzar el proceso de adopción.'
                  }
                </p>
                <Button 
                  disabled={pet.adoptionStatus === 'Adoptada'}
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full ${
                    pet.adoptionStatus === 'Adoptada' 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-accent hover:bg-accent/90 text-accent-foreground'
                  }`}
                >
                  {pet.adoptionStatus === 'Adoptada' ? 'Ya adoptada' : 'Iniciar proceso de adopción'}
                </Button>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Modal de adopción */}
      <AdoptionFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pet={pet}
      />
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

function TypeInfoItem({ label, type }: { label: string; type: 'Perro' | 'Gato' }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium text-foreground flex items-center">
        {type === 'Perro' ? (
          <span className="text-lg mr-1">🐕</span>
        ) : (
          <span className="text-lg mr-1">🐱</span>
        )}
        {type}
      </span>
    </div>
  );
}

function SexInfoItem({ label, sex }: { label: string; sex: 'Macho' | 'Hembra' }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium text-foreground flex items-center">
        {sex === 'Macho' ? (
          <Heart className="w-4 h-4 text-blue-500 mr-1" />
        ) : (
          <HeartHandshake className="w-4 h-4 text-pink-500 mr-1" />
        )}
        {sex}
      </span>
    </div>
  );
}

function CityInfoItem({ label, city }: { label: string; city: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium text-foreground flex items-center">
        <MapPin className="w-4 h-4 text-green-600 mr-1" />
        {city}
      </span>
    </div>
  );
}

function HealthItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className={value ? "text-green-600" : "text-muted-foreground"}>
          {icon}
        </span>
        <span className="text-muted-foreground">{label}:</span>
      </div>
      <span className={`font-medium ${value ? "text-green-600" : "text-muted-foreground"}`}>
        {value ? "✅ Sí" : "❌ No"}
      </span>
    </div>
  );
} 