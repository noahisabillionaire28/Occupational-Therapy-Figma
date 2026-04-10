import { NavBar } from "./components/NavBar";
import { PositioningSection } from "./components/PositioningSection";
import { CredibilitySection } from "./components/CredibilitySection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export const OTLandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-stone-50 scroll-smooth">
      <NavBar />
      <main>
        <PositioningSection />
        <CredibilitySection />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
