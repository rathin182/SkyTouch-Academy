"use client";

import React from "react";

interface Partner {
  name: string;
  iconClass: string;
  description: string;
}

const partners: Partner[] = [
  { name: "Google Partners", iconClass: "ri-google-fill", description: "Certified Google Ads Training Partner" },
  { name: "Facebook Blueprint", iconClass: "ri-facebook-fill", description: "Official Facebook Marketing Partner" },
  { name: "HubSpot Academy", iconClass: "ri-building-fill", description: "HubSpot Certified Training Provider" },
  { name: "Shopify Partners", iconClass: "ri-shopping-bag-fill", description: "Shopify Plus Partner for E-commerce" },
  { name: "LinkedIn Learning", iconClass: "ri-linkedin-fill", description: "LinkedIn Marketing Solutions Partner" },
  { name: "Amazon Advertising", iconClass: "ri-amazon-fill", description: "Amazon DSP Certified Partner" },
];

const recognitions = [
  { title: "Certified Curriculum", iconClass: "ri-award-line", description: "Industry-approved course content" },
  { title: "Quality Assurance", iconClass: "ri-shield-check-line", description: "Regular audits and updates" },
  { title: "Global Recognition", iconClass: "ri-global-line", description: "Worldwide industry acceptance" },
];

const BrandPartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Brand Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with industry leaders to bring you the most current and relevant training. 
            Our certifications are recognized and valued by employers worldwide.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${partner.iconClass} text-2xl text-sky-600`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Industry Recognition */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
            <p className="text-gray-600 mb-6">
              Our partnerships ensure that you receive training that meets the highest industry standards and prepares you for real-world challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recognitions.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className={`${item.iconClass} text-xl text-sky-600`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
