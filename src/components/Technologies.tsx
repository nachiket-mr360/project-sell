import { Code2 } from 'lucide-react';

const technologies = [
  { name: 'HTML5', color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
  { name: 'React', color: 'from-cyan-500 to-blue-500' },
  { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
  { name: 'PHP', color: 'from-purple-500 to-indigo-500' },
  { name: 'MySQL', color: 'from-blue-500 to-indigo-500' },
  { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
  { name: 'Python', color: 'from-blue-500 to-yellow-500' },
  { name: 'Django', color: 'from-green-700 to-green-500' },
  { name: 'Flask', color: 'from-gray-700 to-gray-500' },
  { name: 'Java', color: 'from-red-500 to-orange-500' },
  { name: 'Spring Boot', color: 'from-green-500 to-emerald-600' },
  { name: 'Angular', color: 'from-red-500 to-pink-500' },
  { name: 'Vue.js', color: 'from-green-500 to-teal-500' },
];

export default function Technologies() {
  return (
    <section id="technologies-section" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Technologies We <span className="text-cyan-400">Master</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From web development to databases, we cover all major technologies for your academic projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-badge group relative"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <div className={`px-8 py-4 rounded-xl bg-gradient-to-r ${tech.color} text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Don't See Your Technology?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              We work with many more technologies. Contact us to discuss your specific requirements.
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
