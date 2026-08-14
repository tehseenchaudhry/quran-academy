import React from "react";
import { Link } from "react-router-dom";

const BasicIslamicKnowledge = () => {
  return (
    <section className="py-24 px-6 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-[#AF864C] mb-4">
            Basic Islamic Knowledge Program
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the beauty of Islam through our structured learning journey — designed to help 
            you strengthen your faith, understand Islamic values, and live by the teachings of the 
            Quran and Sunnah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The <span className="font-semibold text-[#007A55]">Basic Islamic Knowledge Course</span> at{" "}
              <span className="font-semibold text-[#AF864C]">International Quran Academy</span> introduces 
              learners to the essential principles of Islam — including faith, prayer, moral conduct, 
              and community life. The course simplifies deep concepts, making it easy for beginners and 
              curious learners alike.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed text-justify">
              Guided by qualified teachers, you'll explore how Islamic teachings shape character, encourage 
              peace, and connect believers with Allah in daily life. By the end of this course, you'll gain 
              both understanding and spiritual growth that help you walk the path of faith.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link to="/contact">
                <button className="bg-[#007A55] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#006a4d] transition-colors">
                  Enroll for Free
                </button>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img 
              alt="Learning Islam" 
              className="rounded-2xl cursor-pointer shadow-2xl w-full h-96 object-cover border border-[#007A55]/30 hover:scale-[1.02] transition-all duration-500" 
              src="https://kqsl.lilaceducation.com/wp-content/uploads/2021/06/kid-praying-muslim-1077793-1024x682.jpg"
            />
          </div>
        </div>

        <div className="space-y-10 text-lg text-gray-700 leading-relaxed max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#007A55] text-center mb-4">
            Understanding the Essence of Islam
          </h2>
          <p className="text-justify">
            Islam is a religion of peace that calls humanity to the worship of one true God — Allah — and 
            guides mankind toward a life of justice, mercy, and purpose. It is built upon divine revelation 
            delivered to Prophet Muhammad (peace be upon him) through the Angel Jibreel, compiled in the 
            Holy Quran.
          </p>
          <p className="text-justify">
            Alongside the Quran, Muslims follow the Sunnah — the Prophet's actions and teachings — which 
            provide a living example of faith in practice. Together, these sources teach believers how to 
            lead a meaningful life, rooted in devotion, compassion, and integrity.
          </p>
          <div className="border-l-4 border-[#AF864C] pl-6 italic text-gray-600 bg-gray-50 py-4 rounded-r-xl">
            <p>
              "Whoever follows My guidance will never go astray, nor fall into misery." —{" "}
              <span className="text-[#AF864C] font-semibold">[Surah Ta-Ha, 20:123]</span>
            </p>
          </div>
        </div>

        <div className="space-y-10 text-lg text-gray-700 leading-relaxed max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#AF864C] text-center mb-4">
            Who Are the Followers of Islam?
          </h2>
          <p className="text-justify">
            Muslims are those who surrender their will to Allah and follow His divine guidance. They view 
            life as a sacred trust and strive to live righteously — reflecting honesty, patience, humility, 
            and compassion in all interactions.
          </p>
          <p className="text-justify">
            Regardless of nationality or language, Muslims are united by the declaration of faith —{" "}
            <span className="font-semibold">
              "There is no god but Allah, and Muhammad is His Messenger."
            </span>{" "}
            This unity transcends borders, forming a global brotherhood of believers connected through 
            worship and purpose.
          </p>
          <p className="text-justify">
            Central to Islamic life are the Five Pillars: faith, prayer, charity, fasting, and pilgrimage. 
            These pillars strengthen one's relationship with Allah and build a compassionate and balanced 
            society.
          </p>
        </div>

        <div className="pt-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#007A55] text-center mb-10">
            Explore More Courses
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Course 1 - Arabic Grammar */}
            <div data-aos="zoom-in" data-aos-delay="0" className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  alt="Arabic Grammar Course" 
                  className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1612536816763-78c1f4aa6f10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJhYmljJTIwR3JhbW1hciUyMENvdXJzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  8 weeks
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#007A55]">Arabic Grammar Course</h3>
                <p className="text-gray-700 text-justify text-sm leading-relaxed">
                  Master Arabic grammar fundamentals for Quranic understanding with expert guidance.Explore authentic Hadith collections and their practical applications. Understand chain of narration and historical context. Apply teachings in daily life.
                </p>
              </div>
            </div>

            {/* Course 2 - Arabic Language */}
            <div data-aos="zoom-in" data-aos-delay="100" className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  alt="Arabic Language Course" 
                  className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-105" 
                  src="https://media.istockphoto.com/id/853366056/photo/arabic-kids-writing-name-of-the-fruits-for-practice.webp?a=1&b=1&s=612x612&w=0&k=20&c=PMRcyvadGsF2WiYKz0CUu6JOHFMBpRhMgbq_8aIgv5I="
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  12 weeks
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#007A55]">Arabic Language Course</h3>
                <p className="text-gray-700 text-justify text-sm leading-relaxed">
                  Learn to speak Arabic easily with our comprehensive language course. Develop speaking, listening, and writing skills in Arabic. Focus on Modern Standard Arabic with Quranic vocabulary. Perfect for all proficiency levels.
                </p>
              </div>
            </div>

            {/* Course 3 - Hadith Course */}
            <div data-aos="zoom-in" data-aos-delay="200" className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  alt="Hadith Course" 
                  className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1608762431616-44f234e3b5d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  10 weeks
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#007A55]">Hadith Course</h3>
                <p className="text-gray-700 text-justify text-sm leading-relaxed">
                  Study authentic sayings of Prophet Muhammad (peace be upon him). Explore authentic Hadith collections and their practical applications. Understand chain of narration and historical context. Apply teachings in daily life.
                </p>
              </div>
            </div>

            {/* Course 4 - Tajweed Course */}
            <div data-aos="zoom-in" data-aos-delay="300" className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  alt="Tajweed Course" 
                  className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1652494154208-f74ee3e0a979?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFqd2VlZCUyMENvdXJzZSUyMGZvciUyMGFyYWJpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  6 weeks
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#007A55]">Tajweed Course</h3>
                <p className="text-gray-700 text-justify text-sm leading-relaxed">
                  Learn Quran recitation with proper pronunciation and beauty. Master proper Quranic pronunciation and recitation rules. Learn Makharij and Sifaat of Arabic letters. Develop beautiful and accurate recitation style.
                </p>
              </div>
            </div>

            {/* Course 5 - Fundamentals of Islam */}
            <div data-aos="zoom-in" data-aos-delay="400" className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  alt="Fundamentals of Islam Course" 
                  className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-105" 
                  src="https://qulquran.com/wp-content/uploads/2022/10/image20180911185314.jpg"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  8 weeks
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#007A55]">Fundamentals of Islam Course</h3>
                <p className="text-gray-700 text-justify text-sm leading-relaxed">
                  Understand essential Islamic beliefs and practices. Comprehensive introduction to Islamic beliefs and worship. Cover five pillars and six articles of faith. Learn practical implementation in daily life.
                </p>
              </div>
            </div>

            {/* Course 6 - Islamic Studies */}
            <div data-aos="zoom-in" data-aos-delay="500" className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  alt="Islamic Studies Course" 
                  className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-105" 
                  src="https://qurantutorsacademy.com/wp-content/uploads/2024/07/Islamic-Studies-Course.jpg"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  16 weeks
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#007A55]">Islamic Studies Course</h3>
                <p className="text-gray-700 text-justify text-sm leading-relaxed">
                  Explore Quran, Hadith, and Seerah in integrated program. Holistic study of Quranic tafsir, Hadith sciences, and Islamic history. Understand application of teachings in modern context. Comprehensive curriculum for deeper understanding.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center mt-16" data-aos="zoom-in">
          <Link to="/contact">
            <button className="bg-[#007A55] cursor-pointer hover:bg-[#AF864C] text-white px-5 lg:px-12 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
              Begin Your Faithful Learning Journey
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BasicIslamicKnowledge;