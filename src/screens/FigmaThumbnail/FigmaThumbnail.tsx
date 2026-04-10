import { Card, CardContent } from "../../components/ui/card";

// Data for nav links
const navLinks = [
  { label: "Home", active: false },
  { label: "About me", active: false },
  { label: "Services", active: true },
  { label: "Contact", active: false },
];

const secondaryNavLinks = [
  { label: "Style Guide" },
  { label: "Changelog" },
  { label: "Licenses" },
];

// Data for service icons
const serviceTypes = [
  {
    icon: "/user-icon.svg",
    alt: "User icon",
    title: "Individual",
    subtitle: "Help for me",
  },
  {
    icon: "/users-icon.svg",
    alt: "Users icon",
    title: "Couples",
    subtitle: "Help for us",
  },
  {
    icon: "/usersfour-icon.svg",
    alt: "Usersfour icon",
    title: "For Family",
    subtitle: "Help for your family",
  },
];

// Data for specialties cards
const specialtiesCards = [
  {
    title: "Anxiety disorders",
    description:
      "This is a sample description for a specialties item. Feel free to replace it as desired.",
  },
  {
    title: "Anxiety disorders",
    description:
      "This is a sample description for a specialties item. Feel free to replace it as desired.",
  },
  {
    title: "Anxiety disorders",
    description:
      "This is a sample description for a specialties item. Feel free to replace it as desired.",
  },
  {
    title: "Anxiety disorders",
    description:
      "This is a sample description for a specialties item. Feel free to replace it as desired.",
  },
];

// Data for social media icons
const socialIcons = [
  { src: "/instagram-logo.svg", alt: "Instagram logo" },
  { src: "/twitter-logo.svg", alt: "Twitter logo" },
  { src: "/linkedin-logo.svg", alt: "Linkedin logo" },
  { src: "/figma-logo.svg", alt: "Figma logo" },
];

// Pagination dots data
const paginationDots = [{ active: true }, { active: false }, { active: false }];

