import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    id: 1,
    name: "Momina Iqbal",
    role: "Hifz Student",
    program: "Hifz Program",
    img: "/testominal-img1.jpg",
    rating: 5,
    feedback:
      "Alhamdulillah, I've started my Hifz journey here. The structured plan, daily support, and regular assessments keep me motivated and consistent. The teachers are knowledgeable and make memorization enjoyable.",
  },
  {
    id: 2,
    name: "Sara Khan",
    role: "Parent",
    program: "Tajweed Program",
    img: "/testominal-img2.jpg",
    rating: 4,
    feedback:
      "Quran Learn Academy has been a blessing for our family. My son loves his teacher and has shown remarkable progress in Tajweed within just a few months. The personalized approach and regular progress reports keep us informed and engaged.",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    role: "Student",
    program: "Quran Reading",
    img: "/testominal-img3.jpg",
    rating: 5,
    feedback:
      "Learning the Quran online is so convenient! The teachers are patient and supportive, especially with Tajweed rules. The flexible scheduling allows me to balance my studies and work. Highly recommended for busy learners",
  },
];

const Testimonials = () => {
 

  return (
    <section className="py-10 lg:py-16 bg-[#f8f6f0]">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Heading */}
        <span
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 mb-4"
          data-aos="fade-up"
        >
          <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
          Testimonials
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0a5c3a] mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What Our Students & Parents Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={2000}
          pagination={{ clickable: true }}
        >
          {testimonials.map((test, index) => (
            <SwiperSlide key={test.id}>
              <div
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 mx-4 border border-[#c9a050]/10"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Top Info */}
                <div className="flex items-center mb-6 gap-4">
                  <img
                    src={test.img}
                    alt={test.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-[#c9a050]/30"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[#0a5c3a] font-semibold text-lg">
                      {test.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{test.role}</p>
                    <span className="bg-[#0a5c3a] text-white text-xs font-semibold mt-1 px-3 py-1 rounded-full w-max">
                      {test.program}
                    </span>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-600 text-base md:text-lg mb-4 italic">
                  "{test.feedback}"
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mt-4 justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < test.rating ? "text-[#c9a050]" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;