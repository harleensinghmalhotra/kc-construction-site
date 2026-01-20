import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Target,
  Heart,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Briefcase,
  BadgeCheck,
  Receipt
} from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description:
        "We show up on time, deliver on our promises, and stand behind every project we build."
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We use professional-grade materials, skilled craftsmanship, and strict quality control."
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Transparent pricing, honest communication, and zero shortcuts — ever."
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Efficient execution, modern construction methods, and long-lasting results."
    }
  ];

  const whyChoose = [
    "Direct owner oversight on every project",
    "Fully insured with $2M liability coverage",
    "Residential, commercial, and institutional expertise",
    "Professional crews and modern equipment",
    "Clear timelines and transparent pricing",
    "12-month workmanship warranty"
  ];

  return (
    <div className="bg-white">
      <TopBar />
      <Header />

      <Helmet>
        <title>About KC Construction | Chicago Construction Company</title>
        <meta
          name="description"
          content="Learn about KC Construction, our mission, values, and commitment to quality construction services across Chicago."
        />
      </Helmet>

{/* HERO */}
<section className="relative h-[320px] sm:h-[360px] md:h-[420px] flex items-center bg-black">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url(/images/about/about-hero.jpg)" }}
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl">
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
        style={{ textShadow: "3px 3px 14px rgba(0,0,0,0.95)" }}
      >
        Meet KC Construction, Chicago’s Dedicated Construction Experts.
      </h1>
      <p
        className="text-base sm:text-lg md:text-xl text-white"
        style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.9)" }}
      >
        Over a decade of hands-on experience transforming residential and commercial properties across the Greater Chicago Area.
      </p>
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About KC Construction
              </h2>

              <div className="space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  KC Construction was founded to deliver dependable, high-quality
                  construction services for homeowners, businesses, and institutions
                  across Chicago.
                </p>

                <p>
                  We specialize in commercial construction, residential remodeling,
                  drywall and insulation, finish carpentry, painting, and general
                  construction services.
                </p>

                <p>
                  Every project is managed with strict attention to detail, safety,
                  and craftsmanship. Our clients work with a professional team that
                  values communication, accountability, and results.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/images/about/about-main.jpg"
                alt="KC Construction project in Chicago"
                className="rounded-2xl shadow-2xl w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#681a1e]/10 rounded-lg flex items-center justify-center mb-5">
                <Target className="text-[#681a1e]" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To deliver reliable, high-quality construction services that enhance
                property value, safety, and long-term performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#681a1e]/10 rounded-lg flex items-center justify-center mb-5">
                <TrendingUp className="text-[#681a1e]" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become one of Chicago’s most trusted construction partners through
                consistency, craftsmanship, and professionalism.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              The foundation behind every KC Construction project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50 p-7 rounded-xl hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 bg-[#681a1e] text-white rounded-lg flex items-center justify-center mb-5 mx-auto">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{v.title}</h3>
                  <p className="text-gray-600 text-center">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-600 text-lg">
              Professional standards on every build
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {[
              { icon: ShieldCheck, title: "Fully Insured", sub: "$2M Liability Coverage" },
              { icon: Briefcase, title: "Workers Comp", sub: "Full employee protection" },
              { icon: BadgeCheck, title: "12-Month Warranty", sub: "On all workmanship" },
              { icon: Receipt, title: "Transparent Pricing", sub: "No hidden fees" }
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white border-2 border-[#681a1e] rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#681a1e]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-[#681a1e]" size={26} />
                  </div>
                  <h3 className="font-bold mb-1">{b.title}</h3>
                  <p className="text-[#681a1e] font-semibold text-sm">{b.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-14 sm:py-20 bg-[#681a1e] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose KC Construction?
            </h2>
            <p className="text-white/90 text-lg">
              A higher standard of construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {whyChoose.map((r, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-1" size={20} />
                <p className="text-lg">{r}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-[#681a1e] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
            >
              Work With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}