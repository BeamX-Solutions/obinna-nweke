import { Mail, MapPin, Linkedin, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl transform rotate-6"></div>
              <img
                src="/Obinna headshot BW.jpeg"
                alt="Obinna Nweke"
                className="relative rounded-2xl shadow-2xl w-full max-w-sm mx-auto border-4 border-white"
              />
            </div>
          </div>

          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Obinna Nweke
            </h1>
            <p className="text-2xl lg:text-3xl text-blue-200 mb-6 font-light">
              Strategic Analytics Professional
            </p>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Data-driven decision maker with 8+ years of experience in business analytics, finance,
              and strategic growth. Transforming complex data into actionable insights for global organizations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
              <a
                href="mailto:hi@obinnanweke.com"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-all"
              >
                <Mail size={18} />
                hi@obinnanweke.com
              </a>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <MapPin size={18} />
                Delaware, USA
              </div>
              <a
                href="https://www.linkedin.com/in/obinnanweke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@obinnanweke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-all"
              >
                <BookOpen size={18} />
                Medium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
