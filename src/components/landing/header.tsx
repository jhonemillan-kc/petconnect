import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 shadow-sm sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-headline font-semibold text-foreground">PetsConnect</h1>
        </Link>
        <Button asChild variant="outline" className="border-accent text-accent-foreground hover:bg-accent/10 hover:text-accent-foreground">
          <Link href="#lead-form">Únete a la Lista de Espera</Link>
        </Button>
      </div>
    </header>
  );
}
