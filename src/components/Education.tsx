import { GraduationCap, Award } from 'lucide-react';
import Reveal from './Reveal';

const education = [
  {
    degree: 'Master of Science in Applied Statistics and Decision Analytics',
    institution: 'Western Illinois University',
    period: 'Aug 2023 - Dec 2024',
    type: 'Graduate Degree'
  },
  {
    degree: 'Post Baccalaureate Certificate in Business Analytics',
    institution: 'Western Illinois University',
    period: 'May 2025',
    type: 'Professional Certificate'
  },
  {
    degree: 'Master of Business Administration (MBA) in Artificial Intelligence',
    institution: 'Nexford University',
    period: 'Oct 2022 - Feb 2025',
    type: 'Graduate Degree'
  },
  {
    degree: 'Bachelor of Science in Marketing',
    institution: 'Nnamdi Azikiwe University',
    period: 'Oct 2015 - Nov 2019',
    type: 'Undergraduate Degree'
  }
];

const certifications = [
  'Corporate Finance Foundations - Corporate Finance Institute (2024)',
  'Certificate in Professional Marketing - Chartered Institute of Marketing UK (2022)',
  'Google Analytics Advanced Certification (2024)',
  'Mini-MBA Program - Tekedia Institute (2022)',
  'Executive Certification in Advertising - Pan-Atlantic University (2021)',
  'Digital Marketing - Lagos Business School (2021)',
  'Leadership in Strategic Management - Metropolitan School of Business UK (2022)',
  'Fellow, Chartered Management Consultant - Institute of Management Consultants (2025)',
  'Fellow, National Institution of Professional Engineers and Scientists (NIPES)'
];

const tallies = [
  {
    value: '3',
    label: 'Degrees',
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    color: 'text-blue-700'
  },
  {
    value: '8+',
    label: 'Certifications',
    bg: 'from-amber-50 to-amber-100',
    border: 'border-amber-200',
    color: 'text-amber-700'
  },
  {
    value: '7',
    label: 'Professional Memberships',
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    color: 'text-blue-700'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Education & Certifications
          </h2>
        </Reveal>

        <div className="mb-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Reveal key={index} delay={(index % 2) * 120} className="h-full">
              <div
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 h-full transform hover:-translate-y-1 hover:border-blue-200"
              >
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {edu.type}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  {edu.degree}
                </h4>
                <div className="text-slate-700 font-medium mb-1">
                  {edu.institution}
                </div>
                <div className="text-sm text-slate-500">
                  {edu.period}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-500 p-2 rounded-lg text-white">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Professional Certifications</h3>
            </div>
          </Reveal>

          <Reveal delay={100}>
          <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-200 hover:translate-x-1"
                >
                  <span className="text-amber-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-slate-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tallies.map((tally, index) => (
            <Reveal key={tally.label} delay={index * 120}>
              <div className={`bg-gradient-to-br ${tally.bg} rounded-xl p-6 text-center border ${tally.border} transition-transform duration-300 hover:-translate-y-1`}>
                <div className={`text-3xl font-bold mb-2 ${tally.color}`}>{tally.value}</div>
                <div className="text-slate-700 font-medium">{tally.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
