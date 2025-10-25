"use client";

import React from "react";

interface Advantage {
  title: string;
  description: string;
  icon: string; // Icon class from Remix Icons
}

const advantagesData: Advantage[] = [
  {
    title: "Live Interactive Classes",
    description:
      "Engage with instructors and peers in real-time sessions with Q&A, discussions, and hands-on activities.",
    icon: "ri-live-line",
  },
  {
    title: "Industry Case Studies",
    description:
      "Learn from real-world scenarios and successful campaigns from leading brands and companies.",
    icon: "ri-briefcase-line",
  },
  {
    title: "Expert Mentorship",
    description:
      "Get personalized guidance from industry veterans with years of practical experience.",
    icon: "ri-team-line",
  },
  {
    title: "Industry Certifications",
    description:
      "Earn recognized certifications that boost your credibility and career prospects.",
    icon: "ri-file-fill",
  },
  {
    title: "Career Placement Support",
    description:
      "Access our extensive network of hiring partners and get dedicated job placement assistance.",
    icon: "ri-rocket-line",
  },
  {
    title: "Lifetime Access",
    description:
      "Keep learning with lifetime access to course materials, updates, and community support.",
    icon: "ri-time-line",
  },
];

const AdvantageSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get the SkyTouch Academy Advantage</h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Experience the difference with our comprehensive approach to digital marketing education. 
            We don't just teach theory – we prepare you for real-world success.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesData.map((adv, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center mb-4">
                <i className={`${adv.icon} text-xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{adv.title}</h3>
              <p className="text-sky-100 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Join thousands of successful professionals who have accelerated their growth 
            with our proven methodology and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors cursor-pointer whitespace-nowrap">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
