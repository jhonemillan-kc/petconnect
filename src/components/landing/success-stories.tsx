import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ShieldCheck, UsersRound, HeartHandshake } from 'lucide-react';

const impacts = [
  {
    icon: <Sparkles className="h-10 w-10 text-accent" />,
    title: 'Vidas Transformadas, Un Hogar a la Vez',
    description: 'Conectaremos miles de mascotas necesitadas con familias y personas listas para brindarles amor y una segunda oportunidad, cambiando sus vidas para siempre.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Adopción Ágil, Segura y Confiable',
    description: 'Revolucionaremos el proceso de adopción, haciéndolo más accesible, transparente y seguro tanto para adoptantes como para centros de rescate verificados.',
  },
  {
    icon: <UsersRound className="h-10 w-10 text-accent" />,
    title: 'Comunidad Unida por el Bienestar Animal',
    description: 'Fomentaremos una comunidad activa y solidaria en Latinoamérica, promoviendo la adopción responsable y el apoyo continuo a refugios y animales.',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 sm:py-24 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HeartHandshake className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-4">
            El Impacto Que Crearemos Juntos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            En PetsConnect, estamos construyendo más que una plataforma; estamos creando un movimiento para transformar la adopción de mascotas en Latinoamérica. Únete a nuestra lista de espera y sé parte del cambio desde el inicio.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {impacts.map((item) => (
            <Card key={item.title} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card p-6">
              <CardHeader className="items-center pb-4">
                <div className="p-3 rounded-full bg-accent/20 mb-3 inline-block">
                  {item.icon}
                </div>
                <CardTitle className="font-headline text-xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
