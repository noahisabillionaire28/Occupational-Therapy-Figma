import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Services", href: "/#capabilities" },
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#credibility" },
  { label: "Contact", href: "/contact" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-teal-700 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className="text-sm font-semibold text-stone-400 tracking-tight"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Clarity OT Clinic
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              link.href.startsWith("/contact") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs text-stone-500 hover:text-stone-300 transition-colors"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-stone-500 hover:text-stone-300 transition-colors"
                  style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-600 transition-colors duration-200"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Make a Referral
            </Link>
            <p
              className="text-xs text-stone-600 hidden sm:block"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              &copy; {new Date().getFullYear()} Clarity OT Clinic
            </p>
          </div>
        </div>
        <p
          className="text-xs text-stone-600 text-center mt-6 sm:hidden"
          style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
        >
          &copy; {new Date().getFullYear()} Clarity OT Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
