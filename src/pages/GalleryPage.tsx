import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GalleryPage() {
  const navigate = useNavigate();

  const projects = [
    {
      before: "/images/gallery/before-1.jpg",
      after: "/images/gallery/after-1.jpg",
      title: "Complete Home Transformation",
      description:
        "Full residential remodeling from bare walls to a stunning modern living space with premium finishes.",
    },
    {
      before: "/images/gallery/before-2.jpg",
      after: "/images/gallery/after-2.jpg",
      title: "Modern Kitchen Renovation",
      description:
        "Complete kitchen transformation featuring custom cabinetry, contemporary design, and high-end appliances.",
    },
    {
      before: "/images/gallery/before-3.png",
      after: "/images/gallery/after-3.jpg",
      title: "Modern Bathroom Renovation",
      description:
        "Complete bathroom remodel featuring professional tile repair, new fixtures, and a modern clean finish.",
    },
    {
      before: "/images/gallery/before-4.png",
      after: "/images/gallery/after-4.jpg",
      title: "Modern Bedroom Renovation",
      description:
        "Full bedroom transformation including new flooring, custom paint, and contemporary design elements.",
    },
  ];

  return (
    <div className="bg-white">
      <TopBar />
      <Header />

      <Helmet>
        <title>Project Gallery | KC Construction Chicago</title>
        <meta
          name="description"
          content="View before and after construction and landscaping projects across Chicago."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[300px] sm:h-[360px] md:h-[440px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/gallery/gallery-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Chicago Construction Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Explore our recent residential and commercial transformations across Chicago and the North Shore.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              See the dramatic difference professional construction makes
            </p>
          </div>

          <div className="grid gap-16 md:gap-24 max-w-6xl mx-auto">
            {projects.map((p, i) => (
              <BeforeAfterSlider
                key={i}
                beforeImage={p.before}
                afterImage={p.after}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#681a1e] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8">
            Get a free consultation and quote from KC Construction.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#681a1e] px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition shadow-xl"
          >
            Get Free Quote <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}