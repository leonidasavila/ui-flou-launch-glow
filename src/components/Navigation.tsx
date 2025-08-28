import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-studio-pink/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Workshop Automatización Planillas Anexo 1 Resolución SRT 886/15
          </h1>
        </div>
      </div>
    </nav>
  );
};