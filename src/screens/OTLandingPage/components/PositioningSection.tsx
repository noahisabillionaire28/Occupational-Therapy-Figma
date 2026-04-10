const conditionPills = [
  "Neurological Conditions",
  "Developmental Delays",
  "Post-Surgical Recovery",
  "Mobility Limitations",
  "Pediatric Development",
  "Geriatric Independence",
];

export const PositioningSection = (): JSX.Element => {
  return (
    <section className="relative min-h-screen flex items-center bg-stone-50 overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100/80 rounded-full translate-x-[-50%] translate-y-[50%] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl animate-fade-up" style={{ animationDelay: "0s" }}>
          <p
            className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Occupational Therapy
          </p>

          <h1
            className="text-4xl lg:text-5xl xl:text-6xl font-normal text-stone-800 leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s", fontFamily: "'IBM Plex Serif', Helvetica", lineHeight: "1.12" }}
          >
            Restoring Independence
            <br />
            in Everyday Activities
          </h1>

          <p
            className="text-lg text-stone-500 leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.35s", fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Targeted occupational therapy for individuals managing injuries, developmental delays,
            neurological conditions, and mobility limitations — focused on measurable functional improvement.
          </p>

          <div
            className="flex flex-wrap gap-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {conditionPills.map((condition) => (
              <span
                key={condition}
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-stone-600 bg-white border border-stone-200 rounded-full"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                {condition}
              </span>
            ))}
          </div>
        </div>

        <div
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative w-[380px] xl:w-[440px]">
            <img
              src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Occupational therapist working with patient on hand exercises"
              className="w-full h-[480px] xl:h-[540px] object-cover rounded-2xl"
              loading="eager"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-stone-900/10" />

            <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-stone-100">
              <p className="text-xs text-stone-400 font-medium mb-0.5" style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}>
                Evidence-Based Practice
              </p>
              <p className="text-sm font-semibold text-stone-800" style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}>
                Individualized Treatment Plans
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <a href="#credibility" aria-label="Scroll down" className="flex flex-col items-center gap-1 text-stone-400 hover:text-stone-600 transition-colors">
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};
