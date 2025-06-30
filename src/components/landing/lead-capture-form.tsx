"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { submitLead } from '@/actions/lead';
import type { LeadFormData } from '@/lib/types';
import { leadSchema } from '@/lib/types';
import { PawPrint } from 'lucide-react';

export default function LeadCaptureForm() {
  const { toast } = useToast();
  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  async function onSubmit(data: LeadFormData) {
    try {
      console.log("Attempting to submit lead with data:", data); // Log the data being submitted
      const response = await submitLead(data);
      console.log("Response from submitLead:", response); // Log the response from the action
      if (response.success) {
        toast({
          title: '¡Éxito!',
          description: response.message,
        });
        form.reset();
      } else { // Log the error message from the response
        console.error("Error submitting lead:", response.message);
        toast({
          title: 'Error',

          description: response.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',        variant: 'destructive',
      });
    }
  }

  return (
    <section id="lead-form" className="py-16 sm:py-24 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-xl mx-auto shadow-2xl bg-card">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <PawPrint className="h-12 w-12 text-accent" />
            </div>
            <CardTitle className="font-headline text-3xl sm:text-4xl text-foreground">¡Sé el Primero en Enterarte!</CardTitle>
            <CardDescription className="text-muted-foreground text-lg pt-2">
              Únete a nuestra lista de espera y recibe una notificación cuando PetsConnect se lance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej. Ana Pérez" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Ej. ana@ejemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Soy un(a)...</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu rol" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="adopter">Adoptante Potencial</SelectItem>
                          <SelectItem value="center">Centro de Adopción</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Enviando...' : '¡Notifícame!'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
