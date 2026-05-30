import { Link } from "react-router-dom";

export const CtaBanner = (): JSX.Element => {
  return (
    <section className="bg-teal-800 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2
              className="text-3xl lg:text-4xl font-normal text-white mb-3 leading-tight"
              style={{ fontFamily: "'IBM Plex Serif', Helvetica" }}
            >
              Ready to take the next step?
            </h2>
            <p
              className="text-teal-200 text-base leading-relaxed max-w-xl"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Our clinical team reviews all enquiries and referrals within 48 business hours.
              There is no obligation — just a straightforward conversation about your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-800 text-sm font-semibold rounded-lg hover:bg-stone-50 transition-colors duration-200"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Make a Referral
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-teal-400 text-teal-100 text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Request Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