export const FigmaThumbnail = (): JSX.Element => {
  return (
    <div className="bg-[#dee9de] overflow-hidden w-full min-w-[1600px] min-h-[960px] relative">
      {/* Background image */}
      <img
        className="absolute top-6 left-[682px] w-[918px] h-[936px]"
        alt="Bg"
        src="/bg.png"
      />

      {/* Decorative blur circle */}
      <div className="absolute top-[185px] left-[-636px] w-[1527px] h-[1632px] bg-[#f1e9d54c] rounded-[763.5px/816px] blur-[64.5px]" />

      {/* Main website preview card */}
      <div className="inline-flex flex-col h-[946px] items-start absolute top-[121px] left-[808px] bg-[#f9faf9] rounded-xl shadow-thumbnail-shadow overflow-hidden">
        <div className="flex flex-col items-start relative self-stretch w-full">
          {/* Hero Section */}
          <section className="flex flex-col h-[489.98px] items-center justify-center gap-[34.59px] pt-[80.7px] pb-[34.59px] px-0 relative self-stretch w-full bg-[linear-gradient(184deg,rgba(241,233,213,1)_0%,rgba(226,214,192,1)_100%)]">
            <div className="flex w-[830.09px] items-center gap-[34.59px] px-[17.29px] py-0 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[345.87px] items-start gap-[17.29px] relative">
                {/* Hero background decorative image */}
                <img
                  className="absolute top-[-58px] left-[331px] w-[322px] h-[379px]"
                  alt="Hero BG image"
                  src="/hero-bg-image.png"
                />
                {/* Hero avatar */}
                <img
                  className="absolute top-[-170px] left-[234px] w-[419px] h-[490px] object-cover"
                  alt="Hero avatar image"
                  src="/hero-avatar-image.png"
                />

                <h1 className="mt-[-0.72px] font-normal text-neutralneutral-800 text-[38.9px] leading-[38.9px] relative flex items-center self-stretch [font-family:'IBM_Plex_Serif',Helvetica] tracking-[0]">
                  Let&apos;s build a world of healthy minds.
                </h1>

                <p className="self-stretch text-neutralneutral-800 text-[14.4px] leading-[21.6px] relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal tracking-[0]">
                  Create understanding and growth in significant aspects of your
                  life.
                </p>

                <div className="inline-flex items-start gap-[8.65px] relative flex-[0_0_auto]">
                  {/* Schedule a free call button */}
                  <div className="inline-flex h-[40.35px] items-center justify-center px-[17.29px] py-[11.53px] relative flex-[0_0_auto] bg-primaryprimary-500 rounded-[4.32px] border-[1.44px] border-solid border-[#009da3]">
                    <span className="mt-[-2.29px] [font-family:'Inter',Helvetica] font-normal text-neutral-100 text-[13px] tracking-[0.14px] leading-[18.7px] relative flex items-center justify-center w-fit text-center whitespace-nowrap">
                      Schedule a free call
                    </span>
                  </div>

                  {/* Contact me button */}
                  <div className="h-[40.35px] px-[17.29px] py-[11.53px] flex-[0_0_auto] rounded-[4.32px] border-[1.08px] border-solid inline-flex items-center justify-center relative border-[#009da3]">
                    <span className="mt-[-2.93px] mb-[-0.77px] [font-family:'IBM_Plex_Sans',Helvetica] font-medium text-primaryprimary-600 text-[11.5px] tracking-[0] leading-[20.8px] relative flex items-center justify-center w-fit text-center whitespace-nowrap">
                      Contact me
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="flex flex-col items-center gap-[34.59px] px-0 py-[34.59px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite">
            <div className="justify-center flex w-[830.09px] items-center gap-[34.59px] px-[17.29px] py-0 relative flex-[0_0_auto]">
              {/* Left: Counseling info */}
              <div className="flex items-center justify-center gap-[34.59px] px-0 py-[17.29px] relative flex-1 grow">
                {/* Avatar circle */}
                <div className="relative w-[138.35px] h-[138.35px] flex-shrink-0">
                  <div className="absolute top-[17px] left-[17px] w-[104px] h-[104px] flex bg-white rounded-full overflow-hidden">
                    <img
                      className="w-[103.76px] h-[103.76px] object-cover"
                      alt="Surface"
                      src="/surface-8rs5ugac5iw-unsplash-1.png"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-[138px] h-[138px] rounded-[69.17px] border-[0.72px] border-solid border-[#b4c6d8]" />
                </div>

                <div className="flex flex-col items-start gap-[11.53px] relative flex-1 grow">
                  {/* Badge */}
                  <div className="inline-flex flex-col h-[17.29px] items-center justify-around px-[11.53px] py-0 relative bg-secondarysecondary-500 rounded-[71.34px]">
                    <span className="flex items-center justify-center w-fit text-secondarysecondary-800 text-[10.1px] text-center leading-[15.1px] whitespace-nowrap relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal tracking-[0]">
                      Online Services for Adults
                    </span>
                  </div>

                  <h2 className="font-normal text-neutralneutral-800 text-[27.4px] leading-[32.9px] relative flex items-center self-stretch [font-family:'IBM_Plex_Serif',Helvetica] tracking-[0]">
                    Comprehensive online counseling
                  </h2>

                  <p className="relative self-stretch [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-neutralneutral-800 text-[11.5px] tracking-[0] leading-[20.8px]">
                    Expertly tailored strategies and techniques, designed
                    specifically for you.
                  </p>

                  {/* Service type icons */}
                  <div className="flex items-center gap-[23.06px] relative self-stretch w-full flex-[0_0_auto]">
                    {serviceTypes.map((service, index) => (
                      <div
                        key={index}
                        className="inline-flex flex-col items-start gap-[2.88px] relative flex-[0_0_auto]"
                      >
                        <img
                          className="relative w-[23.06px] h-[23.06px]"
                          alt={service.alt}
                          src={service.icon}
                        />
                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                          <span className="w-fit mt-[-0.72px] text-neutralneutral-800 text-[10.1px] leading-[15.1px] whitespace-nowrap relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal tracking-[0]">
                            {service.title}
                          </span>
                          <span className="relative w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-neutralneutral-800 text-[10.1px] tracking-[0] leading-[15.1px] whitespace-nowrap">
                            {service.subtitle}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Assessment card */}
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-center justify-center gap-[8.65px] relative flex-[0_0_auto]">
                  <div className="w-[334.34px] px-[17.29px] py-[8.65px] flex flex-col items-center relative flex-[0_0_auto]">
                    <div className="px-[25.94px] py-0 self-stretch w-full flex flex-col items-center relative flex-[0_0_auto]">
                      <Card className="flex flex-col items-center justify-center gap-[14.41px] p-[34.59px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite rounded-[17.29px] shadow-[3.6px_6.49px_0px_#e2e8e2ab] border-0">
                        <CardContent className="flex flex-col items-center justify-center gap-[14.41px] p-0 w-full">
                          <img
                            className="relative w-[83.33px] h-[86.47px]"
                            alt="Services card"
                            src="/services-card-illustration.svg"
                          />

                          <p className="relative flex items-center justify-center self-stretch [font-family:'IBM_Plex_Serif',Helvetica] font-medium text-neutralneutral-800 text-[15.9px] text-center tracking-[0] leading-[19.0px]">
                            Assessments
                          </p>

                          <img
                            className="relative w-[121.16px] h-px ml-[-6.49px]"
                            alt="Divider"
                            src="/divider.svg"
                          />

                          <p className="relative flex items-center justify-center self-stretch [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-neutralneutral-800 text-[11.5px] text-center tracking-[0] leading-[20.8px]">
                            Comprehensive evaluations to identify and understand
                            individual needs, leading to personalized treatment
                            plans.
                          </p>

                          <div className="h-[28.82px] px-[8.65px] py-[5.76px] rounded-[2.88px] border-[1.44px] border-solid inline-flex items-center justify-center relative border-[#009da3]">
                            <span className="relative flex items-center justify-center w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-medium text-primaryprimary-600 text-[10.1px] text-center tracking-[0] leading-[10.1px] whitespace-nowrap">
                              Learn More
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Pagination dots */}
                  <div className="inline-flex h-[14.41px] items-center justify-center gap-[7.21px] relative">
                    {paginationDots.map((dot, index) => (
                      <div
                        key={index}
                        className={`relative w-[8.65px] h-[8.65px] rounded-[4.32px] ${dot.active ? "bg-neutralneutral-400" : "border-[0.72px] border-solid border-[#b4c6d8]"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="items-center gap-[34.59px] px-0 py-[34.59px] relative self-stretch w-full flex-[0_0_auto] bg-primaryprimary-100 flex flex-col">
            <img
              className="absolute top-[-586px] -left-2 w-[369px] h-[369px]"
              alt="About card image"
              src="/about-card-image.png"
            />
            <img
              className="absolute top-[-586px] -left-2 w-[369px] h-[369px]"
              alt="About card image"
              src="/about-card-image-1.png"
            />

            <div className="justify-center flex w-[830.09px] items-center gap-[34.59px] px-[17.29px] py-0 relative flex-[0_0_auto]">
              <div className="w-[345.87px] items-start justify-center gap-[17.29px] relative flex flex-col">
                <div className="inline-flex flex-col h-[17.29px] items-center justify-around px-[11.53px] py-0 relative bg-[#ffcd93] rounded-[71.34px]">
                  <span className="flex items-center justify-center w-fit text-secondarysecondary-800 text-[10.1px] text-center leading-[15.1px] whitespace-nowrap relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal tracking-[0]">
                    About me
                  </span>
                </div>

                <h2 className="self-stretch relative [font-family:'IBM_Plex_Serif',Helvetica] font-normal text-neutralneutral-800 text-[27.4px] tracking-[0] leading-[32.9px]">
                  My mission is bring out <br />
                  awareness and promote changes.
                </h2>
              </div>

              <div className="h-[134.02px] items-start gap-[17.29px] relative flex-1 grow flex flex-col">
                <div className="flex flex-col items-start gap-[5.76px] relative self-stretch w-full flex-[0_0_auto]">
                  <span className="flex items-center w-fit mt-[-0.72px] text-primaryprimary-600 whitespace-nowrap relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[14.4px] tracking-[0] leading-[21.6px]">
                    Elaine Herdani
                  </span>

                  <p className="flex items-center self-stretch text-[11.5px] leading-[20.8px] relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-neutralneutral-800 tracking-[0]">
                    With more than 22 years, I&#39;m here to bring out awareness
                    and understanding, create change and personal growth within
                    you.
                  </p>
                </div>

                <div className="h-[25.94px] px-[8.65px] py-[5.76px] rounded-[2.88px] border-[1.44px] border-solid inline-flex items-center justify-center relative border-[#009da3]">
                  <span className="relative flex items-center justify-center w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-medium text-primaryprimary-600 text-[10.1px] text-center tracking-[0] leading-[10.1px] whitespace-nowrap">
                    See More
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[830.09px] items-end justify-center gap-[34.59px] px-[17.29px] py-0 relative flex-[0_0_auto]">
              <div className="relative w-[582.21px] h-[340.11px] bg-white rounded-[17.29px] overflow-hidden">
                <img
                  className="absolute top-[-789px] left-[-360px] w-[601px] h-[901px] object-cover"
                  alt="About card image"
                  src="/about-card-image-2.png"
                />
              </div>

              <div className="w-[248px] items-center justify-center gap-[17.29px] p-[34.59px] absolute top-[83px] left-[17px] bg-neutralwhite rounded-[17.29px] flex flex-col">
                <p className="flex items-center self-stretch mt-[-0.72px] text-[11.5px] leading-[20.8px] relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-neutralneutral-800 tracking-[0]">
                  The relationship with the therapist should feel safe,
                  comfortable and trusting. I will give you regular feedback, so
                  you can assess your progress and ask for feedback.
                </p>
              </div>

              <blockquote className="relative flex items-center justify-center self-stretch [font-family:'Caveat',Helvetica] font-normal text-neutralneutral-600 text-[25.9px] text-center tracking-[-0.29px] leading-[31.7px]">
                &#34;My vision is a world of healthy minds&#34;
              </blockquote>
            </div>
          </section>

          {/* Specialties Section */}
          <section className="flex flex-col items-center gap-[34.59px] px-0 py-[34.59px] relative self-stretch w-full flex-[0_0_auto] bg-primaryprimary-200">
            <img
              className="absolute w-[41.82%] h-[81.78%] top-[-238.56%] left-0"
              alt="Bg absolute"
              src="/bg-absolute.png"
            />

            <div className="flex w-[830.09px] items-center gap-[34.59px] px-[17.29px] py-0 relative flex-[0_0_auto]">
              <img
                className="relative flex-[0_0_auto] mt-[-1264.68px] ml-[-146.35px]"
                alt="Specialities images"
                src="/specialities-images.svg"
              />

              <div className="flex flex-col items-start justify-center gap-[34.59px] px-0 py-[69.17px] relative flex-1 grow">
                <h2 className="relative flex items-center w-[345.87px] mt-[-0.72px] [font-family:'IBM_Plex_Serif',Helvetica] font-normal text-neutralneutral-800 text-[27.4px] tracking-[0] leading-[32.9px]">
                  Range of specialties to meet your specific needs.
                </h2>

                <div className="relative w-[622.57px] h-[207.52px] mr-[-138.35px]">
                  <div className="flex flex-col w-[623px] h-52 items-start gap-[34.59px] relative">
                    <div className="inline-flex items-start gap-[17.29px] relative flex-[0_0_auto] mr-[-167.17px]">
                      {specialtiesCards.map((card, index) => (
                        <div
                          key={index}
                          className="inline-flex flex-col items-start relative flex-[0_0_auto]"
                        >
                          <Card className="flex flex-col w-[184.46px] h-[161.41px] items-center px-[28.82px] py-[34.59px] relative bg-neutralwhite rounded-[17.29px] shadow-[3.6px_6.49px_0px_#e2e8e2ab] border-0">
                            <CardContent className="flex flex-col items-center justify-center gap-[8.65px] relative self-stretch w-full flex-[0_0_auto] p-0">
                              <h3 className="mt-[-0.72px] font-medium text-neutral-900 text-[15.9px] leading-[19.0px] relative flex items-center self-stretch [font-family:'IBM_Plex_Serif',Helvetica] tracking-[0]">
                                {card.title}
                              </h3>
                              <p className="relative flex items-center self-stretch [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-neutral-600 text-[10.1px] tracking-[0] leading-[15.1px]">
                                {card.description}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>

                    <img
                      className="absolute top-[-1434px] left-[-458px] w-[23px] h-[23px]"
                      alt="Specialties left"
                      src="/specialties-left-arrow.svg"
                    />

                    <img
                      className="absolute top-[-1434px] left-[-458px] w-[23px] h-[23px]"
                      alt="Specialties right"
                      src="/specialties-right-arrow.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="gap-[34.59px] px-0 py-[34.59px] self-stretch w-full [background:radial-gradient(50%_50%_at_76%_3%,rgba(248,244,241,0)_0%,rgba(248,244,241,0.15)_100%)] flex flex-col items-center relative flex-[0_0_auto]">
            <div className="flex-col flex w-[830.09px] items-center gap-[34.59px] px-[17.29px] py-0 relative flex-[0_0_auto]">
              <div className="w-[403.52px] gap-[17.29px] px-0 py-[57.65px] flex flex-col items-center relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-[17.29px] items-center justify-around px-[11.53px] py-0 relative bg-secondarysecondary-500 rounded-[71.34px]">
                  <span className="flex items-center justify-center w-fit text-secondarysecondary-800 text-[10.1px] text-center leading-[15.1px] whitespace-nowrap relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal tracking-[0]">
                    Schedule a free call
                  </span>
                </div>

                <h2 className="w-[403.52px] text-center relative [font-family:'IBM_Plex_Serif',Helvetica] font-normal text-neutralneutral-800 text-[27.4px] tracking-[0] leading-[32.9px]">
                  Taking the first
                  <br />
                  step can be overwhelming
                </h2>

                <p className="w-[380.46px] text-neutralneutral-800 text-center relative [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[14.4px] tracking-[0] leading-[21.6px]">
                  So, let&#39;s make it easy. Schedule a free 15 minute
                  consultation so we get know each other.
                </p>

                <div className="h-[41.79px] px-[17.29px] py-[11.53px] bg-primaryprimary-500 rounded-[4.32px] border-[1.44px] border-solid inline-flex items-center justify-center relative border-[#009da3]">
                  <span className="mt-[-2.57px] [font-family:'IBM_Plex_Sans',Helvetica] font-medium text-neutralwhite text-[11.5px] tracking-[0] leading-[20.8px] relative flex items-center justify-center w-fit text-center whitespace-nowrap">
                    Get Started
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="flex w-[1072.2px] h-[63.41px] items-center justify-center px-[17.29px] py-0 relative bg-neutralwhite">
          <div className="flex w-[992.94px] items-center justify-center relative">
            <div className="relative flex items-center flex-1 [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-neutralneutral-800 text-[11.5px] tracking-[0] leading-[11.5px]">
              <span className="text-[#20354f] leading-[20.8px]">
                Mindcure by Strides Digital |{" "}
              </span>
              <span className="text-[#008186] text-base leading-6 underline">
                Licensing{" "}
              </span>
              <span className="text-[#20354f] leading-[20.8px]">| </span>
              <span className="text-[#008186] text-base leading-6 underline">
                Powered by Webflow
              </span>
            </div>

            <div className="inline-flex items-start gap-[17.29px] relative flex-[0_0_auto]">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="flex w-[34.59px] h-[34.59px] items-center justify-center relative bg-primaryprimary-500 rounded-full"
                >
                  <img
                    className="relative w-[17.29px] h-[17.29px]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </footer>

        {/* Navigation Bar */}
        <nav className="flex flex-col w-[830px] items-start px-[17.29px] py-0 absolute top-0 left-[calc(50.00%_-_415px)] bg-neutralwhite border-b-[0.72px] border-solid border-[#ffffff26] shadow-[0px_5.04px_15.85px_#ffffff26] backdrop-blur-[14.41px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.41px)_brightness(100%)]">
          <div className="flex h-[57.65px] justify-between self-stretch w-full items-center relative">
            {/* Left nav: logo + links */}
            <div className="inline-flex gap-[34.59px] self-stretch flex-[0_0_auto] items-center relative">
              {/* Logo */}
              <div className="relative w-[96.56px] h-[30.26px]">
                <div className="flex w-[97px] h-[30px] items-center justify-center gap-[5.76px] relative">
                  <img
                    className="relative w-[23.06px] h-[21.82px]"
                    alt="Logo"
                    src="/logo.svg"
                  />
                  <span className="relative flex items-center w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-neutralneutral-800 text-[14.4px] tracking-[0] leading-[17.3px] whitespace-nowrap">
                    mindcure
                  </span>
                </div>
              </div>

              {/* Primary nav links */}
              <div className="inline-flex self-stretch flex-[0_0_auto] items-center relative">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`inline-flex justify-center px-[11.53px] py-[5.76px] self-stretch flex-[0_0_auto] items-center relative ${link.active ? "border-b-[2.88px] border-solid border-[#ffcd93]" : ""}`}
                  >
                    <span
                      className={`flex w-fit [font-family:'IBM_Plex_Sans',Helvetica] text-[10.1px] tracking-[0] leading-[15.1px] whitespace-nowrap items-center relative ${link.active ? "font-semibold text-primaryprimary-700" : "font-medium text-neutralneutral-600"}`}
                    >
                      {link.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right nav: secondary links + CTA */}
            <div className="inline-flex items-center gap-[17.29px] relative self-stretch flex-[0_0_auto]">
              <div className="inline-flex self-stretch flex-[0_0_auto] items-center relative">
                {secondaryNavLinks.map((link, index) => (
                  <div
                    key={index}
                    className="inline-flex px-[11.53px] py-[5.76px] self-stretch flex-[0_0_auto] items-center relative"
                  >
                    <span className="flex w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-medium text-neutralneutral-600 text-[10.1px] tracking-[0] leading-[15.1px] whitespace-nowrap items-center relative">
                      {link.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-start gap-[8.65px] relative flex-[0_0_auto]">
                <div className="h-[25.94px] px-[8.65px] py-[5.76px] flex-[0_0_auto] bg-primaryprimary-500 rounded-[2.88px] border-[1.44px] border-solid inline-flex items-center justify-center relative border-[#009da3]">
                  <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-medium text-neutralwhite text-[10.1px] tracking-[0] leading-[10.1px] relative flex items-center justify-center w-fit text-center whitespace-nowrap">
                    Schedule a free call
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Large title text on the left */}
      <div className="inline-flex flex-col items-start gap-7 absolute top-[308px] left-[137px]">
        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <h1 className="relative w-[1434px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#20354f] text-[120px] tracking-[0] leading-[148.8px]">
            Mindcure
            <br />
            Therapy
          </h1>
        </div>
      </div>
    </div>
  );
};
