import React from "react";
import {
  FaBookOpen,
  FaQuran,
  FaMosque,
  FaLanguage,
  FaGraduationCap,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaQuran />,
    title: "Quran Reading",
    description:
      "Learn to read the Holy Quran correctly with proper pronunciation and guidance from qualified teachers.",
  },
  {
    id: 2,
    icon: <FaBookOpen />,
    title: "Tajweed Course",
    description:
      "Improve your Quran recitation by learning Tajweed rules and applying them correctly during recitation.",
  },
  {
    id: 3,
    icon: <FaMosque />,
    title: "Quran Memorization",
    description:
      "Memorize the Holy Quran with a structured learning plan, regular revision, and personalized teacher support.",
  },
  {
    id: 4,
    icon: <FaLanguage />,
    title: "Arabic Language",
    description:
      "Develop your Arabic language skills to better understand Quranic vocabulary and Islamic teachings.",
  },
  {
    id: 5,
    icon: <FaGraduationCap />,
    title: "Tafseer Course",
    description:
      "Explore the meanings, explanations, and lessons of Quranic verses with knowledgeable instructors.",
  },
  {
    id: 6,
    icon: <FaStar />,
    title: "Islamic Studies",
    description:
      "Learn essential Islamic knowledge including beliefs, manners, daily practices, and important teachings.",
  },
];

const ServicesCards = () => {
  return (
    <section
      id="services-cards"
      className="relative py-10 lg:py-16 bg-[#fdf6f0] overflow-hidden "
    >

      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#c9a050]/10 rounded-full blur-3xl"
        data-aos="fade-left"
        data-aos-duration="1200"
      ></div>

      <div
        className="absolute -bottom-40 -left-32 w-96 h-96 bg-[#0a5c3a]/10 rounded-full blur-3xl"
        data-aos="fade-right"
        data-aos-duration="1200"
      ></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        <div
          className="max-w-3xl mx-auto text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          {/* Label */}

          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0a5c3a]/10 text-[#0a5c3a] border border-[#0a5c3a]/10 text-sm font-semibold uppercase tracking-[2px] mb-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
            What We Offer
          </span>

          {/* Heading */}

          <h2
            className="text-4xl md:text-5xl font-bold font-serif text-[#0a5c3a] leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our Quran &{" "}
            <span className="text-[#c9a050]">
              Islamic Services
            </span>
          </h2>

          {/* Decorative Line */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#c9a050] rounded-full"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a5c3a]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#c9a050]"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#c9a050] rounded-full"></div>
        </div>

          {/* Description */}

          <p
            className="mt-6 text-gray-600 text-base md:text-lg leading-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Discover our carefully designed Quran and Islamic learning
            programs for children, adults, beginners, and advanced
            learners. Learn at your own pace with qualified teachers
            and personalized online classes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              data-aos-duration="800"
              data-aos-offset="120"
              className="group relative bg-white rounded-3xl p-8 border border-[#c9a050]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Top Gold Line */}

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a5c3a] to-[#c9a050]"></div>

              {/* Decorative Circle */}

              <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#c9a050]/5 group-hover:bg-[#c9a050]/15 transition-all duration-500"></div>

              {/* Icon */}

              <div
                className="relative z-10 w-16 h-16 rounded-2xl bg-[#0a5c3a]/10 text-[#0a5c3a] flex items-center justify-center text-2xl mb-7 group-hover:bg-[#0a5c3a] group-hover:text-white group-hover:scale-110 transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
              >
                {service.icon}
              </div>

              {/* Number */}

              <span className="absolute top-7 right-7 text-5xl font-bold text-gray-100 group-hover:text-[#c9a050]/10 transition-colors duration-500">
                0{service.id}
              </span>

              {/* Content */}

              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold text-[#0a5c3a] mb-4 group-hover:text-[#c9a050] transition-colors duration-300"
                  data-aos="fade-right"
                  data-aos-delay={350 + index * 100}
                >
                  {service.title}
                </h3>

                <p
                  className="text-gray-600 leading-7 text-base"
                  data-aos="fade-left"
                  data-aos-delay={400 + index * 100}
                >
                  {service.description}
                </p>

              </div>

              {/* Bottom Hover Effect */}

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0a5c3a] to-[#c9a050] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="300"
        >
          <p className="text-gray-600 mb-5">
            Not sure which course is right for you?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0a5c3a] text-white font-semibold shadow-lg hover:bg-[#c9a050] hover:-translate-y-1 transition-all duration-300"
          >
            Talk To Our Team

            <FaArrowRight className="text-sm" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;