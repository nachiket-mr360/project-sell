import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { addViewportHighlight } from '../utils/ctaUtils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      addViewportHighlight(sectionRef.current);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to discuss my academic project requirements.');
    window.open(`https://wa.me/8217204054?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918217204054';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:nachiketmr.360@gmail.com';
  };

  const handleGetInTouch = () => {
    handleWhatsApp(); // Prefer WhatsApp for immediate response
  };

  return (
    <section id="contact-section" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Get in touch and we'll respond within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="contact-info">
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-12">
              <button
                onClick={handleWhatsApp}
                className="group w-full flex items-center gap-6 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-xl hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400 mb-1">Chat on WhatsApp</div>
                  <div className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    +91 8217204054
                  </div>
                </div>
              </button>

              <button
                onClick={handleCall}
                className="group w-full flex items-center gap-6 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-xl hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400 mb-1">Call Us Directly</div>
                  <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    +91 8217204054
                  </div>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="group w-full flex items-center gap-6 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-xl hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400 mb-1">Email Us</div>
                  <div className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    nachiketmr.360@gmail.com
                  </div>
                </div>
              </button>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">Quick Response Time</h4>
              <p className="text-gray-300 mb-4">
                We typically respond within 2-4 hours during business hours.
              </p>
              <p className="text-gray-400 text-sm">
                Available: Monday - Saturday, 9 AM - 8 PM IST
              </p>
            </div>
          </div>

          <div className="contact-form">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
