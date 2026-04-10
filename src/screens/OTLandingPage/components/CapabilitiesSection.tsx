const capabilities = [
  {
    limitation: "Difficulty with fine motor tasks",
    intervention: "Fine Motor & Hand Therapy",
    description:
      "Structured intervention for individuals who have lost or not yet developed the dexterity required for writing, self-care, and instrumental daily tasks.",
    image:
      "https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Therapist guiding patient through hand exercises",
    tags: ["Post-stroke", "Arthritis", "Developmental"],
  },
  {
    limitation: "Challenges with activities of daily living",
    intervention: "ADL Rehabilitation",
    description:
      "Functional training and adaptive strategies to support independence in bathing, dressing, cooking, and community navigation when these have been disrupted.",
    image:
      "https://images.pexels.com/photos/7176010/pexels-photo-7176010.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Occupational therapist assisting patient with daily tasks",
    tags: ["Acquired Disability", "Aging", "TBI"],
  },
  {
    limitation: "Sensory processing difficulties",
    intervention: "Sensory Integration Therapy",
    description:
      "Evidence-based approaches for children and adults whose sensory processing differences interfere with learning, behavior, and participation in daily routines.",
    image:
      "https://images.pexels.com/photos/8942104/pexels-photo-8942104.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Child engaged in sensory play therapy with therapist",
    tags: ["Autism Spectrum", "ADHD", "Sensory Processing"],
  },
  {
    limitation: "Reduced workplace functional capacity",
    intervention: "Work Rehabilitation",
    description:
      "Assessment and graded reintegration programs for individuals returning to work following injury, surgery, or chronic condition management.",
    image:
      "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Therapist evaluating patient's ergonomic work setup",
    tags: ["Occupational Injury", "Chronic Pain", "Return to Work"],
  },
  {
    limitation: "Limited participation in community activities",
    intervention: "Community Integration",
    description:
      "Supports individuals in navigating public spaces, transportation, and social settings to restore meaningful participation outside the clinical environment.",
    image:
      "https://images.pexels.com/photos/7551757/pexels-photo-7551757.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Therapist and patient outdoors working on mobility skills",
    tags: ["Neurological", "Physical Disability", "Anxiety"],
  },
  {
    limitation: "Delays in developmental milestones",
    intervention: "Pediatric Development",
    description:
      "Early intervention and school-based support for children experiencing delays in motor, cognitive, or social development that affect educational participation.",
    image:
      "https://images.pexels.com/photos/8942111/pexels-photo-8942111.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Child working with pediatric occupational therapist",
    tags: ["Early Intervention", "School-Based", "Motor Delays"],
  },
];

export const CapabilitiesSection = (): JSX.Element => {
  return (
    <section id="capabilities" className="bg-stone-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p
            className="text-xs font-semibold tracking-widest text-teal-700 uppercase mb-4"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Clinical Approach
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-3xl lg:text-4xl font-normal text-stone-800 max-w-lg leading-tight"
              style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
            >
              Addressing functional limitations through targeted clinical support
            </h2>
            <p
              className="text-sm text-stone-500 max-w-sm leading-relaxed"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Each intervention is structured around a specific functional limitation —
              not a service offering — and adapted to the individual's goals and context.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.intervention}
              className="bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden bg-stone-100">
                <img
                  src={cap.image}
                  alt={cap.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
              </div>

              <div className="p-6">
                <p
                  className="text-xs text-teal-700 font-semibold uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  Addresses: {cap.limitation}
                </p>
                <h3
                  className="text-lg font-normal text-stone-800 mb-3 leading-snug"
                  style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
                >
                  {cap.intervention}
                </h3>
                <p
                  className="text-sm text-stone-500 leading-relaxed mb-4"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 text-xs text-stone-500 bg-stone-50 border border-stone-200 rounded-full"
                      style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
