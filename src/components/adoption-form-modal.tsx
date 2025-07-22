"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Heart, Mail, User, MapPin, Phone, Briefcase, Home, Globe } from 'lucide-react';
import { Pet } from '@/lib/types/pet';

interface AdoptionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  pet: Pet;
}

export default function AdoptionFormModal({ isOpen, onClose, pet }: AdoptionFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    city: '',
    neighborhood: '',
    phone: '',
    occupation: '',
    housingType: '',
    housingOwnership: '',
    nationality: '',
    agreesToProcess: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Función para validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar teléfono colombiano
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(\+57\s?)?[3][0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Resetear errores
    setErrors({});
    const newErrors: {[key: string]: string} = {};

    // Validar email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    // Validar teléfono
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Por favor ingresa un número de teléfono válido (ej: +57 301 234 5678)';
    }

    // Validar edad
    if (parseInt(formData.age) < 18) {
      newErrors.age = 'Debes ser mayor de 18 años para adoptar';
    }

    // Si hay errores, mostrarlos y no enviar
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Preparar datos para enviar al API
    const adoptionData = {
      ...formData,
      petId: pet.id,
      petName: pet.name,
      petType: pet.type,
      petAge: pet.age,
      petSex: pet.sex,
      petSize: pet.size
    };

    try {
      setIsSubmitting(true);
      
      // Enviar al API route
      const response = await fetch('/api/adoption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adoptionData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar la solicitud');
      }

      console.log('Solicitud guardada con ID:', result.id);
      
      // Mostrar mensaje de éxito
      setSubmitSuccess(true);
      
      // Cerrar modal después de 2 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
        // Resetear formulario
        setFormData({
          name: '',
          email: '',
          age: '',
          city: '',
          neighborhood: '',
          phone: '',
          occupation: '',
          housingType: '',
          housingOwnership: '',
          nationality: '',
          agreesToProcess: false
        });
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
      setErrors({ 
        submit: error instanceof Error ? error.message : 'Error al enviar la solicitud' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Limpiar errores cuando el usuario empiece a corregir
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header decorativo */}
        <div className="bg-gradient-to-r from-primary to-accent p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-headline font-bold">
                ¡Quiero adoptar a {pet.name}!
              </h2>
              <p className="text-sm opacity-90">
                Completa tus datos para comenzar
              </p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Grid de campos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Campo Nombre */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground flex items-center">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  Nombre completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ej: María González"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Campo Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ej: maria@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Campo Edad */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-sm font-medium text-foreground flex items-center">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  Edad
                </Label>
                <Input
                  id="age"
                  type="number"
                  min="18"
                  max="99"
                  placeholder="Ej: 30"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.age ? 'border-red-500' : 'border-border'
                  }`}
                  required
                />
                {errors.age && (
                  <p className="text-sm text-red-500">{errors.age}</p>
                )}
              </div>

              {/* Campo Ciudad */}
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Ciudad
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Ej: Bogotá"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Campo Barrio */}
              <div className="space-y-2">
                <Label htmlFor="neighborhood" className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Barrio
                </Label>
                <Input
                  id="neighborhood"
                  type="text"
                  placeholder="Ej: Chapinero"
                  value={formData.neighborhood}
                  onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Campo Teléfono */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  Teléfono de contacto
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Ej: +57 301 234 5678"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.phone ? 'border-red-500' : 'border-border'
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Campo Ocupación */}
              <div className="space-y-2">
                <Label htmlFor="occupation" className="text-sm font-medium text-foreground flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-primary" />
                  Ocupación
                </Label>
                <select
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="empresa">Trabajo en una empresa</option>
                  <option value="independiente">Soy independiente</option>
                </select>
              </div>

              {/* Campo Tipo de Vivienda */}
              <div className="space-y-2">
                <Label htmlFor="housingType" className="text-sm font-medium text-foreground flex items-center">
                  <Home className="w-4 h-4 mr-2 text-primary" />
                  Tipo de vivienda
                </Label>
                <select
                  id="housingType"
                  value={formData.housingType}
                  onChange={(e) => handleInputChange('housingType', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa_rural">Casa rural</option>
                  <option value="casa_con_patio">Casa con patio</option>
                </select>
              </div>

              {/* Campo Vivienda Propia/Alquilada */}
              <div className="space-y-2">
                <Label htmlFor="housingOwnership" className="text-sm font-medium text-foreground flex items-center">
                  <Home className="w-4 h-4 mr-2 text-primary" />
                  Vivienda
                </Label>
                <select
                  id="housingOwnership"
                  value={formData.housingOwnership}
                  onChange={(e) => handleInputChange('housingOwnership', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="propia">Propia</option>
                  <option value="alquilada">Alquilada</option>
                </select>
              </div>

              {/* Campo Nacionalidad */}
              <div className="space-y-2">
                <Label htmlFor="nationality" className="text-sm font-medium text-foreground flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-primary" />
                  Nacionalidad
                </Label>
                <select
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  required
                >
                  <option value="">Selecciona tu país</option>
                  <option value="argentina">Argentina</option>
                  <option value="bolivia">Bolivia</option>
                  <option value="brasil">Brasil</option>
                  <option value="chile">Chile</option>
                  <option value="colombia">Colombia</option>
                  <option value="costa_rica">Costa Rica</option>
                  <option value="cuba">Cuba</option>
                  <option value="ecuador">Ecuador</option>
                  <option value="el_salvador">El Salvador</option>
                  <option value="guatemala">Guatemala</option>
                  <option value="honduras">Honduras</option>
                  <option value="mexico">México</option>
                  <option value="nicaragua">Nicaragua</option>
                  <option value="panama">Panamá</option>
                  <option value="paraguay">Paraguay</option>
                  <option value="peru">Perú</option>
                  <option value="republica_dominicana">República Dominicana</option>
                  <option value="uruguay">Uruguay</option>
                  <option value="venezuela">Venezuela</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            {/* Checkbox de consentimiento */}
            <div className="bg-secondary/10 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreesToProcess"
                  checked={formData.agreesToProcess}
                  onChange={(e) => handleInputChange('agreesToProcess', e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                  required
                />
                <Label htmlFor="agreesToProcess" className="text-sm text-muted-foreground leading-relaxed">
                  Entiendo que este es solo el primer paso y que el refugio se pondrá en contacto conmigo para continuar el proceso de adopción.
                </Label>
              </div>
            </div>

            {/* Mensaje de error general */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600 text-center">{errors.submit}</p>
              </div>
            )}

            {/* Mensaje de éxito */}
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-600 text-center">
                  <Heart className="w-4 h-4 inline mr-1" />
                  ¡Solicitud enviada exitosamente! Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            )}

            {/* Mensaje motivacional */}
            {!submitSuccess && (
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-sm text-muted-foreground text-center">
                  <Heart className="w-4 h-4 inline mr-1 text-accent" />
                  {pet.name} está emocionado por conocerte. Nos pondremos en contacto contigo pronto para coordinar una visita.
                </p>
              </div>
            )}

            {/* Botones */}
            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 py-3"
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={!formData.agreesToProcess || isSubmitting || submitSuccess}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 mr-2" />
                    Enviar solicitud
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 