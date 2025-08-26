import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate email sending (in a real app, you'd call your email service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Registration Confirmed!",
        description: "Thank you! You are registered for the UiFlou Product Launch Event.",
      });
      
      setFormData({ name: '', email: '' });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="glass-card p-8 rounded-2xl floating-animation">
      <h2 className="text-3xl font-bold mb-2 neon-glow">Register for the Launch Event</h2>
      <p className="text-muted-foreground mb-8">Secure your spot at this exclusive event</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="glass-card border-accent/30 focus:border-accent transition-colors"
            placeholder="Enter your full name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="glass-card border-accent/30 focus:border-accent transition-colors"
            placeholder="Enter your email address"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-cyan transition-all duration-300 text-white font-semibold py-3 rounded-xl neon-border"
        >
          {isSubmitting ? "Confirming..." : "Confirm My Spot"}
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;