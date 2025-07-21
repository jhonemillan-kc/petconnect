import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';

interface HeaderProps {
  showWaitlistButton?: boolean;
}

export default function Header({ showWaitlistButton = false }: HeaderProps) {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 shadow-sm sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-headline font-semibold text-foreground">PetsConnect</h1>
        </Link>
        
        {/* Tagline central */}
        <div className="hidden md:flex flex-col items-center">
          <p className="text-sm font-medium text-primary italic leading-tight">
            Conectando corazones,
          </p>
          <p className="text-sm font-medium text-accent italic leading-tight">
            creando familias.
          </p>
        </div>
        
        <nav className="flex items-center space-x-4">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
            <Link href="/pets">Mascotas</Link>
          </Button>
          {showWaitlistButton && (
            <Button asChild variant="outline" className="border-accent text-accent-foreground hover:bg-accent/10 hover:text-accent-foreground">
              <Link href="#lead-form">Únete a la Lista de Espera</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
