import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials = ({ testimonials, autoplay = false }: AnimatedTestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Contenido
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            -
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full gradient-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="aspect-video rounded-xl overflow-hidden mb-6">
                    <img 
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-studio-pink">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-studio-cyan mb-4">
                    {testimonial.designation}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AnimatedTestimonialsDemo = () => {
  const testimonials = [
    {
      quote: "Cantidades, tiempos y riesgos",
      name: "Evaluación de Riesgos",
      designation: "Automatización 886/15",
      src: "https://43908838.fs1.hubspotusercontent-na1.net/hubfs/43908838/1.jpeg",
    },
    {
      quote: "Comparación de cambios con IA",
      name: "Monitoreo de Producción",
      designation: "Medición de Mejoras",
      src: "https://43908838.fs1.hubspotusercontent-na1.net/hubfs/43908838/2.jpeg",
    },
    {
      quote: "Comparación de cambios con IA",
      name: "Medición de Mejoras",
      designation: "Comparación de cambios con IA",
      src: "https://43908838.fs1.hubspotusercontent-na1.net/hubfs/43908838/3.jpeg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
};