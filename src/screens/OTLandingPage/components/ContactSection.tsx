const contactInfo = [
  {
    label: "Referrals",
    value: "Accepted from GPs, specialists, and self-referral",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    label: "Initial Assessment",
    value: "Comprehensive evaluation prior to treatment commencement",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    label: "Medicare & Private Health",
    value: "Bulk billing available with valid GP management plan",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="bg-stone-800 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p
              className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-5"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Contact & Referrals
            </p>
            <h2
              className="text-3xl lg:text-4xl font-normal text-stone-100 mb-6 leading-tight"
              style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
            >
              Inquiries and referrals
              <br />
              are reviewed within 48 hours
            </h2>
            <p
              className="text-base text-stone-400 leading-relaxed mb-10"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              We accept referrals from general practitioners, specialists, and individuals seeking
              assessment directly. An initial intake call is arranged to determine clinical appropriateness
              before scheduling a formal evaluation.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-stone-700 flex items-center justify-center text-teal-400 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-stone-300 mb-0.5"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm text-stone-500 leading-snug"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900/60 rounded-2xl border border-stone-700 p-8 lg:p-10">
            <h3
              className="text-xl font-normal text-stone-100 mb-2"
              style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
            >
              Request Information
            </h3>
            <p
              className="text-sm text-stone-400 mb-8 leading-relaxed"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Provide your contact details and a brief description of the presenting concern.
              We will be in touch to discuss clinical suitability and next steps.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-medium text-stone-400 mb-1.5"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-medium text-stone-400 mb-1.5"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                    style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-stone-400 mb-1.5"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="referralType"
                  className="block text-xs font-medium text-stone-400 mb-1.5"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  Referral Type
                </label>
                <select
                  id="referralType"
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-200 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  defaultValue=""
                >
                  <option value="" disabled>Select referral type</option>
                  <option value="self">Self-referral</option>
                  <option value="gp">GP Referral</option>
                  <option value="specialist">Specialist Referral</option>
                  <option value="hospital">Hospital Discharge</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="concern"
                  className="block text-xs font-medium text-stone-400 mb-1.5"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  Presenting Concern
                </label>
                <textarea
                  id="concern"
                  rows={4}
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 transition-colors resize-none"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                  placeholder="Briefly describe the functional difficulties or concerns you would like to address."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-600 text-white font-medium text-sm py-3 px-6 rounded-lg transition-colors duration-200"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                Submit Enquiry
              </button>

              <p
                className="text-xs text-stone-600 text-center leading-relaxed"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                Your information is handled in accordance with applicable privacy legislation.
                We do not share client data with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
