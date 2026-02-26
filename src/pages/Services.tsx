import TopBar from "../components/TopBar";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import {
  Building2,
  Home,
  Layers,
  Paintbrush,
  Hammer,
  Wrench,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial & Institutional Construction",
      image: "/services/commercial.jpg",
      alt: "Commercial and institutional construction project",
      description:
        "New construction and renovation services for commercial buildings and institutional facilities, delivered with strict safety, compliance, and performance standards.",
      benefits: [
        "New commercial builds and renovations",
        "Interior and exterior facility upgrades",
        "Code-compliant construction execution",
        "Project coordination and scheduling"
      ],
      process: [
        "Consultation and site evaluation",
        "Planning, permits, and scheduling",
        "Construction and final delivery"
      ]
    },
    {
      id: "residential",
      icon: Home,
      title: "Residential Remodeling",
      image: "/services/residential.jpg",
      alt: "Residential remodeling and renovation",
      description:
        "Complete home transformations including kitchens, bathrooms, basements, and full property renovations.",
      benefits: [
        "Full and partial home remodels",
        "Structural and layout upgrades",
        "Interior and exterior improvements",
        "Clean, professional job sites"
      ],
      process: [
        "In-home consultation",
        "Design planning and estimate",
        "Renovation and walkthrough"
      ]
    },
    {
      id: "drywall",
      icon: Layers,
      title: "Drywall & Insulation",
      image: "/services/drywall.jpg",
      alt: "Drywall and insulation installation",
      description:
        "Professional drywall and insulation installation improving comfort, efficiency, and interior durability.",
      benefits: [
        "Drywall hanging, taping, and finishing",
        "Thermal and sound insulation systems",
        "Fire-rated and moisture-resistant installs",
        "Repairs and upgrades"
      ],
      process: ["Site preparation", "Installation and finishing", "Final inspection"]
    },
    {
      id: "painting",
      icon: Paintbrush,
      title: "Painting & Wall Covering",
      image: "/services/painting.jpg",
      alt: "Interior and exterior painting services",
      description:
        "Interior and exterior painting services for residential, commercial, and institutional properties.",
      benefits: [
        "Interior and exterior painting",
        "Wall coverings and specialty finishes",
        "Commercial-grade coatings",
        "Precision surface detailing"
      ],
      process: ["Surface preparation", "Application and quality control", "Final detailing"]
    },
    {
      id: "carpentry",
      icon: Wrench,
      title: "Finish Carpentry",
      image: "/services/carpentry.jpg",
      alt: "Finish carpentry and woodwork",
      description:
        "High-precision finish carpentry including trim work, cabinetry, and detailed interior wood construction.",
      benefits: [
        "Custom trim and moldings",
        "Cabinetry and built-ins",
        "Door and frame installations",
        "High-end finishing standards"
      ],
      process: ["Measurements and design", "Fabrication and installation", "Final detailing"]
    },
    {
      id: "janitorial",
      icon: Building2,
      title: "Janitorial Services",
      image: "/services/janitorial.jpg",
      alt: "Janitorial and post-construction cleaning",
      description:
        "Professional janitorial with pre and post-construction cleaning services for commercial and institutional facilities.",
      benefits: [
        "Pre and post-construction cleanups",
        "Commercial facility maintenance",
        "Deep cleaning and sanitation",
        "Scheduled maintenance services"
      ],
      process: ["Site walkthrough", "Cleaning execution", "Ongoing service options"]
    },

    // ✅ GENERAL LAST
    {
      id: "general",
      icon: Hammer,
      title: "General Construction Services",
      image: "/services/general.jpg",
      alt: "General construction services",
      description:
        "Comprehensive construction solutions covering repairs, additions, upgrades, and structural modifications.",
      benefits: [
        "Structural modifications",
        "Property repairs and rebuilds",
        "Additions and expansions",
        "Residential and commercial support"
      ],
      process: ["Project assessment", "Execution and coordination", "Final approval"]
    }
  ];

  return (
    <div className="bg-white">
      <TopBar />
      <Header />

      <Helmet>
        <title>Construction Services | KC Construction</title>
        <meta
          name="description"
          content="KC Construction provides commercial construction, residential remodeling, drywall, painting, finish carpentry, and janitorial services."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[320px] sm:h-[360px] md:h-[420px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/services/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              Professional Construction Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
              Commercial, residential, and institutional construction solutions built on quality, safety, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                id={service.id}
                key={service.id}
                className={`scroll-mt-32 mb-12 sm:mb-16 md:mb-20 last:mb-0 ${index !== 0 ? "pt-10 sm:pt-12 md:pt-16 border-t border-gray-200" : ""
                  }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>

                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col`}>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#681a1e]/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-[#681a1e]" size={26} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-3">What's Included</h3>
                      <div className="space-y-2">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-[#681a1e] mt-1" size={18} />
                            <p className="text-gray-600">{b}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3">Our Process</h3>
                      <div className="space-y-2">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-7 h-7 bg-[#681a1e] text-white rounded-full flex items-center justify-center font-bold">
                              {i + 1}
                            </div>
                            <p className="text-gray-600 pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Choose KC Construction?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver the expertise, reliability, and results Chicago and Cook County property owners demand — whether residential or commercial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              ["Professional Excellence", "Fully insured for your complete protection and peace of mind."],
              ["Personalized Service", "Direct communication with decision-makers and customized solutions."],
              ["Quality Craftsmanship", "Precision execution on every construction project."],
              ["Local Expertise", "Deep understanding of Chicago & Cook County construction standards."]
            ].map(([title, text]) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READY CTA */}
      <section className="py-14 bg-[#681a1e] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/90">
            Contact us today for a free consultation and custom quote.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#681a1e] px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition shadow-lg"
          >
            Get Free Quote <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}