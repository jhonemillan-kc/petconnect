import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, ShieldCheck } from 'lucide-react';

export default function ValueProposition() {
  const propositions = [
    {
      icon: <Heart className="h-10 w-10 text-accent mb-4" />,
      title: 'Para Adoptantes',
      description: 'Encuentra a tu compañero ideal con nuestra búsqueda personalizada y filtros avanzados. Te acompañamos en un proceso seguro con perfiles verificados y ofrecemos seguimiento post-adopción para una integración exitosa.',
    },
    {
      icon: <Users className="h-10 w-10 text-accent mb-4" />,
      title: 'Para Centros de Adopción',
      description: 'Amplía tu alcance y conecta con más adoptantes. Nuestra plataforma ofrece gestión simplificada de perfiles, solicitudes y seguimiento, optimizando tus recursos.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent mb-4" />,
      title: 'Confianza y Proceso Seguro',
      description: 'Tu tranquilidad es nuestra prioridad. Garantizamos un proceso de adopción seguro con perfiles de mascotas y centros verificados, comunicación protegida y acompañamiento constante.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir PetConnect?
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
