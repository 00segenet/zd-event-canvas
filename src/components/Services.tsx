import React from 'react';
import { motion } from 'framer-motion';
import { Users, Presentation, Rocket, Trophy, Globe, Zap } from 'lucide-react';

const services = [
  {
    title: 'International Conferences',
    description: 'Scalable solutions for global gatherings, including hybrid and virtual event technology.',
    icon: Globe,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4a1b3b94-d8ab-41ce-afaf-351f1044a4a7/service-conference-fb58ab54-1775032160275.webp',
  },
  {
    title: 'Product Launches',
    description: 'Immersive brand experiences designed to generate buzz and drive immediate results.',
    icon: Rocket,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4a1b3b94-d8ab-41ce-afaf-351f1044a4a7/service-launch-d546cbfe-1775032160562.webp',
  },
  {
    title: 'Leadership Retreats',
    description: 'Exclusive, high-end environments focused on strategic alignment and team synergy.',
    icon: Users,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4a1b3b94-d8ab-41ce-afaf-351f1044a4a7/service-retreat-5b758f2b-1775032159932.webp',
  },
  {
    title: 'Gala & Award Nights',
    description: 'Elegant ceremonies that celebrate excellence with premium production and design.',
    icon: Trophy,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4a1b3b94-d8ab-41ce-afaf-351f1044a4a7/service-gala-9f6e1346-1775032160474.webp',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3"
          >
            What We Offer
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Tailored Excellence for <br /> Every Occasion
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We don't just plan events; we architect experiences. Our team handles every detail from concept to execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl h-[400px] flex items-end"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              
              <div className="relative p-8 w-full">
                <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                  Learn More <Zap size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;