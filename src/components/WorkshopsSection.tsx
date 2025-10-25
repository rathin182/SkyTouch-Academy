"use client";

import React from "react";

interface Workshop {
  title: string;
  level: "Advanced" | "Intermediate";
  price: string;
  date: string;
  duration: string;
  instructor: string;
  image: string;
  learnings: string[];
}

const workshopsData: Workshop[] = [
  {
    title: "Advanced Google Ads Mastery",
    level: "Advanced",
    price: "$199",
    date: "March 15, 2024",
    duration: "3 hours",
    instructor: "Mark Thompson",
    image: "/Workshops/1.jpg",
    learnings: ["Campaign Optimization", "Bidding Strategies", "Performance Analysis"],
  },
  {
    title: "Social Media Strategy Bootcamp",
    level: "Intermediate",
    price: "$149",
    date: "March 22, 2024",
    duration: "4 hours",
    instructor: "Lisa Chen",
    image: "/Workshops/2.jpg",
    learnings: ["Content Planning", "Engagement Tactics", "Analytics & ROI"],
  },
  {
    title: "SEO Technical Deep Dive",
    level: "Advanced",
    price: "$249",
    date: "March 29, 2024",
    duration: "5 hours",
    instructor: "Alex Rodriguez",
    image: "/Workshops/3.jpg",
    learnings: ["Technical Audits", "Core Web Vitals", "Schema Markup"],
  },
];

const WorkshopsSection: React.FC = () => {
  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Workshops</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our intensive workshops led by industry experts. Get hands-on experience with the latest tools and strategies in digital marketing.
          </p>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopsData.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      workshop.level === "Advanced"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {workshop.level}
                  </span>
                  <span className="text-2xl font-bold text-sky-600">{workshop.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{workshop.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-2 text-sky-600"></i>
                    {workshop.date}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line mr-2 text-sky-600"></i>
                    {workshop.duration}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line mr-2 text-sky-600"></i>
                    {workshop.instructor}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                  <ul className="space-y-1">
                    {workshop.learnings.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <i className="ri-check-line text-sky-600 mr-2"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className="font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl px-6 py-3 text-base w-full"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg">
            View All Workshops
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
