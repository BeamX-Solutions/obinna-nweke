import { Newspaper, Building2, Sparkles, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const featuredPress = [
  {
    title: 'Focus on Real Business Challenges Before Adopting AI, Experts Urge Firms',
    outlet: 'Punch',
    url: 'https://punchng.com/focus-on-real-business-challenges-before-adopting-ai-experts-urge-firms/'
  },
  {
    title: 'Nweke Highlights Value of Data-Driven Marketing at Scale',
    outlet: 'ThisDay',
    url: 'https://www.thisdaylive.com/2021/10/08/nweke-highlights-value-of-data-driven-marketing-at-scale/?clear'
  },
  {
    title: 'Obinna, Kayode to Co-Host Industry Webinar on Consumer Insights Predictions for 2022',
    outlet: 'Vanguard',
    url: 'https://www.vanguardngr.com/2022/02/obinna-kayode-to-co-host-industry-webinar-on-consumer-insights-predictions-for-2022/'
  },
  {
    title: 'Obinna Nweke: Pioneering Green Real Estate Marketing in Benin City',
    outlet: 'The Guardian',
    url: 'https://guardian.ng/property/obinna-nweke-pioneering-green-real-estate-marketing-in-benin-city/'
  },
  {
    title: 'Trust, Not Only Tech, Drives AI Adoption in Nigerian Banking — Nweke',
    outlet: 'The Guardian',
    url: 'https://guardian.ng/news/trust-not-only-tech-drives-ai-adoption-in-nigerian-banking-nweke'
  },
  {
    title: 'Nigerian Decision Scientist Creates Framework for AI Adoption in Business',
    outlet: 'Vanguard',
    url: 'https://www.vanguardngr.com/2026/04/nigerian-decision-scientist-creates-framework-for-ai-adoption-in-business/'
  }
];

const beamxPress = [
  {
    title: 'BeamX Solutions Completes 200 Business Health Assessments as Nigerian SMEs Embrace Data-Driven Growth',
    outlet: 'BusinessDay',
    url: 'https://businessday.ng/bd-weekender/article/beamx-solutions-completes-200-business-health-assessments-as-nigerian-smes-embrace-data-driven-growth/'
  },
  {
    title: 'BeamX Solutions Relaunches with AI Tools Aimed at Growth-Stage Businesses',
    outlet: 'ThisDay',
    url: 'https://www.thisdaylive.com/2025/06/03/beamx-solutions-relaunches-with-ai-tools-aimed-at-growth-stage-businesses/'
  }
];

const otherFeatures = [
  {
    title: 'Brands Must Extend Presence in Metaverse — Experts',
    outlet: 'Marketing Edge',
    url: 'https://marketingedge.com.ng/brands-must-extend-presence-in-metaverse-experts/'
  },
  {
    title: 'Brands Build Better Engagement by Digitally Tilting Towards Gen Z',
    outlet: 'Marketing Edge',
    url: 'https://marketingedge.com.ng/brands-build-better-engagement-by-digitally-tilting-towards-gen-z/'
  }
];

interface PressItem {
  title: string;
  outlet: string;
  url: string;
}

function PressCard({ item, delay }: { item: PressItem; delay: number }) {
  return (
    <Reveal delay={delay}>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 transform hover:-translate-y-1 hover:border-blue-200 h-full"
      >
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {item.outlet}
          </span>
          <ExternalLink
            size={16}
            className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1"
          />
        </div>
        <h4 className="text-slate-900 font-semibold leading-tight group-hover:text-blue-700 transition-colors">
          {item.title}
        </h4>
      </a>
    </Reveal>
  );
}

export default function Press() {
  return (
    <section id="press" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Press & Media
          </h2>
        </Reveal>

        <div className="mb-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 p-2 rounded-lg text-white">
                <Newspaper size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Featured In</h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPress.map((item, index) => (
              <PressCard key={index} item={item} delay={index * 80} />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500 p-2 rounded-lg text-white">
                  <Building2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">BeamX in the News</h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {beamxPress.map((item, index) => (
                <PressCard key={index} item={item} delay={index * 80} />
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500 p-2 rounded-lg text-white">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Other Features</h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {otherFeatures.map((item, index) => (
                <PressCard key={index} item={item} delay={index * 80} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
