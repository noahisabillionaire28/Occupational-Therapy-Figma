import { Link } from "react-router-dom";

const capabilities = [
  {
    limitation: "Difficulty with fine motor tasks",
    intervention: "Fine Motor & Hand Therapy",
    description:
      "For people who have lost or not yet developed the hand dexterity needed for writing, self-care, and everyday tasks — whether following stroke, injury, or developmental delay.",
    image:
      "https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Therapist guiding patient through hand exercises",
    tags: ["Post-Stroke", "Arthritis", "Developmental"],
  },
  {
    limitation: "Challenges with activities of daily living",
    intervention: "ADL Rehabilitation",
    description:
      "Functional training and practical strategies to support independence in bathing, dressing, cooking, and moving through the community when these activities have become difficult.",
    image:
      "https://images.pexels.com/photos/7176010/pexels-photo-7176010.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Occupational therapist assisting patient with daily tasks",
    tags: ["Acquired Disability", "Ageing", "TBI"],
  },
  {
    limitation: "Sensory processing difficulties",
    intervention: "Sensory Integration Therapy",
    description:
      "Evidence-based support for children and adults whose sensory processing differences interfere with learning, regulation, and participation in everyday life.",
    image:
      "https://images.pexels.com/photos/8942104/pexels-photo-8942104.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Child engaged in sensory play therapy with therapist",
    tags: ["Autism Spectrum", "ADHD", "Sensory Processing"],
  },
  {
    limitation: "Reduced capacity to return to work",
    intervention: "Work Rehabilitation",
    description:
      "Assessment and graded reintegration programs for people returning to employment following injury, surgery, or a period of managing a chronic condition.",
    image:
      "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Therapist evaluating patient's ergonomic work setup",
    tags: ["Occupational Injury", "Chronic Pain", "Return to Work"],
  },
  {
    limitation: "Limited participation outside the home",
    intervention: "Community Integration",
    description:
      "Practical support for people navigating public spaces, transport, and social environments — restoring meaningful participation in the community beyond the clinical setting.",
    image:
      "https://images.pexels.com/photos/7551757/pexels-photo-7551757.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Therapist and patient outdoors working on mobility skills",
    tags: ["Neurological", "Physical Disability", "Anxiety"],
  },
  {
    limitation: "Delays in developmental milestones",
    intervention: "Paediatric Development",
    description:
      "Early intervention and school-based support for children experiencing delays in motor, cognitive, or social development that affect their ability to participate in education.",
    image:
      "https://images.pexels.com/photos/8942111/pexels-photo-8942111.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Child working with paediatric occupational therapist",
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-3xl lg:text-4xl font-normal text-stone-800 max-w-lg leading-tight"
              style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
            >
              Each service is organised around a specific functional limitation — not a treatment category
            </h2>
            <p
              className="text-sm text-stone-500 max-w-sm leading-relaxed"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Interventions are tailored to the individual's goals and functional context.
              We measure progress against real-world outcomes that matter to the patient.
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

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-stone-200">
          <p
            className="text-sm text-stone-500"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Not sure which service applies to your situation?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors duration-200"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Request Information
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
