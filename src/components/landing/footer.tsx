import { PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <PawPrint className="h-6 w-6 text-primary" />
          <p className="font-headline text-lg">PetsConnect</p>
        </div>
        <p>&copy; {new Date().getFullYear()} PetsConnect Latinoamérica. Todos los derechos reservados.</p>
        <p className="text-xs mt-1">Haciendo la adopción de mascotas más simple, una patita a la vez.</p>
      </div>
    </footer>
  );
}
