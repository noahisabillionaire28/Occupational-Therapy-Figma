import { Link } from "react-router-dom";

const careSettings = [
  {
    sector: "Paediatrics",
    description: "Early intervention and developmental support for children across all ages, from infants through school age.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5C12 4.5 8 7 8 11a4 4 0 008 0c0-4-4-6.5-4-6.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v6" />
      </svg>
    ),
  },
  {
    sector: "Geriatrics",
    description: "Supporting older adults to maintain independence and daily function as age-related changes emerge.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    sector: "Rehabilitation Centres",
    description: "Post-acute recovery following surgery, stroke, acquired brain injury, and orthopaedic procedures.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    sector: "Hospital Systems",
    description: "Inpatient and outpatient occupational therapy embedded within multidisciplinary clinical teams.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    sector: "Private Practice",
    description: "Specialised one-to-one therapy for individuals with complex or long-term functional rehabilitation needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    sector: "Schools & Education",
    description: "Classroom support and developmental programs to help children access and engage with their educational environment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export const CredibilitySection = (): JSX.Element => {
  return (
    <section id="credibility" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p
            className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-4"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Care Settings
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-3xl lg:text-4xl font-normal text-stone-800 max-w-lg leading-tight"
              style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
            >
              Trusted by patients and providers across a range of care settings
            </h2>
            <p
              className="text-sm text-stone-500 max-w-xs leading-relaxed"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Our therapists work within established clinical frameworks across
              multiple specialties, age groups, and institutional environments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100 border border-stone-100 rounded-xl overflow-hidden">
          {careSettings.map((setting) => (
            <div
              key={setting.sector}
              className="bg-white p-7 hover:bg-stone-50/80 transition-colors duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-4 group-hover:bg-teal-100 transition-colors duration-200">
                {setting.icon}
              </div>
              <h3
                className="text-base font-semibold text-stone-800 mb-2"
                style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
              >
                {setting.sector}
              </h3>
              <p
                className="text-sm text-stone-500 leading-relaxed"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                {setting.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-stone-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "15+", label: "Years of Clinical Practice" },
              { value: "2,400+", label: "Patients Supported" },
              { value: "AOTA", label: "Member Certified" },
              { value: "6", label: "Specialisation Areas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl lg:text-3xl font-normal text-teal-700 mb-1"
                  style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-stone-500 font-medium leading-snug"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 text-white text-sm font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-200"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Make a Referral
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
