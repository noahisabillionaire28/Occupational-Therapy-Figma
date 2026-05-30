import { useState, useEffect } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const NavBar = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-teal-700 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold text-stone-800 text-[15px] tracking-tight" style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}>
              Clarity OT Clinic
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-stone-600 hover:text-teal-700 transition-colors duration-200 font-medium"
                style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-teal-700 border border-teal-700 rounded hover:bg-teal-50 transition-colors duration-200"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Request Information
          </a>

          <button className="md:hidden p-2 text-stone-600" aria-label="Open menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
