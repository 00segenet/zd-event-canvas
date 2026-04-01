import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* Why Choose Us Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-0 hidden md:block" />
              </div>
              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Mission</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">We bring people together to create lasting impact.</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  With over a decade of experience in the global events industry, ZD Corporate has become synonymous with innovation, reliability, and unparalleled service. We believe every event is an opportunity to tell a story and build a community.
                </p>
                <ul className="space-y-4">
                  {[
                    "Global network of premium venues and vendors",
                    "Cutting-edge event technology and integration",
                    "Full-service logistics and project management",
                    "Dedicated sustainability and inclusivity focus"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 text-blue-600 rounded-full p-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Portfolio />
        
        {/* Testimonials */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "ZD Corporate transformed our annual conference into an experience our team will never forget. Their attention to detail is unmatched.",
                  author: "Sarah Jenkins",
                  role: "VP of Marketing, TechFlow",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                  quote: "From the first meeting to the final cleanup, the professionalism and creativity of the ZD team was evident. Highly recommend.",
                  author: "David Chen",
                  role: "CEO, Innovate Global",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                  quote: "Their ability to handle complex international logistics for 2,000+ people seamlessly was truly impressive.",
                  author: "Elena Rodriguez",
                  role: "Events Director, Zenith Group",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                }
              ].map((t, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <p className="text-slate-600 italic mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-slate-900">{t.author}</p>
                      <p className="text-slate-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;