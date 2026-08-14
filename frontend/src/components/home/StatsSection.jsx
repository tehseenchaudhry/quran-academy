import React, { useEffect, useRef, useState } from "react";
import {
  FaUserCheck,
  FaGlobe,
  FaChartLine,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

/* COUNTER HOOK */
const useCounter = (end, step, start, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const totalSteps = Math.ceil(end / step);
    const intervalTime = duration / totalSteps;

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [start, end, step, duration]);

  return count;
};

/* STATS DATA */
const stats = [
  {
    id: 1,
    title: "Years of Experience",
    end: 12,
    step: 1,
    suffix: "+",
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    title: "Satisfied Students",
    end: 500,
    step: 20,
    suffix: "+",
    icon: <FaUserCheck />,
  },
  {
    id: 3,
    title: "Countries Worldwide",
    end: 17,
    step: 1,
    suffix: "+",
    icon: <FaGlobe />,
  },
  {
    id: 4,
    title: "Success Rate",
    end: 95,
    step: 5,
    suffix: "%",
    icon: <FaChartLine />,
  },
];

/* ================= COMPONENT */
const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  /* ===== Scroll Detection ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 lg:py-16 bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: "url('/home-bg-img-fix.jpg')" }}
    >
      {/* Overlay - Updated with Green */}
      <div className="absolute inset-0 bg-[#0a5c3a]/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
            Our <span className="text-[#c9a050]">Achievements</span>
          </h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto" data-aos="fade-left">
            We deliver excellence through experience, trust, and global reach
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => {
            const count = useCounter(item.end, item.step, startCount);

            return (
              <div
                key={item.id}
                className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-3 hover:scale-105 transition-transform duration-700   border border-white/10 hover:border-[#c9a050]/90 hover:shadow-[#c9a050]/20"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white/90 bg-[#c9a050] border border-[#c9a050]/30   group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-3xl font-bold text-white">
                      {count}
                      {item.suffix}
                    </h3>
                    <p className="text-white text-sm md:text-base  transition-colors duration-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;