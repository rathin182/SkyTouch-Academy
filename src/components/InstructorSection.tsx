"use client";

import React from "react";

interface Instructor {
  name: string;
  role: string;
  company: string;
  experience: string;
  image: string;
  skills: string[];
  description: string;
}

const instructors: Instructor[] = [
  {
    name: "Sarah Mitchell",
    role: "Head of Digital Strategy",
    company: "Former Google",
    experience: "12+ years experience",
    image: "/DigitalMarketing/1.jpg",
    skills: ["Google Ads", "SEO Strategy", "Analytics"],
    description: "Led digital marketing initiatives for Fortune 500 companies, driving over $100M in revenue growth.",
  },
  {
    name: "Marcus Johnson",
    role: "Social Media Strategist",
    company: "Former Meta",
    experience: "10+ years experience",
    image: "/DigitalMarketing/2.jpg",
    skills: ["Social Media", "Content Strategy", "Influencer Marketing"],
    description: "Developed social media strategies for global brands, reaching over 500M users worldwide.",
  },
  {
    name: "Dr. Emily Chen",
    role: "Data Analytics Expert",
    company: "Former Amazon",
    experience: "15+ years experience",
    image: "/DigitalMarketing/3.jpg",
    skills: ["Data Analytics", "Marketing Automation", "CRO"],
    description: "PhD in Data Science, specialized in marketing analytics and conversion optimization for e-commerce.",
  },
  {
    name: "Alex Rodriguez",
    role: "Growth Marketing Lead",
    company: "Former Uber",
    experience: "8+ years experience",
    image: "/DigitalMarketing/4.jpg",
    skills: ["Growth Hacking", "Email Marketing", "Funnel Optimization"],
    description: "Scaled user acquisition from 0 to 10M users, expert in growth marketing and retention strategies.",
  },
];

const InstructorSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn From the Best in Digital Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class instructors bring decades of real-world experience from leading tech companies. Learn directly from the experts who have shaped the digital marketing landscape.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                alt={instructor.name}
                src={instructor.image}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {instructor.name}
              </h3>
              <p className="text-sky-600 font-medium mb-1">{instructor.role}</p>
              <p className="text-gray-600 text-sm mb-2">{instructor.company}</p>
              <p className="text-gray-500 text-sm mb-4">{instructor.experience}</p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap justify-center gap-1 mb-3">
                  {instructor.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-sky-100 text-sky-800 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {instructor.description}
                </p>
              </div>

              <button className="text-sky-600 hover:text-sky-700 font-medium text-sm cursor-pointer">
                View Profile <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Instructor Highlights */}
        <div className="mt-16 bg-sky-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Our Instructors Make the Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="ri-briefcase-line text-xl text-sky-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Real-World Experience</h4>
              <p className="text-gray-600 text-sm">
                Learn from professionals who have built and scaled marketing campaigns for global brands.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="ri-heart-line text-xl text-sky-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Personalized Mentorship</h4>
              <p className="text-gray-600 text-sm">
                Get one-on-one guidance and feedback to accelerate your learning journey.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="ri-refresh-line text-xl text-sky-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Current Industry Insights</h4>
              <p className="text-gray-600 text-sm">
                Stay ahead with the latest trends, tools, and strategies from active industry leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
