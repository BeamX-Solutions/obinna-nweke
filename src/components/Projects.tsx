import { Gauge, Megaphone, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
  {
    icon: Gauge,
    title: 'Beacon',
    year: 'BeamX Product',
    description: 'A business health check that reads a company\'s sales, customers, costs, and operations, then tells the owner exactly what to fix first. Scores readiness across each pillar and returns tailored growth strategies.',
    impact: 'Over 200 business health assessments completed for Nigerian SMEs',
    href: 'https://beamxsolutions.com/products/beacon',
    cta: 'Check my business',
    color: 'bg-blue-500'
  },
  {
    icon: Megaphone,
    title: 'Luna',
    year: 'BeamX Product',
    description: 'An AI marketing plan builder that generates a data-driven strategy around a business\'s actual customers, budget, and goals, instead of generic advice that does not fit.',
    impact: 'Turns a full marketing plan around in minutes rather than weeks of consulting',
    href: 'https://luna.beamxsolutions.com/',
    cta: 'Build my plan',
    color: 'bg-blue-500'
  },
  {
    icon: Rocket,
    title: 'Stellar',
    year: 'BeamX Product',
    description: 'A business idea validator that scores feasibility with AI-powered market analysis, so founders can test new ideas and expansion plans before committing time and money.',
    impact: '100+ ideas validated, with an 87% launch success rate',
    href: 'https://stellar.beamxsolutions.com/',
    cta: 'Test my idea',
    color: 'bg-blue-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Self-serve AI products built at BeamX Solutions, turning business data into
            decisions on business health, marketing strategy, and new ideas.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 120} className="h-full">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 h-full transform hover:-translate-y-1.5 hover:border-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${project.color} p-3 rounded-lg text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="border-t border-slate-200 pt-4 mt-auto">
                  <div className="text-xs font-semibold text-slate-500 mb-1">
                    IMPACT
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    {project.impact}
                  </p>
                </div>

                <span className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  {project.cta}
                  <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1"> →</span>
                </span>
              </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
