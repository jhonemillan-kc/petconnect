import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ValueProposition from '@/components/landing/value-proposition';
import LeadCaptureForm from '@/components/landing/lead-capture-form';
import AdoptionProcess from '@/components/landing/adoption-process';
import SuccessStories from '@/components/landing/success-stories';
import Footer from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValueProposition />
        <AdoptionProcess />
        <SuccessStories />
        <LeadCaptureForm />
      </main>
      <Footer />
    </div>
  );
}
