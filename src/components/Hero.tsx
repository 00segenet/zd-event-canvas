import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4a1b3b94-d8ab-41ce-afaf-351f1044a4a7/hero-bg-345fc321-1775032166314.webp"
          alt="Luxury Corporate Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-400/30 px-3 py-1 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
              Now Booking for 2025-2026
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevating Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Corporate Vision
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            ZD Corporate Events specializes in creating high-impact experiences that inspire, engage, and connect. From international conferences to exclusive leadership retreats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20">
              Explore Our Services
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              View Our Work
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-slate-400 text-sm">Events Executed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">25k+</span>
              <span className="text-slate-400 text-sm">Attendees Impacted</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-3xl font-bold text-white">15+</span>
              <span className="text-slate-400 text-sm">Global Awards</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </div>
  );
};

export default Hero;