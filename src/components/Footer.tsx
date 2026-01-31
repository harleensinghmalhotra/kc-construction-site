import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const info = {
    name: "KingColeman Construction",
    phone: "(773) 582-1366",
    email: "info@kingcoleman.com",
    address: "Chicago, IL",
  };

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 sm:py-12">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* COMPANY */}
          <div>
            <img
              src="/images/logo/footer logo.png"
              alt="KingColeman Construction"
              className="h-14 sm:h-16 w-auto mb-4 object-contain"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              KingColeman Construction provides professional commercial, residential,
              and institutional construction services across Chicago and Cook County. We specialize in
              renovations, drywall, painting, finish carpentry, janitorial, and full
              construction solutions built on quality, safety, and reliability.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:pl-10">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-[#681a1e] transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-[#681a1e] transition-colors">Services</a></li>
              <li><a href="/gallery" className="hover:text-[#681a1e] transition-colors">Gallery</a></li>
              <li><a href="/about" className="hover:text-[#681a1e] transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-[#681a1e] transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-[#681a1e] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">

              <li><a href="/services#commercial" className="hover:text-[#681a1e] transition-colors">
                Commercial & Institutional Construction
              </a></li>

              <li><a href="/services#residential" className="hover:text-[#681a1e] transition-colors">
                Residential Remodeling
              </a></li>

              <li><a href="/services#drywall" className="hover:text-[#681a1e] transition-colors">
                Drywall & Insulation
              </a></li>

              <li><a href="/services#painting" className="hover:text-[#681a1e] transition-colors">
                Painting & Wall Coverings
              </a></li>

              <li><a href="/services#carpentry" className="hover:text-[#681a1e] transition-colors">
                Finish Carpentry
              </a></li>

              <li><a href="/services#janitorial" className="hover:text-[#681a1e] transition-colors">
                Janitorial Services
              </a></li>

              <li><a href="/services#general" className="hover:text-[#681a1e] transition-colors">
                General Construction Services
              </a></li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#681a1e] mt-1" />
                <span className="text-gray-400">{info.address}</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#681a1e]" />
                <a href="tel:7735821366" className="hover:text-[#681a1e] transition-colors">
                  {info.phone}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#681a1e]" />
                <a href="mailto:info@kingcoleman.com" className="hover:text-[#681a1e] transition-colors">
                  {info.email}
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <p className="text-white text-sm font-semibold mb-1">Business Hours</p>
              <p className="text-xs text-gray-400">Mon – Fri: 9:00 AM – 5:00 PM</p>
              <p className="text-xs text-gray-400">Sat: 9:00 AM – 2:00 PM</p>
              <p className="text-xs text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* SERVICE AREAS */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-center text-gray-400">
            <span className="text-white font-semibold">Service Areas:</span> Chicago • Cook County • Oak Park • Cicero • Evanston • Skokie • Des Plaines • Arlington Heights • Naperville • Aurora • Schaumburg
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} KingColeman Construction. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
