'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { AnimatedTestimonialsDemo } from '@/components/ui/animated-testimonials';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroVideo from '@/assets/lovable-video.mp4';
import heroFallback from '@/assets/hero-fallback.jpeg';
import promptShowcase from '@/assets/prompt-showcase.jpeg';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyPrompt = () => {
    const promptText = `Create a bold, modern landing page for a concept called 'One Prompt Websites' using the following structure and content:

Brand Style (only use these colors):
Colors: Primary Color: #0F0F0F (Lovable dark UI base)
Accent Color: #FF6C7E (vibrant pink-red)
Text Color: #FFFFFF (white)

UI: Background Gradient: dark to deep blue → purple → soft orange (#0F0F0F → #3B3B98 → #FF7A59)
Font: Inter, bold for headings, regular for body
Components: Rounded corners (lg), generous padding, large vertical spacing
UI Feel: Minimal, modern, AI-themed with a soft glow feel on CTAs

[Full prompt content would continue here...]`;
    
    navigator.clipboard.writeText(promptText);
    alert('Prompt copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Scroll Expansion */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={heroVideo}
        bgImageSrc={heroFallback}
        title="One Prompt. Full Website. 2 Credits."
        date="Built with Lovable"
        scrollToExpand="Scroll to Explore"
        textBlend={true}
      >
        {/* Content after scroll */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Generate a complete, mobile‑friendly landing page using a single Lovable prompt
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Use my custom Lovable prompt to generate a high-converting, mobile-ready website 
            in under 2 minutes. No editor. No coding. Just one prompt, 2 credits, and you're live.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-studio-pink mb-2">2</div>
              <div className="text-muted-foreground">Credits Per Site</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-studio-orange mb-2">100%</div>
              <div className="text-muted-foreground">Mobile Ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-studio-purple mb-2">Live</div>
              <div className="text-muted-foreground">In Under 2 Minutes</div>
            </div>
          </div>
          <Button 
            onClick={() => document.getElementById('try-prompt')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-studio-pink hover:bg-studio-pink/90 text-white text-lg px-8 py-4 rounded-xl shadow-glow"
          >
            Try the Prompt
          </Button>
        </div>
      </ScrollExpandMedia>

      {/* What is One Prompt Website Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-background to-studio-blue/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                What is One Prompt Website?
              </h2>
              <h3 className="text-xl text-studio-pink font-semibold">
                A detailed way to prompt
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After testing dozens of variations, I came up with a great first prompt… 
                a prompt that generates beautiful websites using Lovable with animations, 
                layout logic, mobile responsiveness, and styled sections. The full build 
                costs just 2 credits, with no edits required.
              </p>
            </div>
            
            <div className="gradient-card p-4 rounded-2xl">
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
      </section>

      {/* Why This Prompt Works Section */}
      <AnimatedTestimonialsDemo />

      {/* Container Scroll Animation Section */}
      <div className="bg-gradient-to-br from-studio-blue/20 to-studio-purple/20">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                See the Prompt in Action
              </h2>
              <span className="text-4xl md:text-6xl font-bold mt-1 leading-none bg-gradient-to-r from-studio-pink via-studio-purple to-studio-orange bg-clip-text text-transparent">
                Watch how a 2‑credit Lovable build looks from start to finish
              </span>
            </>
          }
        >
          <img
            src={promptShowcase}
            alt="Prompt Showcase"
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* Prompt Showcase Section */}
      <section id="try-prompt" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            I can build more
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let me know what you think and I can keep building more one-prompt websites for you to use.
          </p>
          <Button 
            onClick={copyPrompt}
            className="bg-studio-pink hover:bg-studio-pink/90 text-white text-lg px-8 py-4 rounded-xl shadow-glow"
          >
            Click to copy Prompt to this website
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-neutral-900 text-center">
        <div className="container mx-auto">
          <p className="text-muted-foreground">
            Built using Lovable with ❤️ by Rod.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;