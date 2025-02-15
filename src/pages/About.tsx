
import { motion } from "framer-motion";
import { Award, Users, Rocket, Building2 } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize driver services",
    },
    {
      year: "2021",
      title: "Nationwide Expansion",
      description: "Extended our services across major cities",
    },
    {
      year: "2022",
      title: "Tech Innovation",
      description: "Launched our advanced driver matching algorithm",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded for excellence in transportation services",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in transportation management",
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      description: "Former tech lead at major ride-sharing platforms",
    },
    {
      name: "David Wilson",
      role: "Operations Director",
      description: "Expert in fleet management and driver relations",
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
            About Drive0Clock
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Transforming the future of professional driving services through
            innovation and excellence.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Journey
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-sm card-hover"
              >
                <span className="text-2xl font-bold text-accent mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-sm card-hover text-center"
              >
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
