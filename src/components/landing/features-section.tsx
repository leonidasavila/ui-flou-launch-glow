import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Smartphone, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Creative Design',
    description: 'Stunning visual designs that captivate and inspire your audience with modern aesthetics.',
    icon: Palette,
  },
  {
    title: 'Mobile First',
    description: 'Responsive designs optimized for all devices, ensuring perfect experiences everywhere.',
    icon: Smartphone,
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized performance and blazing-fast load times for the best user experience.',
    icon: Zap,
  },
  {
    title: 'Interactive',
    description: 'Engaging animations and smooth interactions that bring your vision to life.',
    icon: Sparkles,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Why Choose Our Studio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, technology, and innovation to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-studio-purple/20 hover:border-studio-purple/40 transition-all duration-300 hover:shadow-glow group">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-all duration-300">
                      <IconComponent 
                        className="w-6 h-6 text-studio-purple group-hover:text-studio-pink transition-all duration-300" 
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};