"use client";

import React from "react";

interface FreeCourse {
  title: string;
  image: string;
  rating: string;
  duration: string;
  lessons: string;
  students: string;
  highlights: string[];
}

const freeCourses: FreeCourse[] = [
  {
    title: "Digital Marketing Fundamentals",
    image:
      "/FreeCourses/1.jpg",
    rating: "4.8",
    duration: "2 hours",
    lessons: "8 lessons",
    students: "25,000",
    highlights: [
      "Marketing Strategy",
      "SEO Basics",
      "Social Media",
      "Email Marketing",
    ],
  },
  {
    title: "Google Analytics Essentials",
    image:
      "/FreeCourses/2.jpg",
    rating: "4.8",
    duration: "1.5 hours",
    lessons: "6 lessons",
    students: "18,500",
    highlights: ["GA4 Setup", "Traffic Analysis", "Goal Tracking", "Visitor Analysis" , "Reporting"],
  },
  {
    title: "Social Media Marketing Basics",
    image:
      "/FreeCourses/3.jpg",
    rating: "4.8",
    duration: "2.5 hours",
    lessons: "10 lessons",
    students: "22,000",
    highlights: [
      "Content Strategy",
      "Platform Selection",
      "Engagement",
      "Analytics",
    ],
  },
  {
    title: "Email Marketing Fundamentals",
    image:
      "/FreeCourses/4.jpg",
    rating: "4.8",
    duration: "1 hour",
    lessons: "5 lessons",
    students: "15,000",
    highlights: ["List Building", "Campaign Design", "Automation", "Metrics"],
  },
];

const FreeCoursesSection: React.FC = () => {
  return (
    <section id="free-courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Free Courses to Get You Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Begin your digital marketing journey with our comprehensive free
            courses. No credit card required – just pure value to help you
            discover your passion for digital marketing.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {freeCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                alt={course.title}
                className="w-full h-40 object-cover object-top"
                src={course.image}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    FREE
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <i className="ri-star-fill mr-1"></i>
                    <span className="text-sm font-medium text-gray-700">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {/* Optional short description */}
                  Learn the fundamentals of {course.title}.
                </p>

                {/* Course details */}
                <div className="flex items-center justify-between mb-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <i className="ri-time-line mr-1 text-sky-600"></i>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-play-circle-line mr-1 text-sky-600"></i>
                    {course.lessons}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line mr-1 text-sky-600"></i>
                    {course.students}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-1">
                    {course.highlights.map((highlight, idx2) => (
                      <div
                        key={idx2}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <i className="ri-check-line text-sky-600 mr-1"></i>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl px-6 py-3 text-base w-full"
                >
                  Start Free Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready for More Advanced Training?
          </h3>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            After completing our free courses, take your skills to the next
            level with our comprehensive paid programs that include live
            sessions, projects, and career support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const section = document.getElementById("courses");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Premium Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCoursesSection;
