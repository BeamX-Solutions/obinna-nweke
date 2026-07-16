import Reveal from './Reveal';

const stats = [
  { value: '8+', label: 'Years of Experience', color: 'text-blue-600' },
  { value: '50+', label: 'Clients Served', color: 'text-amber-600' },
  { value: '40%', label: 'Avg. Revenue Growth', color: 'text-green-600' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            About Me
          </h2>
        </Reveal>

        <Reveal delay={100}>
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-lg transition-shadow duration-500 hover:shadow-xl">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a Nigerian <span className="font-semibold text-slate-900">Decision Scientist</span> and
            <span className="font-semibold text-slate-900"> Founder & CEO of BeamX Solutions Ltd.</span>, an analytics
            and AI firm dedicated to helping businesses, particularly SMEs across Africa, unlock performance through
            data-driven insights and intelligent technology.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            With over <span className="font-semibold text-slate-900">eight years of hands-on experience</span> in
            finance, marketing, and business intelligence, I currently serve as a Quantitative Analytics Associate at
            <span className="font-semibold text-slate-900"> JPMorgan Chase</span>. I hold a BSc in Marketing from
            Nnamdi Azikiwe University Awka, an MBA, and an MSc in Applied Statistics and Decision Analytics from
            Western Illinois University, USA. I am also a <span className="font-semibold text-slate-900">Fellow of the
            National Institution of Professional Engineers and Scientists (NIPES)</span>.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm the architect of the <span className="font-semibold text-slate-900">Guided Decision Intelligence (GDI)
            Framework</span>, a practical approach that equips decision-makers with structured context and critical
            information to maximize the value of Large Language Models and AI tools for high-quality, actionable
            decisions. My work focuses on blending human instinct with artificial intelligence to drive sustainable
            growth in emerging markets.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            I've delivered real-world solutions for global brands including
            <span className="font-semibold text-slate-900"> McDonald's, Samsung,</span> and
            <span className="font-semibold text-slate-900"> T-Mobile</span>, and I'm a passionate advocate for
            accessible, strategic AI adoption among African enterprises.
          </p>
        </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120}>
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
