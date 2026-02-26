import { Award, Shield, Users, Clock, ThumbsUp, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Decades of experience delivering quality construction projects across Oklahoma',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your complete peace of mind',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled craftsmen and project managers dedicated to your vision',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to meeting deadlines without compromising quality',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description: 'Building lasting relationships through exceptional service and results',
    },
    {
      icon: TrendingUp,
      title: 'Quality Craftsmanship',
      description: 'Meticulous attention to detail in every project we undertake',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            style={{ letterSpacing: '-0.5px' }}
          >
            Why Choose KingColeman
          </h2>
          <p className="text-xl text-gray-600">
            Where Quality Meets Legacy
          </p>
        </div>

        {/* CENTERED GRID */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-[#8B3A3A] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-5 bg-gradient-to-br from-[#8B3A3A] to-[#6B2A2A] rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon size={32} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
