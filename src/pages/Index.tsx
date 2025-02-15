import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2,
  Car,
  CreditCard,
  User
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Vetted drivers and secure payment processing",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your driver's location in real-time",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Business Owner",
      content: "Drive0Clock has transformed how we manage our transportation needs. The service is exceptional!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Fleet Manager",
      content: "The platform's efficiency and reliability have made our operations seamless. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Corporate Client",
      content: "Outstanding service and professional drivers. Drive0Clock is our go-to transportation partner.",
      rating: 5,
    },
  ];

  const benefits = [
    "Professional and vetted drivers",
    "Flexible booking options",
    "Competitive pricing",
    "24/7 customer support",
    "Real-time tracking",
    "Secure payments",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] pt-32 pb-16 px-4 md:pt-40 md:pb-20 relative overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')",
            filter: "brightness(0.1)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-1" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6"
          >
            Professional Driving Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Connect with professional drivers and manage your transportation needs
            efficiently with Drive0Clock.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose Drive0Clock?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg bg-white shadow-sm card-hover"
              >
                <feature.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: User, title: "Create Account", desc: "Sign up in minutes" },
              { icon: Car, title: "Book a Driver", desc: "Choose your service" },
              { icon: MapPin, title: "Track Journey", desc: "Real-time updates" },
              { icon: CreditCard, title: "Easy Payment", desc: "Secure transactions" },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-primary relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience the Drive0Clock Difference
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-accent hover:bg-accent/90 text-white">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Professional driver"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-sm card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of satisfied clients who trust Drive0Clock for their transportation needs.
          </p>
          <Button size="lg" className="bg-white text-accent hover:bg-white/90">
            Sign Up Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
