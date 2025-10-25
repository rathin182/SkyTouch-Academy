"use client";

import React from "react";

interface Alumni {
  name: string;
  title: string;
  company: string;
  image: string;
  testimonial: string;
}

const alumniData: Alumni[] = [
  {
    name: "Sarah Johnson",
    title: "Digital Marketing Manager",
    company: "Google",
    image: "/Alumni/1.jpg",
    testimonial:
      '"SkyTouch Academy transformed my career. The practical approach and industry insights helped me land my dream job at Google."',
  },
  {
    name: "Michael Chen",
    title: "Growth Marketing Lead",
    company: "Meta",
    image: "/Alumni/2.jpg",
    testimonial:
      '"The comprehensive curriculum and expert mentorship at SkyTouch Academy gave me the skills to excel in growth marketing."',
  },
  {
    name: "Emily Rodriguez",
    title: "SEO Specialist",
    company: "Amazon",
    image: "/Alumni/3.jpg",
    testimonial:
      '"From zero to SEO expert in 6 months. The hands-on projects and real-world case studies made all the difference."',
  },
  {
    name: "David Park",
    title: "PPC Campaign Manager",
    company: "Microsoft",
    image: "/Alumni/4.jpg",
    testimonial:
      '"The advanced PPC strategies I learned helped me optimize campaigns that generated millions in revenue."',
  },
];

const AlumniSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Alumni Leading the Digital World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful professionals who have transformed
            their careers with our expert-led programs and are now working at
            top companies worldwide.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {alumniData.map((alumni, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={alumni.image}
                alt={alumni.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {alumni.name}
              </h3>
              <p className="text-sky-600 font-medium mb-2">{alumni.title}</p>
              <p className="text-gray-600 text-sm mb-4">{alumni.company}</p>
              <p className="text-gray-700 text-sm italic">{alumni.testimonial}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">95%</div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">$75K</div>
              <div className="text-gray-600">Average Salary Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">500+</div>
              <div className="text-gray-600">Hiring Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">50K+</div>
              <div className="text-gray-600">Successful Graduates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
