import { Lightbulb, Code, BookOpen, FileText, GraduationCap } from 'lucide-react';
import { useEffect, useRef } from 'react';

const timeline = [
  { icon: Lightbulb, title: 'Idea', description: 'Share your concept or choose ours' },
  { icon: Code, title: 'Development', description: 'Expert coding & implementation' },
  { icon: BookOpen, title: 'Explanation', description: 'One-on-one detailed walkthrough' },
  { icon: FileText, title: 'Documentation', description: 'Complete project documentation' },
  { icon: GraduationCap, title: 'Viva Support', description: 'Preparation for your presentation' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.timeline-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white clip-path-reveal">
            About <span className="text-cyan-400">Our Service</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just deliver projects — we help you understand them completely.
            From concept to viva, we're with you every step of the way.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`timeline-item relative mb-16 md:mb-24 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex md:items-center`}
              >
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 group">
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-900 z-10 hidden md:block"></div>

                <div className="w-full md:w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
