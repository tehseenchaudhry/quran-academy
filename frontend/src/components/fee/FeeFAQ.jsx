import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is included in the course fee?",
    answer:
      "The course fee includes live one-on-one sessions with certified teachers, personalized learning materials, progress tracking reports, and access to recorded sessions for revision. All our courses include complete support from enrollment to completion.",
  },
  {
    id: 2,
    question: "Are there any hidden charges?",
    answer:
      "No, absolutely not! Our fee structure is completely transparent. There are no hidden charges, registration fees, or extra costs. The price you see is the price you pay. We believe in honest and clear communication with our students.",
  },
  {
    id: 3,
    question: "Do you offer discounts for siblings or multiple courses?",
    answer:
      "Yes, we offer a 10% discount for siblings enrolling together and a 15% discount for students enrolling in multiple courses simultaneously. We also have special family packages for 3 or more family members. Contact us for more details.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods including Credit/Debit Cards (Visa, MasterCard), Bank Transfers, EasyPaisa, JazzCash, and PayPal. We also offer monthly and yearly payment options with special discounts on annual packages.",
  },
  {
    id: 5,
    question: "Can I cancel my course at any time?",
    answer:
      "Yes, you can cancel your course anytime with a 30-day notice. We also offer a 7-day money-back guarantee if you're not satisfied with the first week of classes. Your satisfaction is our top priority.",
  },
  {
    id: 6,
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer 3 FREE trial classes so you can experience our teaching style, interact with our qualified teachers, and see the quality of our courses before you commit. No credit card required for the trial.",
  },
];

const FeeFAQ = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-10 lg:py-16 bg-[#f8f6f0] ">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
        
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0a5c3a]/10 text-[#0a5c3a] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M15.5 9.5a4 4 0 0 0-7 0c0 1.5.8 2.8 2 3.5V16h3v-3c1.2-.7 2-2 2-3.5z" />
  </svg>
  Got Questions?
</span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0a5c3a] font-serif">
            Frequently Asked <span className="text-[#c9a050]">Questions</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to the most common questions about our fee structure
            and payment policies.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 border-[#c9a050]"
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
                  <p className="pb-5 pt-1 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10" data-aos="fade-up">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="/contact" className="text-[#c9a050] font-semibold hover:underline">
              Contact us
            </a>{" "}
            and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeeFAQ;