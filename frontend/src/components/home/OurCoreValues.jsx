import React from "react";
import {
  FaShieldAlt,
  FaHandshake,
  FaBookOpen,
} from "react-icons/fa";

const OurCoreValue = () => {
  return (
    <section className="py-10 lg:py-16 bg-[#f8f6f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#c9a050]/20 backdrop-blur-sm text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/30 shadow-lg">
  ✦ Our Guiding Values ✦
</span>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-[#0a5c3a]">
            Our Core <span className="text-[#c9a050]">Values</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            Our academy is built upon authentic Islamic teachings, qualified
            educators, and a commitment to helping every student grow in Quranic
            knowledge with confidence.
          </p>
        </div>


        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* Left Content */}
          <div data-aos="fade-left">

            <div className="space-y-6">


              {/* Card 1 */}
              <div className="group flex gap-5 p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#c9a050]">

                <div className="w-16 h-16 rounded-2xl bg-[#0a5c3a] flex items-center justify-center text-white text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0a5c3a] mb-2">
                    Faith & Integrity
                  </h3>

                  <p className="text-gray-600 leading-7">
                    We teach the Holy Quran with honesty, sincerity and complete
                    adherence to authentic Islamic teachings.
                  </p>
                </div>

              </div>



              {/* Card 2 */}
              <div className="group flex gap-5 p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#c9a050]">

                <div className="w-16 h-16 rounded-2xl bg-[#c9a050] flex items-center justify-center text-white text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <FaHandshake />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#c9a050] mb-2">
                    Respect & Compassion
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Every student is treated with kindness, patience and respect
                    regardless of age or learning level.
                  </p>
                </div>

              </div>



              {/* Card 3 */}
              <div className="group flex gap-5 p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#c9a050]">

                <div className="w-16 h-16 rounded-2xl bg-[#0a5c3a] flex items-center justify-center text-white text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <FaBookOpen />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0a5c3a] mb-2">
                    Excellence in Learning
                  </h3>

                  <p className="text-gray-600 leading-7">
                    We provide structured Quran education through qualified
                    teachers and personalized online classes.
                  </p>
                </div>

              </div>


            </div>

          </div>




          {/* Right Image */}
          <div data-aos="fade-right" className="relative">

            <img
              src="/our-core-img.jpg"
              alt="Our Values"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/50 to-transparent rounded-3xl"></div>


            {/* Shine Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="shine"></div>
            </div>


            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-[#2C3E50] to-transparent rounded-b-3xl">

              <h3 className="font-semibold text-lg text-[#c9a050]">
                Authentic Islamic Education
              </h3>

              <p className="text-sm opacity-90">
                Teaching with devotion since 2010
              </p>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
};

export default OurCoreValue;