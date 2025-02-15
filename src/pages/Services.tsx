
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Car,
  Compass,
  GraduationCap,
  MapPin,
  Shield,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Driver Registration",
      description:
        "Quick and easy registration process for professional drivers",
      features: ["Background checks", "License verification", "Vehicle inspection"],
    },
    {
      icon: Compass,
      title: "Job Matching",
      description: "Advanced algorithm to match drivers with suitable jobs",
      features: ["Real-time matching", "Preference settings", "Instant alerts"],
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Comprehensive training for professional development",
      features: ["Safety courses", "Customer service", "Route optimization"],
    },
    {
      icon: Car,
      title: "Vehicle Solutions",
      description: "Flexible vehicle rental and management options",
      features: ["Daily rentals", "Long-term leasing", "Maintenance support"],
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Advanced tracking and route optimization",
      features: ["Real-time location", "Route history", "Performance analytics"],
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance solutions for drivers",
      features: ["Liability coverage", "Vehicle insurance", "Health benefits"],
    },
  ];

  const faqs = [
    {
      question: "How do I register as a driver?",
      answer:
        "Registration is simple! Click the 'Get Started' button, fill out the application form, and submit the required documents. Our team will review your application within 24-48 hours.",
    },
    {
      question: "What are the vehicle requirements?",
      answer:
        "Vehicles must be less than 7 years old, pass our inspection, and meet local regulations. We also offer vehicle rental options if needed.",
    },
    {
      question: "How does the payment system work?",
      answer:
        "Drivers receive weekly payments through direct deposit. Our transparent payment system includes base rates, bonuses, and tips.",
    },
    {
      question: "What training do you provide?",
      answer:
        "We offer comprehensive training programs including safety protocols, customer service, route optimization, and local regulations compliance.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Comprehensive solutions for professional drivers and transportation
            needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-accent text-white">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm card-hover"
              >
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Shield className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Services;
