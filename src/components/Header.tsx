import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white"
          }`}
      >
        {/* TOP BAR */}
        <div className="bg-black text-white text-xs">
          <div className="container mx-auto px-4 py-2 flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Phone size={12} /> (773) 582-1366
            </span>

            <span className="hidden sm:flex items-center gap-1">
              <Mail size={12} /> info@kingcoleman.com
            </span>

            <span className="hidden sm:flex items-center gap-1 ml-auto">
              <MapPin size={12} /> Chicago, IL
            </span>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            {/* LOGO */}
            <div onClick={() => navigate("/")} className="cursor-pointer py-2">
              <img
                src="/images/logo/new_logo.png"
                alt="KC Construction"
                className="h-10 sm:h-14 w-auto object-contain"
              />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center space-x-8 ml-auto">
              <button onClick={() => navigate("/")} className="nav-link">
                Home
              </button>

              <Link to="/services" className="nav-link">
                Services
              </Link>

              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>

              {/* ✅ BLOG ADDED */}
              <Link to="/blog" className="nav-link">
                Blog
              </Link>

              <Link to="/contact" className="nav-link">
                Contact
              </Link>

              <Link to="/contact" className="btn-primary">
                Get Free Quote
              </Link>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-black ml-auto p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
                className="nav-link text-left"
              >
                Home
              </button>

              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-left">
                Services
              </Link>

              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-left">
                Gallery
              </Link>

              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-left">
                About
              </Link>

              {/* ✅ BLOG ADDED */}
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-left">
                Blog
              </Link>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-left">
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full"
              >
                Get Free Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* SPACER */}
      <div className="h-[100px] sm:h-[112px]" />
    </>
  );
}