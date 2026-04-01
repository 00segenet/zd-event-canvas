import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Portfolio = () => {
  const categories = ['All', 'Conferences', 'Retreats', 'Gala', 'Launches'];

  const projects = [
    { title: 'Global Tech Summit 2024', category: 'Conferences', image: 'https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Luxe Brand Launch', category: 'Launches', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Executive Retreat Bali', category: 'Retreats', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Fortune 500 Awards', category: 'Gala', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h2>
            <h3 className="text-4xl font-bold text-slate-900">Success Stories</h3>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4 overflow-x-auto pb-4 md:pb-0">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  idx === 0 ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold">View Details</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 text-lg">{project.title}</h4>
              <p className="text-slate-500 text-sm">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;