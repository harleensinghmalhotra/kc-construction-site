import { useNavigate } from "react-router-dom";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      beforeImage: "https://images.pexels.com/photos/7937304/pexels-photo-7937304.jpeg?auto=compress&cs=tinysrgb&w=1200",
      afterImage: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Complete Home Transformation",
      description:
        "Full residential remodeling from bare walls to a stunning modern living space with premium finishes.",
    },
    {
      beforeImage: "https://images.pexels.com/photos/5606879/pexels-photo-5606879.jpeg?auto=compress&cs=tinysrgb&w=1200",
      afterImage: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Modern Kitchen Renovation",
      description:
        "Complete kitchen transformation featuring custom cabinetry, contemporary design, and high-end appliances.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            Recent Transformations
          </h2>
          <p className="text-[#666666] text-lg">
            See the quality and craftsmanship in our completed projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {projects.map((project, index) => (
            <BeforeAfterSlider key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/gallery")}
            className="btn-primary"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}