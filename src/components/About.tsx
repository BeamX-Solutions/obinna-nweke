export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-lg">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Strategic analytics professional with over <span className="font-semibold text-slate-900">8 years of experience</span> in
            business analytics, finance, and data-driven decision-making. My expertise spans marketing, technology,
            and growth strategies, underpinned by an MBA and hands-on success with global organizations like
            <span className="font-semibold text-slate-900"> McDonald's, T-Mobile, JP Morgan Chase,</span> and <span className="font-semibold text-slate-900">Samsung</span>.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            As the <span className="font-semibold text-slate-900">Founder & Lead Consultant</span> of BeamX Solutions,
            I've pioneered AI-powered solutions that democratize strategic planning for emerging African markets,
            serving 20+ Nigerian SMEs and achieving an average client revenue growth of 40% within 6 months.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            I'm passionate about transforming complex data into actionable insights through advanced analytics,
            cross-functional collaboration, and innovative problem-solving. My work combines technical expertise
            in data science with strategic business acumen to drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
            <div className="text-slate-600">Years of Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-amber-600 mb-2">20+</div>
            <div className="text-slate-600">Clients Served</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-slate-600">Avg. Revenue Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
