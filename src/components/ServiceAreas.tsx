import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";

export default function ServiceAreas() {
  const navigate = useNavigate();

  const cities = [
    "Chicago",
    "Cook County",
    "Evanston",
    "Glen Ellyn",
    "Oak Park",
    "Glenview",
    "Northbrook",
    "Oakbrook",
    "Arlington Heights",
    "Des Plaines",
  ];

  return (
    <>
      {/* Service Areas Section */}
      <section className="py-20 bg-[#8B3A3A]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Serving the Greater Chicago Metro Area and Cook County
          </h2>
          <p className="text-lg mb-12 text-white/90 max-w-3xl mx-auto">
            Professional services for residential and commercial properties throughout Chicagoland and Cook County.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {cities.map((city) => (
              <div
                key={city}
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg font-medium text-sm border border-white/30"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Get a free consultation and quote from Chicago's trusted professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="btn-primary w-full sm:w-auto"
            >
              Get Free Quote
            </button>

            <a
              href="tel:+17735621366"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone size={18} />
              (773) 562-1366
            </a>
          </div>
        </div>
      </section>
    </>
  );
}