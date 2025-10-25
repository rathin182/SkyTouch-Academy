"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="home"
      className="relative bg-gradient-to-br from-sky-50 to-white min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=Modern%20digital%20marketing%20workspace%20with%20professionals%20collaborating%20on%20laptops%20and%20tablets%2C%20bright%20clean%20office%20environment%20with%20large%20windows%2C%20natural%20lighting%2C%20minimalist%20design%2C%20sky%20blue%20accents%2C%20professional%20atmosphere%2C%20people%20analyzing%20data%20charts%20and%20graphs%2C%20contemporary%20business%20setting%20with%20clean%20white%20backgrounds%20and%20subtle%20blue%20elements&width=1920&height=1080&seq=hero-bg&orientation=landscape')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="w-full">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Digital Marketing with
              <span className="text-sky-600"> Industry Experts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your career with our comprehensive digital marketing programs. Learn from industry leaders, gain practical skills, and join thousands of successful professionals.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-colors whitespace-nowrap">
                Start Learning Today
              </button>
              <button className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-50 transition-colors whitespace-nowrap">
                Free Demo Class
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15,000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Job Placement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Student Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20digital%20marketing%20student%20working%20on%20laptop%20with%20data%20analytics%20dashboard%2C%20modern%20clean%20workspace%2C%20person%20analyzing%20marketing%20metrics%20and%20charts%2C%20bright%20professional%20environment%2C%20sky%20blue%20color%20scheme%2C%20contemporary%20office%20setting%2C%20focused%20individual%20learning%20digital%20marketing%20skills&width=600&height=700&seq=hero-student&orientation=portrait"
              alt="Digital Marketing Learning"
              className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
