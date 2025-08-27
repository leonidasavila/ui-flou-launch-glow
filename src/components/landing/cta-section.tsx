import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that will captivate your audience and elevate your brand to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-studio-purple hover:bg-white/90 text-base md:text-lg px-8 py-3"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-studio-purple text-base md:text-lg px-8 py-3"
            >
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};