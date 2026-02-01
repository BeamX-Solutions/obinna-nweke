import { Code2, TrendingUp, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Technical Skills',
    color: 'bg-blue-500',
    skills: [
      { name: 'Data Analytics & Visualization', tools: 'SQL, Python, R, Excel, Tableau, Power BI' },
      { name: 'Web Development', tools: 'HTML, CSS, Java' },
      { name: 'Marketing Analytics', tools: 'Omnichannel attribution, ROI measurement, A/B testing, Segmentation' },
      { name: 'Statistical Analysis & ML', tools: 'Clustering, Regression, Prediction, Hypothesis testing' }
    ]
  },
  {
    icon: TrendingUp,
    title: 'Business Skills',
    color: 'bg-blue-500',
    skills: [
      { name: 'Marketing Strategy', tools: 'Integrated marketing campaigns, acquisition, retention, user journey mapping' },
      { name: 'Financial Analysis', tools: 'ROI optimization, budget allocation, cost-benefit analysis' }
    ]
  },
  {
    icon: Users,
    title: 'Soft Skills',
    color: 'bg-blue-500',
    skills: [
      { name: 'Leadership & Communication', tools: 'Executive presentations, data storytelling, cross-functional collaboration' },
      { name: 'Strategic Execution', tools: 'Agile methodologies, stakeholder engagement, process improvement, team leadership' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${category.color} p-3 rounded-lg text-white`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="border-l-2 border-slate-200 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {skill.tools}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Data Science', 'Machine Learning', 'Business Intelligence', 'Marketing Analytics',
              'Financial Modeling', 'Strategic Planning', 'AI Solutions', 'Dashboard Development',
              'Customer Analytics', 'Campaign Optimization', 'Statistical Modeling', 'Data Visualization',
              'Cross-functional Leadership', 'Agile Methodologies', 'Stakeholder Management'
            ].map((competency, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:shadow-md transition-shadow border border-slate-200"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
