import { Code2, BookOpen, FileText, MessageSquare, HelpCircle, Settings, Layout, Database } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Complete Source Code',
    description: 'Well-structured, commented code following best practices',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Settings,
    title: 'Step-by-Step Setup',
    description: 'Detailed installation and configuration guide',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Project Documentation',
    description: 'Professional PDF/Word documentation ready for submission (extra charges applied)',
    color: 'from-blue-500 to-cyan-500',
  },
  
  {
    icon: HelpCircle,
    title: 'Viva Question Prep',
    description: 'Common questions and answers for your presentation',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BookOpen,
    title: 'Minor Customizations',
    description: 'Small adjustments to match your specific requirements',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Layout,
    title: 'Clean UI Design',
    description: 'Modern, responsive interface with smooth user experience',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Database,
    title: 'Proper Database Structure',
    description: 'Optimized schema design with proper relationships',
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function Features() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Everything You <span className="text-cyan-400">Need</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive support to ensure your project success from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-xl hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-cyan-500 to-purple-500"></div>

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
