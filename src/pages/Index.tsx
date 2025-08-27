import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/VideoBackground";
import RegistrationForm from "@/components/RegistrationForm";
import FloatingParticles from "@/components/FloatingParticles";
import promptPrecisionImage from "@/assets/prompt-precision.jpeg";
import only2CreditsImage from "@/assets/only-2-credits.jpeg";
import productionReadyImage from "@/assets/production-ready.jpeg";

const Index = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-start justify-start overflow-hidden">
        <VideoBackground 
          src="https://cdn.midjourney.com/video/ed764fa7-8343-4a9d-933a-3e15b12708c8/0.mp4"
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow fade-in-up">
            UiFlou Product Launch Event
          </h1>
          
          <Button 
            onClick={scrollToRegistration}
            variant="hero"
            size="lg"
            className="rounded-xl px-8 py-4 text-lg floating-animation"
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* What is One Prompt Website Section */}
      <section className="relative py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12 rounded-3xl floating-animation">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold neon-glow">
                  What is One Prompt Website?
                </h2>
                <h3 className="text-xl text-accent font-semibold">
                  A detailed way to prompt
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  After testing dozens of variations, I came up with a great first prompt… 
                  a prompt that generates beautiful websites using Lovable with animations, 
                  layout logic, mobile responsiveness, and styled sections. The full build 
                  costs just 2 credits, with no edits required.
                </p>
              </div>
              
              <div className="glass-card p-4 rounded-2xl">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/xhW9up0Gi2E"
                    title="One Prompt Website Demo"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Prompt Works Section */}
      <section className="relative py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold neon-glow mb-6">
              Why This Prompt Works
            </h2>
            <h3 className="text-xl text-accent font-semibold mb-8">
              Designed to Maximise Quality, Speed, and Simplicity
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              This isn't just a prompt, it's a repeatable system that includes specific code instructions, 
              modules and understand what libraries Lovable can access. It took a lot of credits and sweat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <div className="glass-card p-8 rounded-2xl floating-animation">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={promptPrecisionImage} 
                  alt="Prompt Precision"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold neon-glow mb-4">Prompt Precision</h4>
              <p className="text-muted-foreground leading-relaxed">
                I spent hours fine-tuning this prompt to align with Lovable's visual model. 
                It uses reliable components, avoids bloated features, and delivers layouts 
                that just work, straight from generation.
              </p>
            </div>

            {/* Block 2 */}
            <div className="glass-card p-8 rounded-2xl floating-animation">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={only2CreditsImage} 
                  alt="Only 2 Credits"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold neon-glow mb-4">Only 2 Credits</h4>
              <p className="text-muted-foreground leading-relaxed">
                Yep — a full site for just 2 Lovable credits. You don't need to open the Visual Editor 
                or burn tokens with guesswork. Just run the prompt, and the site is ready to tweak or publish.
              </p>
            </div>

            {/* Block 3 */}
            <div className="glass-card p-8 rounded-2xl floating-animation">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={productionReadyImage} 
                  alt="Production-Ready Output"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold neon-glow mb-4">Production-Ready Output</h4>
              <p className="text-muted-foreground leading-relaxed">
                These aren't toy sites. Each build is mobile-optimised, scroll-friendly, and designed 
                to launch. You'll get a home page with sections, CTAs, and smooth UX — right out of the gate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="relative py-24 px-8 md:px-16">
        <div className="max-w-2xl mx-auto">
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-8 md:px-16 text-center">
        <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            © 2024 UiFlou. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;