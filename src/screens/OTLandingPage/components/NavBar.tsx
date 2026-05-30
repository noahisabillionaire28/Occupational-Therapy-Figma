import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#capabilities" },
];

export const NavBar = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = isContactPage
    ? "bg-white border-b border-stone-100 shadow-sm"
    : scrolled
    ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-teal-700 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className="font-semibold text-stone-800 text-[15px] tracking-tight"
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Clarity OT Clinic
            </span>
          </Link>

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
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isContactPage ? "text-teal-700" : "text-stone-600 hover:text-teal-700"
              }`}
              style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
            >
              Contact
            </Link>
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-600 transition-colors duration-200"
            style={{ fontFamily: "'IBM Plex Sans', Helvetica" }}
          >
            Make a Referral
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

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
