import AboutSection from '../components/AboutSection';
import { Linkedin, Mail } from 'lucide-react';
import founderPortrait from '../../asset/logo.png';

export default function About() {
  return (
    <div className="pt-20">
      <AboutSection />

      {/* Founder & CEO */}
      <section className="py-16 bg-gradient-to-br from-sky-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-sm font-medium bg-white/70 backdrop-blur ring-1 ring-sky-200 text-sky-700">
              Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Founder & CEO – Mr. Subhash Chandra
            </h2>
            <p className="text-gray-600">Founder & Chief Executive Officer</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-sky-100">
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="group relative aspect-[4/5] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-sky-300">
                  <img src={founderPortrait as unknown as string} alt="Founder portrait" className="w-full h-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mr. Subhash Chandra</h3>
                  <p className="text-sky-700 font-medium mb-4">Founder & Chief Executive Officer</p>
                  <p className="text-gray-700 leading-relaxed">
                    7+ years of experience in banking and finance. MBA in Marketing & Finance. Leading Finmitra with a mission to deliver transparent, fast, and accessible financial solutions.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="group/link inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-100 transition-all hover:border-sky-300 hover:text-sky-700 hover:shadow-md"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-blue-500 text-white">
                        <Linkedin className="h-4 w-4" />
                      </span>
                      LinkedIn
                    </a>
                    <a
                      href="mailto:info@finmitra.com"
                      aria-label="Email"
                      className="group/mail inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-100 transition-all hover:border-sky-300 hover:text-sky-700 hover:shadow-md"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-blue-500 text-white">
                        <Mail className="h-4 w-4" />
                      </span>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-sm font-medium bg-white/70 backdrop-blur ring-1 ring-sky-200 text-sky-700">
              Our Core Values
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              The Principles That Power FinMitra
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We embed trust, integrity, customer obsession and excellence in every interaction.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50 to-white p-6 ring-1 ring-sky-100">
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Transparency */}
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
                    <div className="absolute inset-0 rounded-full ring-4 ring-white" />
                    <div className="relative z-10 w-full h-full rounded-full grid place-items-center text-white text-3xl font-bold">
                      T
                    </div>
                    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600">Complete transparency in all our processes, terms, and conditions.</p>
                </div>
              </div>

              {/* Integrity */}
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
                    <div className="absolute inset-0 rounded-full ring-4 ring-white" />
                    <div className="relative z-10 w-full h-full rounded-full grid place-items-center text-white text-3xl font-bold">
                      I
                    </div>
                    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600">We uphold the highest standards of integrity in everything we do.</p>
                </div>
              </div>

              {/* Customer First */}
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
                    <div className="absolute inset-0 rounded-full ring-4 ring-white" />
                    <div className="relative z-10 w-full h-full rounded-full grid place-items-center text-white text-3xl font-bold">
                      C
                    </div>
                    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
                  <p className="text-gray-600">Your financial success and satisfaction are our top priorities.</p>
                </div>
              </div>

              {/* Excellence */}
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
                    <div className="absolute inset-0 rounded-full ring-4 ring-white" />
                    <div className="relative z-10 w-full h-full rounded-full grid place-items-center text-white text-3xl font-bold">
                      E
                    </div>
                    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">Commitment to excellence in service delivery and customer support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-sm font-medium bg-white/70 backdrop-blur ring-1 ring-sky-200 text-sky-700">
              Why Partner With Us?
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Experience, Reach, and Speed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to secure the right loan—done right.</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur p-6 ring-1 ring-sky-100">
            <div className="pointer-events-none absolute -top-14 -left-10 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-10 h-60 w-60 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Card 1 */}
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500" />
                    <div className="absolute inset-0 rounded-xl ring-4 ring-white" />
                    <div className="relative z-10 w-full h-full rounded-xl grid place-items-center text-white text-2xl font-extrabold">
                      01
                    </div>
                    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600 leading-relaxed">Our experienced financial advisors provide personalized guidance to help you make informed decisions about your loan requirements.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500" />
                    <div className="absolute inset-0 rounded-xl ring-4 ring-white" />
                    <div className="relative z-10 w-full h-full rounded-xl grid place-items-center text-white text-2xl font-extrabold">
                      02
                    </div>
                    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wide Network</h3>
                  <p className="text-gray-600 leading-relaxed">Access to 50+ leading banks and NBFCs ensures you get the best rates and terms tailored to your specific needs.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-sky-300/60 via-blue-400/60 to-sky-300/60 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-sky-300">
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500" />
                    <div className="absolute inset-0 rounded-xl ring-4 ring-white" />
                    <div className="relative z-10 w-full h-full rounded-xl grid place-items-center text-white text-2xl font-extrabold">
                      03
                    </div>
                    <div className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Processing</h3>
                  <p className="text-gray-600 leading-relaxed">Streamlined application process with digital documentation and quick approval turnaround times for your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
