import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Quantitative Analytics Associate',
    company: 'JP Morgan Chase',
    period: 'Oct 2025 - Present',
    location: 'USA',
    highlights: [
      'Analyze card acquisition investment opportunities and portfolio performance metrics using advanced statistical modeling',
      'Collaborate with cross-functional teams to evaluate customer acquisition costs and lifetime value models',
      'Develop automated reporting frameworks and data visualization dashboards for portfolio profitability tracking'
    ]
  },
  {
    title: 'Founder & Lead Consultant',
    company: 'BeamX Solutions',
    period: 'Present',
    location: 'Nigeria/USA',
    highlights: [
      'Founded and scaled data intelligence consultancy serving 20+ Nigerian SMEs with AI-powered solutions',
      'Achieved average client revenue growth of 40% within 6 months of implementation',
      'Reduced client customer acquisition costs by 45% and improved marketing ROI by 3x',
      'Trained 20+ Nigerian university students who secured roles at top-tier companies'
    ]
  },
  {
    title: 'Decision Scientist',
    company: 'tms (a HAVI company)',
    period: 'July 2024 - May 2025',
    location: 'Chicago, USA',
    highlights: [
      "Led analytics for McDonald's Angel Reese National Campaign tracking customer behavior and loyalty",
      'Analyzed multi-channel customer interactions to uncover friction points and behavioral shifts',
      'Built executive dashboards in Tableau and PowerBI for global stakeholders',
      'Delivered weekly performance insights for T-Mobile Tuesday promotions, boosting quarterly engagement by ~20%'
    ]
  },
  {
    title: 'Technology & Analytics',
    company: 'Western Illinois University',
    period: 'Feb 2024 - Dec 2024',
    location: 'Illinois, USA',
    highlights: [
      'Redesigned college website using Google Analytics data, improving application conversion rates',
      'Directed promotional campaigns attracting over 1,000 student attendees',
      'Created and managed official YouTube channel for digital presence enhancement',
      'Recognized by the Dean for outstanding contributions to the College of Business and Technology'
    ]
  },
  {
    title: 'Chief Marketing Officer',
    company: 'Buildzone Housing Solutions',
    period: 'Mar 2022 - Dec 2022',
    location: 'Lagos, Nigeria',
    highlights: [
      'Launched company brand and inaugural estate project, generating over $200,000 in revenue within four months',
      'Developed multi-channel marketing campaign generating 500+ qualified leads',
      'Structured marketing team from ground up with role-specific performance metrics'
    ]
  },
  {
    title: 'Senior Analyst, Business & Finance',
    company: 'TinkaSave',
    period: 'Mar 2022 - July 2023',
    location: 'Lagos, Nigeria',
    highlights: [
      'Developed dynamic pricing models using Python and scikit-learn, reducing customer acquisition costs by 21%',
      'Created Tableau dashboards cutting manual reporting by 50%',
      'Implemented A/B testing frameworks resulting in 17% increase in acquisition to activation rate'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all border border-slate-200 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Building2 size={18} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-500 mt-1.5 flex-shrink-0">●</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
