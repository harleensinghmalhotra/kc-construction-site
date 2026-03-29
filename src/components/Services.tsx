import { Building2, Home, Layers, PaintBucket, Hammer, Sparkles, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial & Institutional Construction",
      description: "New builds and renovations for business facilities",
    },
    {
      id: "residential",
      icon: Home,
      title: "Residential Remodeling",
      description: "Complete home transformations and renovations",
    },
    {
      id: "drywall",
      icon: Layers,
      title: "Drywall & Insulation",
      description: "Professional installation for comfort and efficiency",
    },
    {
      id: "painting",
      icon: PaintBucket,
      title: "Painting & Wall Covering",
      description: "Interior and exterior painting services",
    },
    {
      id: "carpentry",
      icon: Hammer,
      title: "Finish Carpentry",
      description: "Custom trim, cabinetry, and woodwork",
    },
    {
      id: "janitorial",
      icon: Sparkles,
      title: "Janitorial Services",
      description: "Post-construction and facility maintenance",
    },

    // ✅ LAST + CENTERED
    {
      id: "general",
      icon: Wrench,
      title: "General Construction Services",
      description: "Comprehensive building solutions",
      center: true,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black" style={{ letterSpacing: "-0.5px" }}>
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={`/services#${service.id}`}
                className={`service-card bg-white border border-[#E5E5E5] rounded-lg p-10 text-center hover:shadow-lg transition ${
                  service.center ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex justify-center mb-5">
                  <Icon size={48} className="text-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-[#666666] text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}