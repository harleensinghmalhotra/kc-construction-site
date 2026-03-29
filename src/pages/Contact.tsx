import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

interface SiteConfig {
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  mapLink: string;
  hours: string[];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [siteInfo, setSiteInfo] = useState<SiteConfig | null>(null);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then((data) => setSiteInfo(data.siteInfo))
      .catch(() => console.error("Failed to load site config"));
  }, []);

  // ✅ MATCHES SERVICES PAGE EXACTLY
  const services = [
    "Commercial & Institutional Construction",
    "Residential Remodeling",
    "Drywall & Insulation",
    "Painting & Wall Covering",
    "Finish Carpentry",
    "Janitorial Services",
    "General Construction Services",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://app.10xspeed.in/webhook/FormKC", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        // Thank you form for 12 seconds
        setTimeout(() => setIsSubmitted(false), 12000);
      } else {
        console.error("Webhook failed with status:", response.status);
        alert("There was an error submitting your request. Please try again later.");
      }
    } catch (err) {
      console.error("Webhook failed:", err);
      alert("There was an error submitting your request. Please check your connection.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (!siteInfo) return <div className="p-12 text-center">Loading...</div>;

  return (
    <div className="bg-white">
      <TopBar />
      <Header />

      <Helmet>
        <title>Contact KC Construction | Free Construction Quote Chicago</title>
        <meta
          name="description"
          content="Contact KC Construction for residential and commercial construction projects in Chicago. Get a free consultation and quote today."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[320px] sm:h-[360px] md:h-[420px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/contact-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Get a free consultation for your residential or commercial construction project in Chicago.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* INFO */}
          <div className="bg-[#681a1e] text-white p-8 rounded-2xl shadow-xl lg:sticky lg:top-40">
            <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone /> <span>{siteInfo.phone}</span>
              </div>

              <div className="flex gap-4 break-all">
                <Mail /> <span>{siteInfo.email}</span>
              </div>

              <div className="flex gap-4">
                <MapPin /> <span>{siteInfo.address}</span>
              </div>

              <div className="flex gap-4">
                <Clock />
                <div>
                  {siteInfo.hours?.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SUCCESS MESSAGE OR FORM */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border min-h-[500px] flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-[#681a1e]">Thank You!</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                  Your request has been sent successfully. We appreciate your interest in KC Construction and will get back to you within 24 hours.
                </p>
                <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
                  <Clock size={16} />
                  <span>This message will close in a few seconds...</span>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-2">Request a Free Quote</h2>
                <p className="text-gray-600 mb-6">
                  Tell us about your project and we’ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <input
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border p-3 rounded-lg ${errors.name ? 'border-red-500 bg-red-50' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border p-3 rounded-lg ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <input
                        name="phone"
                        placeholder="Phone *"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full border p-3 rounded-lg ${errors.phone ? 'border-red-500 bg-red-50' : ''}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full border p-3 rounded-lg ${errors.service ? 'border-red-500 bg-red-50' : ''}`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s, i) => (
                        <option key={i}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
                  </div>

                  <div className="space-y-1">
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full border p-3 rounded-lg resize-none ${errors.message ? 'border-red-500 bg-red-50' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#681a1e] text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[#4a1215] active:scale-[0.98]"
                  >
                    <Send size={18} /> Send Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}