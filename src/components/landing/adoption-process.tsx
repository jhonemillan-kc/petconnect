import { Search, ShieldCheck, Users, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Explora y Encuentra',
    description: 'Explora perfiles detallados con nuestra búsqueda personalizada y filtros avanzados para encontrar tu compañero ideal.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Conecta y Solicita con Seguridad',
    description: 'Comunícate directamente con refugios verificados y envía tu solicitud a través de nuestra plataforma segura y confiable.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Conoce, Convive y Formaliza',
    description: 'Organiza visitas, interactúa con la mascota y, si hay conexión, completa el proceso de adopción de manera transparente.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Bienvenida y Soporte Continuo',
    description: 'Lleva a tu nuevo amigo a casa y cuenta con nuestro acompañamiento y seguimiento post-adopción para una feliz adaptación.',
  },
];

export default function AdoptionProcess() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Adopción Simplificada y Segura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro proceso sencillo y seguro te guía en cada paso para encontrar y adoptar a tu nuevo mejor amigo con facilidad y confianza, incluyendo soporte post-adopción.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 p-3 rounded-full bg-primary/20">
                {step.icon}
              </div>
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
