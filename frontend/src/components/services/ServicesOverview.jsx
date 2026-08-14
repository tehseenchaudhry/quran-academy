import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ServicesOverview = () => {
  return (
    <section className="py-10  lg:py-16 bg-[#fdf6f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Main Overview */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mt-16">

          {/* Left Content */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/services-overview.jpg"
                alt="Online Quran learning"
                className="w-full h-[480px] object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a5c3a]/80 via-transparent to-transparent"></div>

              {/* Bottom Text */}
              <div
                className="absolute bottom-0 left-0 right-0 p-7"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p className="text-[#c9a050] font-semibold uppercase tracking-[2px] text-sm mb-2">
                  Learn With Confidence
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Your Quran Learning Journey Starts Here
                </h3>
              </div>
            </div>

            {/* Decorative Box */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 border-4 border-[#c9a050]/30 rounded-3xl -z-0"></div>
          </div>

          {/* Right Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <span className="text-[#c9a050] font-semibold uppercase tracking-[2px] text-sm">
              Why Choose Our Services
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-[#0a5c3a] mt-3 leading-tight">
              A Better Way to Learn{" "}
              <span className="text-[#c9a050]">
                Quran Online
              </span>
            </h3>

            <p
              className="text-gray-600 text-lg leading-8 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our services are designed to make Quranic and Islamic learning
              simple, accessible, and meaningful. Whether you are starting
              from the basics or looking to improve your existing knowledge,
              our teachers provide guidance according to your learning needs.
            </p>

            {/* Points */}
            <div className="space-y-4 mt-7">
              {[
                "Personalized learning according to your level",
                "Experienced and dedicated Quran teachers",
                "Convenient online classes from anywhere",
                "Supportive and Islamic learning environment",
              ].map((point, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#c9a050] flex-shrink-0" />

                  <span className="text-gray-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;