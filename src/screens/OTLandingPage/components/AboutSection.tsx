const credentials = [
  "Master of Science, Occupational Therapy",
  "Licensed OT — State Board Certified",
  "AOTA Member in Good Standing",
  "NDT Certified Practitioner",
  "Sensory Integration Certification (SIPT)",
];

export const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Occupational therapist in clinical setting"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-stone-900/10" />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-teal-700 text-white rounded-xl p-4 shadow-lg max-w-[180px]">
              <p
                className="text-xs font-medium opacity-80 mb-0.5"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                Clinical Focus
              </p>
              <p
                className="text-sm font-semibold leading-snug"
                style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
              >
                Function-First Rehabilitation
              </p>
            </div>
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-5"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Clinical Background
            </p>
            <h2
              className="text-3xl lg:text-4xl font-normal text-stone-800 mb-6 leading-tight"
              style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
            >
              Practice grounded in evidence,
              <br />
              guided by individual goals
            </h2>
            <p
              className="text-base text-stone-500 leading-relaxed mb-6"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              With over 15 years of clinical practice across hospital, rehabilitation,
              and community settings, our therapists bring specific expertise to each
              functional challenge presented.
            </p>
            <p
              className="text-base text-stone-500 leading-relaxed mb-8"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Treatment plans are developed through formal assessment and updated based
              on documented outcomes — not predetermined protocols. Every intervention
              is justified by a clearly stated functional goal.
            </p>

            <div className="space-y-2.5">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-teal-600 flex-shrink-0" />
                  <p
                    className="text-sm text-stone-600"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  >
                    {cred}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
