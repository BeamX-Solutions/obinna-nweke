import { Mail, Phone, MapPin, Linkedin, Github, Award } from 'lucide-react';

const memberships = [
  'American Statistical Association',
  'National Association of Black Accountants (NABA)',
  'National Society of Black Engineers (NSBE)',
  'International Society for Data Science and Analytics (ISDSA)',
  'Rotary Club of Lekki Golden, District 9110',
  'Forbes BLK Community'
];

const awards = [
  'Regional Award - National Association of Black Accountants (2024)',
  'Best Data Visualization - DataFest25, American Statistical Association (2025)',
  'Fellow - Chartered Management Consultant, Institute of Management Consultants (2025)',
  'Employee of the Month - Axon Analytics (October & July 2021)',
  'Best Male Employee - Axon Analytics (December 2021)',
  'Award of Excellence - Faculty of Management Science, Nnamdi Azikiwe University (2021)'
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
          Interested in collaboration, consulting, or discussing data analytics opportunities?
          Let's connect.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <a
                href="mailto:nwekeobinna15@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              >
                <Mail className="text-blue-400" size={24} />
                <div>
                  <div className="text-sm text-blue-200">Email</div>
                  <div className="font-medium">nwekeobinna15@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <div className="text-sm text-blue-200">Phone</div>
                  <div className="font-medium">+1 (414) 350-6035</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <div className="text-sm text-blue-200">Location</div>
                  <div className="font-medium">Illinois, USA</div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/obinnanweke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              >
                <Linkedin className="text-blue-400" size={24} />
                <div>
                  <div className="text-sm text-blue-200">LinkedIn</div>
                  <div className="font-medium">linkedin.com/in/obinnanweke</div>
                </div>
              </a>

              <a
                href="https://github.com/obinna-nweke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              >
                <Github className="text-blue-400" size={24} />
                <div>
                  <div className="text-sm text-blue-200">GitHub</div>
                  <div className="font-medium">github.com/obinna-nweke</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-blue-400" />
                Professional Memberships
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {memberships.map((membership, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-blue-100"
                  >
                    <span className="text-blue-400 mt-1">●</span>
                    <span>{membership}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Recent Awards</h3>
              <div className="space-y-2">
                {awards.slice(0, 4).map((award, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-blue-100 text-sm"
                  >
                    <span className="text-amber-400 mt-1">★</span>
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-blue-200">
            © 2026 Obinna Nweke. Strategic Analytics Professional.
          </p>
        </div>
      </div>
    </section>
  );
}
