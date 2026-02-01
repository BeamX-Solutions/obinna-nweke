import { BarChart3, TrendingUp, Wallet, Wine, Home, MapPin } from 'lucide-react';

const projects = [
  {
    icon: BarChart3,
    title: 'How Nigerians Read Emails',
    year: '2020-2022',
    description: 'Analysis of over 1 billion emails sent by brands in Nigeria on the Netcore Cloud platform. Explored how subject line, day, time, and email category impact metrics like open rate, click rate, and engagement rate.',
    impact: 'Helped marketers execute more effective campaigns across Nigeria',
    color: 'bg-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Pricing Elasticity Model',
    year: '2023',
    description: 'Developed a dynamic pricing framework to analyze user behavior and competitor benchmarks, running A/B tests on tiered price points.',
    impact: '12% increase in Average Revenue Per User (ARPU), leading to company-wide adoption',
    color: 'bg-blue-500'
  },
  {
    icon: Home,
    title: 'Property Sales Forecasting',
    year: '2023',
    description: 'Built and validated ARIMA and SARIMA models to forecast property sales over a 12-month horizon.',
    impact: 'Enhanced investment decision-making by identifying key seasonal trends',
    color: 'bg-blue-500'
  },
  {
    icon: Wine,
    title: 'Wine Preference Prediction',
    year: '2024',
    description: 'Used feature engineering, clustering, and regression to predict wine preferences based on chemical properties.',
    impact: "Revealed alcohol's critical role in consumer choice to guide product development",
    color: 'bg-blue-500'
  },
  {
    icon: Wallet,
    title: 'Unified Revenue Dashboard',
    year: '2024',
    description: 'Created a unified PowerBI dashboard integrating pricing, promotional performance, and customer response metrics.',
    impact: 'Kept stakeholders updated with real-time data, improving decision-making speed',
    color: 'bg-blue-500'
  },
  {
    icon: MapPin,
    title: 'Airbnb Listings in Barcelona',
    year: '2024',
    description: 'Analysis of Airbnb listings to identify patterns in distribution, density, and pricing across neighborhoods. Used geospatial data visualization and statistical methods.',
    impact: 'Extracted actionable insights for market positioning and pricing strategies',
    color: 'bg-blue-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          A selection of data science and analytics projects demonstrating expertise in
          machine learning, predictive modeling, and business intelligence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${project.color} p-3 rounded-lg text-white`}>
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

                <div className="border-t border-slate-200 pt-4 mt-4">
                  <div className="text-xs font-semibold text-slate-500 mb-1">
                    IMPACT
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
