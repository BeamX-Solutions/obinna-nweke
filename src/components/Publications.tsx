import { FileText, BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'Integrating Consumer Behavior Tracking, Competitive Analysis, and Smart Algorithms for Smarter Business Strategies',
    date: 'February 2024',
    type: 'Research Paper'
  },
  {
    title: 'Integrating AI-Driven Predictive and Prescriptive Analytics for Enhancing Strategic Decision-Making',
    date: 'February 2024',
    type: 'Research Paper'
  },
  {
    title: 'Automated Evaluation Systems Utilizing Data Science for Enhanced Accuracy, Transparency, And Decision Optimization',
    date: 'March 2024',
    type: 'Research Paper'
  },
  {
    title: 'Utilizing AI Driven Forecasting, Optimization, And Data Insights to Strengthen Corporate Strategic Planning',
    date: 'March 2024',
    type: 'Research Paper'
  },
  {
    title: 'Behavioural Analytics in Financial Decision Science: Understanding Decision-Making Patterns for Enhanced Financial Outcomes',
    date: 'March 2024',
    type: 'Research Paper'
  },
  {
    title: 'Strategic Data Utilization For Minority-Owned Businesses: Enhancing Market Penetration, Customer Insights, And Revenue Growth',
    date: 'March 2024',
    type: 'Research Paper'
  }
];

const industryPublications = [
  {
    title: 'How Nigerians Read Email in 2022',
    description: 'Analysis of over 1 billion emails sent on the Netcore Platform',
    type: 'Industry Report'
  },
  {
    title: 'How Nigerians Read Email in 2020',
    description: 'Analysis of over 1 billion emails sent on the Netcore Platform',
    type: 'Industry Report'
  },
  {
    title: 'How Nigerians Read Email in 2018',
    description: 'Analysis of 500 million emails sent on the Netcore Platform',
    type: 'Industry Report'
  },
  {
    title: 'The 21st Century Marketer',
    description: 'Publication endorsed by the Department of Marketing, Nnamdi Azikiwe University and the National Institute of Marketing, Nigeria',
    type: 'Book',
    date: 'July 2019'
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Publications & Research
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 p-2 rounded-lg text-white">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Academic Publications</h3>
            </div>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border border-slate-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {pub.type}
                    </span>
                    <span className="text-xs text-slate-500">
                      {pub.date}
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-semibold leading-tight">
                    {pub.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 p-2 rounded-lg text-white">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Industry Publications</h3>
            </div>

            <div className="space-y-4">
              {industryPublications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border border-slate-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {pub.type}
                    </span>
                    {pub.date && (
                      <span className="text-xs text-slate-500">
                        {pub.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-slate-900 font-semibold mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {pub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Research Focus Areas
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'AI & Machine Learning',
              'Predictive Analytics',
              'Consumer Behavior',
              'Financial Decision Science',
              'Strategic Planning',
              'Data Science',
              'Business Intelligence',
              'Marketing Analytics'
            ].map((area, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
