import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaGavel, FaFileContract, FaUserShield, FaCreditCard, FaBookOpen, FaUsers, FaShieldAlt } from "react-icons/fa";

const TermsConditions = () => {
  return (
    <section className="min-h-screen py-20 bg-[#f8f6f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 mb-4">
            <FaGavel className="text-[#c9a050]" />
            Terms & Conditions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a5c3a] mb-4">
            Terms & <span className="text-[#c9a050]">Conditions</span>
          </h1>
          <div className="w-24 h-1 bg-[#c9a050] rounded-full mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services. 
            By enrolling in our courses, you agree to be bound by these terms.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-white max-w-2xl mx-auto rounded-2xl p-4 text-center shadow-md border border-[#c9a050]/10 mb-8">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Last Updated:</span> January 1, 2025
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#c9a050] transition-colors duration-300">Home</Link>
          <FaChevronRight className="text-xs" />
          <span className="text-[#c9a050] font-semibold">Terms & Conditions</span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          
          {/* Acceptance of Terms */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaFileContract className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">1. Acceptance of Terms</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>
                By accessing and using the Al Hafiz Online Quran Academy website and services, 
                you agree to comply with and be bound by these terms and conditions. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
          </div>

          {/* Services Provided */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaBookOpen className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">2. Services Provided</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>Al Hafiz Online Quran Academy provides the following services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Online Quran reading and recitation classes</li>
                <li>Tajweed and Tafseer courses</li>
                <li>Quran memorization programs (Hifz)</li>
                <li>Arabic language and Islamic studies</li>
                <li>One-on-one personalized learning sessions</li>
              </ul>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaUsers className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">3. User Responsibilities</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your login credentials</li>
                <li>Attend scheduled classes on time</li>
                <li>Complete assigned homework and practice regularly</li>
                <li>Respect teachers and fellow students</li>
                <li>Notify the academy of any changes in contact information</li>
              </ul>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaCreditCard className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">4. Payment Terms</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <ul className="list-disc pl-6 space-y-2">
                <li>Course fees must be paid in advance</li>
                <li>We accept payments via credit/debit cards, bank transfers, and EasyPaisa</li>
                <li>Fees are non-refundable after the course has started</li>
                <li>We offer a 7-day money-back guarantee for new enrollments</li>
                <li>Discounts are available for siblings and multiple course enrollments</li>
              </ul>
            </div>
          </div>

          {/* Cancellation & Refund */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaGavel className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">5. Cancellation & Refund Policy</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Free Trial:</span> 3 free trial classes available for new students</li>
                <li><span className="font-semibold">Cancellation:</span> 30-day notice required for course cancellation</li>
                <li><span className="font-semibold">Refunds:</span> Full refund within first 7 days of enrollment</li>
                <li><span className="font-semibold">Missed Classes:</span> Can be rescheduled with 24-hour notice</li>
                <li><span className="font-semibold">No-Show:</span> Classes missed without notice will be counted</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaUserShield className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">6. Intellectual Property</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>All content on this website, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Course materials and curriculum</li>
                <li>Videos, audio recordings, and presentations</li>
                <li>Text, graphics, and logos</li>
                <li>Software and website design</li>
              </ul>
              <p className="mt-3">is the property of Al Hafiz Online Quran Academy and is protected by copyright laws.</p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-gradient-to-r from-[#0a5c3a] to-[#0d7c5b] rounded-2xl p-8 text-white" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaShieldAlt /> 7. Limitation of Liability
            </h2>
            <div className="space-y-3 text-white/90">
              <p>
                Al Hafiz Online Quran Academy shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical issues or internet connectivity problems</li>
                <li>Any unauthorized access to your account</li>
                <li>Any loss or damage caused by third-party services</li>
                <li>Any force majeure events beyond our control</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaGavel className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">8. Termination</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>We reserve the right to terminate or suspend your account without prior notice if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You violate these terms and conditions</li>
                <li>You engage in fraudulent or illegal activities</li>
                <li>You fail to make payments on time</li>
                <li>Your behavior disrupts the learning environment</li>
              </ul>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaFileContract className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">9. Changes to Terms</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>
                We reserve the right to update or modify these terms at any time without prior notice. 
                Your continued use of our services constitutes acceptance of the updated terms.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Effective Date:</span> All changes are effective immediately upon posting.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10 text-center" data-aos="fade-up" data-aos-delay="900">
            <h2 className="text-xl font-bold text-[#0a5c3a] mb-3">10. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of Pakistan. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Bahawalpur.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10 text-center" data-aos="fade-up" data-aos-delay="1000">
            <h2 className="text-xl font-bold text-[#0a5c3a] mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these terms, please contact us:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:info@alhafiz.com" className="text-[#c9a050] hover:underline">
                info@alhafiz.com
              </a>
              <span className="text-gray-300">|</span>
              <a href="tel:+923006868033" className="text-[#c9a050] hover:underline">
                +92 300 6868033
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TermsConditions;