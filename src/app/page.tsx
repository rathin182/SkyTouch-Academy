
import React from "react";
import AdvantageSection from "@/components/AdvantageSection";
import AlumniSection from "@/components/AlumniSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import Footer from "@/components/Footer";
import FreeCoursesSection from "@/components/FreeCoursesSection";
import HeroSection from "@/components/HeroSection";
import HiringPartnersSection from "@/components/HiringPartnersSection";
import InstructorSection from "@/components/InstructorSection";
import LearnersSection from "@/components/LearnersSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkshopsSection from "@/components/WorkshopsSection";

import Image from "next/image";
import "remixicon/fonts/remixicon.css";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AlumniSection />
      <WorkshopsSection />
      <AdvantageSection />
      <CoursesSection />
      <LearnersSection />
      <BrandPartnersSection />
      <TestimonialsSection />
      <InstructorSection />
      <HiringPartnersSection />
      <FreeCoursesSection />
      <FeaturedInSection />
      <Footer />
    </div>
  );
}
