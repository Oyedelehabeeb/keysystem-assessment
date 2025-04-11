"use client";

import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage1 from "@/public/key-image-01.png";
import HeroImage2 from "@/public/key-image-02.png";
import CustomCard from "@/components/CustomCard";
import VisionMission from "@/components/VissionMissionCard";
import Certifications from "@/components/CertificationCard";
import TrustUs from "@/components/TrustUsCard";
import StrategicConsultation from "@/components/ConsultationCard";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import KeySystemFooter from "@/components/Footer";

export default function Home() {
  const trustedPartners = [
    {
      name: "sterling bank",
      image: "/keysystem-01.png",
    },
    {
      name: "crusader sterling",
      image: "/keysystem-02.png",
    },
    {
      name: "NAFC",
      image: "/keysystem-03.png",
    },
    {
      name: "NPF",
      image: "/keysystem-04.png",
    },
    {
      name: "military pension",
      image: "/keysystem-05.png",
    },
    {
      name: "stanbic bank",
      image: "/keysystem-06.png",
    },
    {
      name: "bank musqit",
      image: "/keysystem-07.png",
    },
  ];
  const brands = [
    {
      name: "software group",
      image: "/keysystem-45.png",
    },
    {
      name: "software group",
      image: "/keysystem-40.png",
    },
    {
      name: "cognizant",
      image: "/keysystem-41.png",
    },
    {
      name: "temenos",
      image: "/keysystem-42.png",
    },
    {
      name: "netinfo",
      image: "/keysystem-43.png",
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-[#0C0F2C] to-[#040514] text-white overflow-x-hidden">
      {/* Decorative Gradient Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-700 to-purple-700 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-700 to-red-700 rounded-full opacity-30 blur-3xl animate-pulse" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 relative z-10">
        <div className="px-4 py-3 max-w-7xl mx-auto w-[45%]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            IT Consulting for Forward-thinking Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl mb-6"
          >
            Driving Digital Transformation, One Solution at a Time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <Button variant="default" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-[80%] max-w-7xl h-[500px] mt-12 mx-auto"
        >
          <Image
            src={HeroImage1}
            alt="Hero Image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-10 px-4 text-center">
        <div className="flex flex-wrap justify-center gap-8">
          {trustedPartners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.image}
                alt={`${partner.name} logo`}
                width={150}
                height={50}
                className="opacity-100 hover:opacity-80 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-5 capitalize"
        >
          Why we are your trusted consultant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="capitalize text-zinc-400 text-[20px] animate-pulse mb-6"
        >
          Empowering Businesses with Cutting-edge Technology
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl md:text-[28px] text-neutral-400 mb-15 flex flex-col gap-2"
        >
          <span>
            Excellence isn&apos;t a goal, it&apos;s our DNA; our relentless
            pursuit of
          </span>
          <span>
            excellence is the driving force behind our success. Excellence is
            our
          </span>
          <span>legacy, and we are proud to carry it forward.</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm md:text-[20px] text-neutral-400 mb-5 flex flex-col gap-2"
        >
          Watch the video to see how we are innovating to keep businesses on top
          of their games.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-[80%] max-w-7xl h-[500px] mt-12 mx-auto rounded-lg shadow-[0_0_300px_-6px_rgba(59,130,246,0.6)]"
        >
          <Image
            src={HeroImage2}
            alt="Hero Image"
            fill
            placeholder="blur"
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </section>

      {/* Our Offerings Section */}
      <section className=" relative py-10 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:text-[24px] font-bold mb-5 capitalize mt-30"
        >
          Our Offerings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm md:text-[25px] text-neutral-400 mb-5 flex flex-col gap-2"
        >
          <span>
            Leverage KeySystem’s cutting-edge expertise to transform your
          </span>
          <span>
            business. Our tailored software and cybersecurity solutions drive
          </span>
          <span>
            efficiency, security, and growth. We empower businesses to
          </span>
          <span>thrive in the digital age</span>
        </motion.p>
        <div>
          <Button variant="default">Learn more</Button>
        </div>
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-4">
            <CustomCard
              text="Core banking services"
              gradient="from-green-800 to-green-900"
            />
            <CustomCard
              text="Staff augmentation solutions"
              gradient="from-green-800 to-green-900"
            />
            <CustomCard
              text="Business Intelligence"
              gradient="from-purple-800 to-purple-900"
            />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <CustomCard
              text="Digital Banking & financial inclusion"
              gradient="from-gray-700 to-gray-900"
              center
            />
            <CustomCard
              text="Internal audit solutions"
              gradient="from-gray-700 to-gray-900"
            />
            <CustomCard
              text="KeySystem software testing"
              gradient="from-teal-800 to-teal-900"
            />
          </div>

          <div className="flex flex-col gap-4">
            <CustomCard
              text="Online/mobile lending solution"
              gradient="from-purple-800 to-purple-900"
            />
            <CustomCard
              text="Data Warehouse"
              gradient="from-green-800 to-green-900"
            />
            <CustomCard
              text="Cybersecurity Solutions"
              gradient="from-purple-800 to-purple-900"
            />
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-slate-950 py-20 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          What we represent
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-[20px] mb-6 flex flex-col gap-2"
        >
          <span>Our relentless pursuit of excellence is the driving force</span>
          <span>behind our success</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm md:text-[25px] text-neutral-400 mb-5 flex flex-col gap-2"
        >
          <span>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
            excellence is the driving force
          </span>
          <span>
            behind our success. Excellence is our legacy, and we are proud to
            carry it forward. Watch
          </span>
          <span>
            the video to see how we are innovating to keep businesses on top of
            their games.
          </span>
        </motion.p>
        <VisionMission />
      </section>

      {/* Compliance Certifications Section */}
      <section className="py-15 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-5 flex flex-col gap-2 capitalize"
        >
          <span>Compliance Certifications/</span>
          <span>Standards we specialize in</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm md:text-[25px] text-zinc-200 mb-6 flex flex-col gap-2"
        >
          <span>
            Elevate Your Organization&apos;s Security Posture with Our
          </span>
          <span>Compliance/Standards Consulting Services</span>
        </motion.p>
        <div>
          <Button variant="default">Contact Us</Button>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Certifications />
        </div>
      </section>

      {/* They trus us section */}
      <section className="px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          They trust us
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <TrustUs />
        </div>
      </section>

      {/* Call To Action Footer Section */}
      <section className="py-10 px-4 text-center bg-[#10131E]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="capitalize text-zinc-400 text-[20px] mb-6"
        >
          At KeySystem, we leave you with a lasting impression
        </motion.p>
        <div>
          <StrategicConsultation />
        </div>
      </section>
      {/* Our partners section */}
      <section className="px-4 py-6 text-center bg-gray-950">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Our partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="capitalize text-zinc-400 text-[20px] mb-6"
        >
          Creating a synergy with global brands
        </motion.p>
        <section className="py-10 px-4 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={50}
                  className="opacity-100 hover:opacity-80 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Ready to get Started section */}
        <section>
          <ReadyToGetStarted />
        </section>
        <footer>
          <KeySystemFooter />
        </footer>
      </section>
    </main>
  );
}
