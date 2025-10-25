"use client";

import React from "react";
import {
  FaGoogle,
  FaAmazon,
  FaApple,
  FaSalesforce,
  FaHubspot,
  FaShopify,
  FaUber,
  FaAirbnb,
  FaMicrosoft,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";
import { SiAdobe } from "react-icons/si";

interface HiringPartner {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  openings: string;
}

const hiringPartners: HiringPartner[] = [
  { name: "Google", icon: FaGoogle, openings: "150+ openings" },
  { name: "Microsoft", icon: FaMicrosoft, openings: "120+ openings" },
  { name: "Amazon", icon: FaAmazon, openings: "200+ openings" },
  { name: "Meta", icon: FaMeta, openings: "80+ openings" },
  { name: "Apple", icon: FaApple, openings: "60+ openings" },
  { name: "Netflix", icon: RiNetflixFill, openings: "45+ openings" },
  { name: "Salesforce", icon: FaSalesforce, openings: "90+ openings" },
  { name: "Adobe", icon: SiAdobe, openings: "70+ openings" },
  { name: "Shopify", icon: FaShopify, openings: "55+ openings" },
  { name: "HubSpot", icon: FaHubspot, openings: "40+ openings" },
  { name: "Uber", icon: FaUber, openings: "65+ openings" },
  { name: "Airbnb", icon: FaAirbnb, openings: "35+ openings" },
];

const HiringPartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built strong relationships with leading companies who actively recruit our graduates. Get direct access to exclusive job opportunities and fast-track your career growth.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {hiringPartners.map((hiring, idx) => {
            const Icon = hiring.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-3">
                  <Icon className="text-3xl text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{hiring.name}</span>
                <p className="text-xs text-sky-600">{hiring.openings}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HiringPartnersSection;
