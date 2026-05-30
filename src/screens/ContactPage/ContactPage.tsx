import { NavBar } from "../OTLandingPage/components/NavBar";
import { Footer } from "../OTLandingPage/components/Footer";

const contactInfo = [
  {
    label: "Referral Sources",
    value:
      "We accept referrals from GPs, specialists, allied health professionals, hospital discharge coordinators, and individuals referring themselves.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    label: "Initial Assessment",
    value:
      "All new patients undergo a comprehensive functional assessment before treatment begins. This ensures your care plan is grounded in a clear picture of your needs and goals.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    label: "Funding & Billing",
    value:
      "We work with Medicare (GP Management Plans), NDIS, private health insurance, and private pay. Our team can help clarify which funding pathway applies to your situation.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    label: "Response Time",
    value:
      "All enquiries and referrals are reviewed within 48 business hours. An intake coordinator will contact you to discuss the referral and arrange next steps.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const ContactPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavBar />

      {/* Page header */}
      <div className="bg-white border-b border-stone-100 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p
            className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-4"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Get in Touch
          </p>
          <h1
            className="text-4xl lg:text-5xl font-normal text-stone-800 mb-4 leading-tight max-w-2xl"
            style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
          >
            Inquiries and Referrals Reviewed
            <br />
            Within 48 Hours
          </h1>
          <p
            className="text-base text-stone-500 max-w-xl leading-relaxed"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Whether you are a patient, carer, or healthcare provider, we make it straightforward
            to connect with our clinical team. Submit your enquiry below and we will be in touch promptly.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left column — referral info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2
                className="text-xl font-normal text-stone-800 mb-6 leading-snug"
                style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
              >
                What to expect when you reach out
              </h2>
              <div className="space-y-7">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold text-stone-700 mb-1"
                        style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm text-stone-500 leading-relaxed"
                        style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinic details */}
            <div className="border-t border-stone-200 pt-8">
              <h3
                className="text-sm font-semibold text-stone-700 mb-4"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                Clinic Details
              </h3>
              <div className="space-y-3 text-sm text-stone-500" style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Level 2, 128 Collins Street, Melbourne VIC 3000
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (03) 9000 0000
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  referrals@clarityot.com.au
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon – Fri, 8:00 am – 5:30 pm
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-stone-200 p-8 lg:p-10 shadow-sm">
              <h2
                className="text-2xl font-normal text-stone-800 mb-2"
                style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
              >
                Submit an Enquiry or Referral
              </h2>
              <p
                className="text-sm text-stone-500 mb-8 leading-relaxed"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                Fill in the details below and a member of our clinical team will review your
                submission and respond within 48 business hours. All information is treated
                with strict confidentiality.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="referralType"
                    className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="referralType"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select the type of enquiry</option>
                    <option value="self">Patient self-referral</option>
                    <option value="carer">Enquiry on behalf of a patient or family member</option>
                    <option value="gp">GP or specialist referral</option>
                    <option value="hospital">Hospital or discharge planning referral</option>
                    <option value="ndis">NDIS plan enquiry</option>
                    <option value="other">General information request</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="serviceArea"
                    className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  >
                    Area of Concern
                  </label>
                  <select
                    id="serviceArea"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select the primary area of concern</option>
                    <option value="fine-motor">Fine motor skills or hand function</option>
                    <option value="adl">Activities of daily living</option>
                    <option value="sensory">Sensory processing</option>
                    <option value="work-rehab">Work rehabilitation</option>
                    <option value="community">Community participation</option>
                    <option value="pediatric">Paediatric development</option>
                    <option value="unsure">Not sure — please advise</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="concern"
                    className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  >
                    Brief Description
                  </label>
                  <textarea
                    id="concern"
                    rows={5}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors resize-none"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    placeholder="Please describe the functional difficulties you or the patient are experiencing, and any relevant clinical history you can share at this stage."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold text-sm py-3.5 px-6 rounded-lg transition-colors duration-200 tracking-wide"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  Submit Enquiry
                </button>

                <p
                  className="text-xs text-stone-400 text-center leading-relaxed"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  Your information is handled in accordance with the Privacy Act 1988 and applicable
                  health records legislation. We do not share client information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
