import { useEffect, useRef, useState } from 'react';
import { Star, Award, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Users, title: 'Expert Guidance', description: 'Experienced developers with academic focus' },
  { icon: Star, title: 'Quality Code', description: 'Clean, well-documented, and maintainable' },
  { icon: Award, title: 'Comprehensive Support', description: 'From setup to viva preparation' },
  { icon: Zap, title: 'Quick Delivery', description: 'Timely project completion guaranteed' },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'B.Tech Final Year',
    text: 'The explanation session helped me understand every single line of code. Cleared my viva with confidence!',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'MCA Student',
    text: 'Professional documentation and clean code. My professor was really impressed with the project quality.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'BCA 3rd Year',
    text: 'Best investment for my semester project. Got exactly what I needed with complete support throughout.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'B.Tech 4th Year',
    text: 'Quick delivery and excellent viva preparation material. Highly recommend for major projects!',
    rating: 5,
  },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = stat.icon;

  return (
    <div
      ref={cardRef}
      className="stat-card text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-xl hover:border-cyan-500 transition-all duration-300 hover:scale-105"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-xl font-bold text-cyan-400 mb-3">{stat.title}</div>
      <div className="text-gray-400 text-sm leading-relaxed">{stat.description}</div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Why <span className="text-cyan-400">Choose Us?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Focused on helping students understand and succeed with their academic projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            What Our <span className="text-cyan-400">Students Say</span>
          </h3>

          <div className="relative h-80 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card absolute inset-0 transition-all duration-700 ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : index < currentTestimonial
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="glass-card p-12 rounded-2xl h-full flex flex-col justify-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-cyan-400 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
