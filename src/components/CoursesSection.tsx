"use client";

import React from "react";

interface Course {
  title: string;
  description: string[];
  level: string;
  duration: string;
  students: string;
  rating: number;
  price: number;
  originalPrice: number;
  modules: string[];
  image: string;
  discount: number;
}

const coursesData: Course[] = [
  {
    title: "Complete Digital Marketing Mastery",
    description: [],
    level: "Beginner to Advanced",
    duration: "12 weeks",
    students: "15,420 students",
    rating: 4.9,
    price: 1299,
    originalPrice: 1999,
    modules: ["SEO & SEM", "Social Media Marketing", "Email Marketing", "Analytics & Reporting", "+2 more modules"],
    image: "/PremiumCourses/1.jpg",
    discount: 35,
  },
  {
    title: "Advanced Google Ads Certification",
    description: [],
    level: "Intermediate",
    duration: "8 weeks",
    students: "8,750 students",
    rating: 4.8,
    price: 899,
    originalPrice: 1299,
    modules: ["Campaign Setup", "Keyword Research", "Ad Creation", "Bidding Strategies", "+2 more modules"],
    image: "/PremiumCourses/2.jpg",
    discount: 31,
  },
  {
    title: "Social Media Marketing Pro Course",
    description: [],
    level: "Beginner to Intermediate",
    duration: "10 weeks",
    students: "12,300 students",
    rating: 4.9,
    price: 799,
    originalPrice: 1199,
    modules: ["Platform Strategy", "Content Creation", "Community Management", "Paid Social Ads", "+2 more modules"],
    image: "/PremiumCourses/3.jpg",
    discount: 33,
  },
  {
    title: "SEO Mastery & Technical SEO",
    description: [],
    level: "Intermediate to Advanced",
    duration: "6 weeks",
    students: "9,850 students",
    rating: 4.8,
    price: 699,
    originalPrice: 999,
    modules: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "+2 more modules"],
    image: "/PremiumCourses/4.jpg",
    discount: 30,
  },
  {
    title: "Email Marketing Automation",
    description: [],
    level: "Beginner",
    duration: "4 weeks",
    students: "6,420 students",
    rating: 4.7,
    price: 499,
    originalPrice: 699,
    modules: ["Email Strategy", "List Building", "Automation Workflows", "A/B Testing", "+2 more modules"],
    image: "/PremiumCourses/5.jpg",
    discount: 29,
  },
  {
    title: "Data Analytics for Marketers",
    description: [],
    level: "Intermediate",
    duration: "8 weeks",
    students: "7,650 students",
    rating: 4.8,
    price: 799,
    originalPrice: 1099,
    modules: ["Google Analytics", "Data Visualization", "KPI Tracking", "Attribution Modeling", "+2 more modules"],
    image: "/PremiumCourses/6.jpg",
    discount: 27,
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of digital marketing courses designed by industry experts. 
            Each course includes hands-on projects, real-world case studies, and career support.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover object-top"
                src={course.image}
                alt={course.title}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <i className="ri-star-fill mr-1"></i>
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <i className="ri-time-line mr-1 text-sky-600"></i>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line mr-1 text-sky-600"></i>
                    {course.students}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Course Modules:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {course.modules.map((mod, idx) => (
                      <div key={idx} className="text-xs text-gray-600 flex items-center">
                        <i className="ri-check-line text-sky-600 mr-1"></i>
                        {mod}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-sky-600">${course.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Save {course.discount}%
                  </span>
                </div>

                <button className="font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl px-6 py-3 text-base w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses */}
        <div className="text-center mt-12">
          <button className="font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
