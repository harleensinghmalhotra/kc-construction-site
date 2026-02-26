import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      />
      <div className="hero-overlay" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-white text-sm uppercase font-semibold mb-4"
          style={{
            letterSpacing: "3px",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          Where Quality Meets Legacy
        </p>

        <h1
          className="text-white text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1]"
          style={{
            letterSpacing: "-1px",
            textShadow:
              "0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          KingColeman Construction
        </h1>

        <p
          className="text-white text-base sm:text-xl md:text-2xl mb-10 font-medium leading-relaxed"
          style={{
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Full-Service General Construction
          <br />
          <span className="opacity-90">Commercial · Institutional · Residential</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary w-full sm:w-auto"
          >
            View Our Work
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="btn-secondary w-full sm:w-auto"
          >
            Get A Quote
          </button>
        </div>
      </div>
    </section>
  );
}