const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-teal-700 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className="text-sm font-semibold text-stone-400 tracking-tight"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Clarity OT Clinic
            </span>
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-stone-500 hover:text-stone-300 transition-colors"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p
            className="text-xs text-stone-600"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            &copy; {new Date().getFullYear()} Clarity OT Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
