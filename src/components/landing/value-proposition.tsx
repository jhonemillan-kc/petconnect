import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, ShieldCheck } from 'lucide-react';

export default function ValueProposition() {
  const propositions = [
    {
      icon: <Heart className="h-10 w-10 text-accent mb-4" />,
      title: 'Para Familias Adoptantes',
      description: 'Descubre al nuevo miembro de tu familia. Navega perfiles verificados y encuentra a tu compañero ideal de forma 100% gratuita. Te guiamos en cada paso para una adopción segura y feliz.',
    },
    {
      icon: <Users className="h-10 w-10 text-accent mb-4" />,
      title: 'Para Centros de Adopción',
      description: 'Dale a tus mascotas la visibilidad que merecen, sin ningún costo. Nuestra plataforma gratuita te ayuda a gestionar perfiles, conectar con adoptantes serios y agilizar tu proceso de adopción.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent mb-4" />,
      title: 'Confianza y Proceso Seguro',
      description: 'Tu tranquilidad es nuestra misión. Verificamos cada centro y ofrecemos un entorno seguro para que solo te preocupes de una cosa: dar y recibir amor incondicional.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir PetsConnect?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos dedicamos a hacer de la adopción de mascotas una experiencia alegre, segura y fluida para todos los involucrados.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {propositions.map((prop) => (
            <Card key={prop.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="flex justify-center">
                  {prop.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-foreground">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
