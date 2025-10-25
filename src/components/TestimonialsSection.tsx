"use client";

import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jennifer Martinez",
    role: "Digital Marketing Manager",
    company: "TechCorp",
    image:
      "/AmbitiousPeople/1.jpg",
    rating: 5,
    quote: `"SkyTouch Academy completely transformed my career. The practical approach and real-world case studies gave me the confidence to lead digital marketing initiatives at my company. The instructors are industry experts who truly care about your success."`,
  },
  {
    name: "Robert Kim",
    role: "Product Manager",
    company: "InnovateX",
    image:
      "/AmbitiousPeople/2.jpg",
    rating: 5,
    quote: `"The courses at SkyTouch Academy are world-class! I learned strategies that I immediately applied to increase my team's performance and product visibility online."`,
  },
  {
    name: "Amanda Thompson",
    role: "UI/UX Designer",
    company: "Creatives Ltd",
    image:
      "/AmbitiousPeople/3.jpg",
    rating: 5,
    quote: `"SkyTouch gave me the creative and analytical balance I needed. The instructors explain complex ideas so clearly — I apply their methods in every design project now!"`,
  },
  {
    name: "Carlos Rodriguez",
    role: "Software Engineer",
    company: "TechSolutions",
    image:
      "/AmbitiousPeople/4.jpg",
    rating: 5,
    quote: `"I’ve taken many online courses before, but SkyTouch Academy stands out. It’s practical, engaging, and incredibly relevant to today’s tech landscape."`,
  },
];

const stats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "15,000+", label: "Happy Students" },
  { value: "98%", label: "Would Recommend" },
];

const TestimonialsSection: React.FC = () => {
  // 🔥 State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            HEAR IT FROM THE AMBITIOUS PEOPLE
          </h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful
            graduates have to say about their transformative journey with
            SkyTouch Academy.
          </p>
        </div>

        {/* Active Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                alt={activeTestimonial.name}
                className="w-24 h-24 rounded-full object-cover object-top border-4 border-white/30"
                src={activeTestimonial.image}
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <RiStarFill
                      key={i}
                      className="text-yellow-400 text-xl"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">
                  {activeTestimonial.quote}
                </blockquote>
                <div>
                  <div className="font-semibold text-xl">
                    {activeTestimonial.name}
                  </div>
                  <div className="text-sky-200">{activeTestimonial.role}</div>
                  <div className="text-sky-300 text-sm">
                    {activeTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Buttons */}
          <div className="flex justify-center space-x-4">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)} // ✅ click handler
                className={`w-14 h-14 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                  activeIndex === idx
                    ? "border-white scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                  src={t.image}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold mb-2">{s.value}</div>
              <div className="text-sky-200">{s.label}</div>
              {s.label === "Average Rating" && (
                <div className="flex justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <RiStarFill key={i} className="text-yellow-400" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
