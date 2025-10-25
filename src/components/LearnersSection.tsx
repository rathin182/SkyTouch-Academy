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
import { SiAdobe} from "react-icons/si";

interface Company {
  name: string;
  icon: React.ElementType;
}

const companies: Company[] = [
  { name: "Google", icon: FaGoogle },
  { name: "Microsoft", icon: FaMicrosoft },
  { name: "Amazon", icon: FaAmazon },
  { name: "Meta", icon: FaMeta },
  { name: "Apple", icon: FaApple },
  { name: "Netflix", icon: RiNetflixFill },
  { name: "Adobe", icon: SiAdobe },
  { name: "Salesforce", icon: FaSalesforce },
  { name: "HubSpot", icon: FaHubspot },
  { name: "Shopify", icon: FaShopify },
  { name: "Uber", icon: FaUber },
  { name: "Airbnb", icon: FaAirbnb },
];

const LearnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Learners at Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our graduates are making their mark at the world's most innovative
            companies. Join them and take your career to the next level.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, idx) => {
            const Icon = company.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-3">
                  <Icon className="text-2xl text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-sky-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Partner Companies</div>
              <div className="text-sm text-gray-600 mt-1">
                Actively hiring our graduates
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Placement Rate</div>
              <div className="text-sm text-gray-600 mt-1">
                Within 6 months of graduation
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">$75K</div>
              <div className="text-gray-700 font-medium">Average Salary</div>
              <div className="text-sm text-gray-600 mt-1">
                Starting salary for graduates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnersSection;
