
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9am to 6pm",
    },
    {
      icon: Mail,
      title: "Email",
      details: "support@drive0clock.com",
      description: "24/7 online support",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Business Ave",
      description: "San Francisco, CA 94103",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "9:00 AM - 6:00 PM",
      description: "Monday to Friday",
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions? We're here to help and answer any question you might
            have.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm card-hover text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-accent mb-1">{item.details}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  Subject
                </label>
                <Input placeholder="Message subject" />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-accent text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
