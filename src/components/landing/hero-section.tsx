import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-primary/30 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {/* Decorative background elements or subtle image if needed */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Un Hogar Cambia Su Mundo. <span className="text-primary-foreground drop-shadow-sm">Tú Tienes la Llave.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Imagina la alegría en sus ojos. Cientos de mascotas esperan una familia que les brinde amor y seguridad. PetsConnect es el puente hacia ese encuentro inolvidable. ¡Descubre a tu compañero perfecto y abre tu corazón a una nueva amistad!
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
              <Link href="/pets">Conoce Nuestras Mascotas</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg shadow-2xl overflow-hidden group">
             <Image
                src="/images/landing-ppal1.png"
                alt="Mascotas necesitadas esperando un hogar"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint="needy pets"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
