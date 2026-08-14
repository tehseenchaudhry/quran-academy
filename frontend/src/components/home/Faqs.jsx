import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How to learn Norani Qaida?",
    answer:
      "Our Norani Qaida course is designed for beginners to learn the Arabic alphabet and basic pronunciation rules. We use interactive methods, visual aids, and gradual progression to ensure students master the fundamentals before moving to Quranic reading.",
  },
  {
    id: 2,
    question: "How to learn Quran online effectively?",
    answer:
      "We provide structured one-on-one sessions with certified tutors, interactive learning materials, and regular assessments. Our platform allows flexible scheduling, progress tracking, and personalized learning paths tailored to each student's pace and goals.",
  },
  {
    id: 3,
    question: "Why memorize (Hifz) the Holy Quran?",
    answer:
      "Memorizing the Quran brings immense spiritual rewards, strengthens faith, and provides lifelong guidance. It preserves the Quran in your heart, connects you with Islamic tradition, and earns blessings in this life and the hereafter.",
  },
  {
    id: 4,
    question: "What is Tajweed and why is it important?",
    answer:
      "Tajweed is the set of rules for correct pronunciation during Quran recitation. It ensures each letter is articulated properly, preserving the meaning and beauty of Allah's words. Proper Tajweed is essential for respectful and accurate Quran recitation.",
  },
  {
    id: 5,
    question: "How do you teach Tajweed to children?",
    answer:
      "We use child-friendly methods including visual aids, games, repetition, and positive reinforcement. Our teachers are specially trained to work with children, making learning enjoyable while ensuring proper technique through gradual, step-by-step instruction.",
  },
  {
    id: 6,
    question: "What is Tafseer and when should I study it?",
    answer:
      "Tafseer is the scholarly interpretation and explanation of the Quran's meanings. We recommend starting Tafseer after establishing basic Quran reading skills. Our courses provide context, historical background, and deeper understanding of Quranic verses.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-10 lg:py-16 bg-[#f8f6f0] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Heading */}
        <div className="mb-12 text-center" data-aos="zoom-in">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0a5c3a]">
            Frequently <span className="text-[#c9a050]">Asked Questions</span>
          </h2>

          <div className="w-24 h-1 bg-[#c9a050] rounded-full mx-auto mt-4"></div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to the most common questions about our courses and programs.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#c9a050] overflow-hidden"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                {/* Question */}
                <button
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-[#0a5c3a]/5 transition-colors duration-300"
                >
                  <h3 className={`text-base md:text-lg font-semibold ${
                    isActive ? "text-[#c9a050]" : "text-[#0a5c3a]"
                  } hover:text-[#c9a050] transition-colors duration-300 pr-4`}>
                    {item.question}
                  </h3>
                  
                  {/* Chevron Icon - Rotates on Active */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`w-5 sm:w-6 h-5 sm:h-6 transform transition-all duration-300 flex-shrink-0 ml-2 ${
                      isActive 
                        ? "rotate-180 text-[#c9a050]" 
                        : "rotate-0 text-[#0a5c3a]"
                    }`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-5 pt-1 text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;