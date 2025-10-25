"use client";

import React from "react";

interface FeaturedIn {
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Remix Icon class
}

const featuredInList: FeaturedIn[] = [
  {
    title: "TechCrunch",
    subtitle: "SkyTouch Academy Revolutionizes Digital Marketing Education",
    description: "Leading the way in practical, industry-focused training programs.",
    icon: "ri-newspaper-line",
  },
  {
    title: "Forbes",
    subtitle: "Top 10 Digital Marketing Bootcamps of 2024",
    description: "Recognized for exceptional career placement rates and curriculum quality.",
    icon: "ri-building-line",
  },
  {
    title: "Entrepreneur",
    subtitle: "How SkyTouch Academy is Bridging the Skills Gap",
    description: "Connecting industry needs with practical education solutions.",
    icon: "ri-global-line",
  },
  {
    title: "EdTech Review",
    subtitle: "Excellence in Digital Marketing Education Award",
    description: "Honored for innovation in online learning and student outcomes.",
    icon: "ri-award-line",
  },
];

const recognitionList: FeaturedIn[] = [
  {
    title: "Industry Recognition",
    subtitle: "Consistently ranked among the top digital marketing education providers globally.",
    description: "",
    icon: "ri-trophy-line",
  },
  {
    title: "Quality Assurance",
    subtitle: "Our curriculum meets the highest industry standards and is regularly updated.",
    description: "",
    icon: "ri-shield-check-line",
  },
  {
    title: "Student Success",
    subtitle: "Proven track record of transforming careers and achieving exceptional outcomes.",
    description: "",
    icon: "ri-star-line",
  },
];

const FeaturedInSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured In</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence in digital marketing education has been recognized by leading publications and industry experts worldwide.
          </p>
        </div>

        {/* Featured Logos & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredInList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className={`${item.icon} text-xl text-sky-600`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <h4 className="text-sm font-medium text-gray-800 mb-2">{item.subtitle}</h4>
              <p className="text-gray-600 text-xs">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {recognitionList.map((item, idx) => (
              <div key={idx}>
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-2xl text-sky-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
