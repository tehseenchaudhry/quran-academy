import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaShieldAlt, FaLock, FaUserSecret, FaCookie, FaDatabase } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen py-20 bg-[#f8f6f0]">
      <div className="px-6 py- mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 mb-4">
            <FaShieldAlt className="text-[#c9a050]" />
            Privacy Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a5c3a] mb-4">
            Your Privacy <span className="text-[#c9a050]">Matters</span>
          </h1>
          <div className="w-24 h-1 bg-[#c9a050] rounded-full mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Al Hafiz Online Quran Academy, we take your privacy seriously. 
            This policy explains how we collect, use, and protect your personal information.
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
          <span className="text-[#c9a050] font-semibold">Privacy Policy</span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          
          {/* Information We Collect */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaUserSecret className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">Information We Collect</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold text-[#0a5c3a]">Personal Information:</span> Name, email address, phone number, and country</li>
                <li><span className="font-semibold text-[#0a5c3a]">Learning Information:</span> Course preferences, learning progress, and test scores</li>
                <li><span className="font-semibold text-[#0a5c3a]">Payment Information:</span> Billing details (processed securely through third-party payment gateways)</li>
                <li><span className="font-semibold text-[#0a5c3a]">Technical Information:</span> IP address, browser type, and device information</li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaLock className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">How We Use Your Information</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage our Quran learning services</li>
                <li>To process your enrollment and payments</li>
                <li>To communicate with you about classes and updates</li>
                <li>To improve our teaching methods and learning materials</li>
                <li>To ensure the security and integrity of our platform</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaShieldAlt className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">Data Security</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>We take the following measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Encryption:</span> All data is transmitted using SSL/TLS encryption</li>
                <li><span className="font-semibold">Secure Storage:</span> Your data is stored on secure servers</li>
                <li><span className="font-semibold">Access Control:</span> Only authorized personnel can access your data</li>
                <li><span className="font-semibold">Regular Audits:</span> We regularly review our security practices</li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaCookie className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">Cookies</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your login sessions</li>
                <li>Personalize your learning experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our services based on user behavior</li>
              </ul>
              <p className="mt-3">You can control cookie preferences in your browser settings.</p>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaDatabase className="text-[#0a5c3a]" />
              </div>
              <h2 className="text-xl font-bold text-[#0a5c3a]">Third-Party Services</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>We may use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Payment Gateways:</span> For secure payment processing</li>
                <li><span className="font-semibold">Video Conferencing:</span> For live online classes (Zoom/Google Meet)</li>
                <li><span className="font-semibold">Analytics:</span> To understand how our services are used</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-gradient-to-r from-[#0a5c3a] to-[#0d7c5b] rounded-2xl p-8 text-white" data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaShieldAlt /> Your Rights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-[#c9a050]">Access</h4>
                <p className="text-white/80 text-sm">Request a copy of your personal data</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-[#c9a050]">Correction</h4>
                <p className="text-white/80 text-sm">Update or correct your information</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-[#c9a050]">Deletion</h4>
                <p className="text-white/80 text-sm">Request deletion of your data</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="font-semibold text-[#c9a050]">Opt-Out</h4>
                <p className="text-white/80 text-sm">Unsubscribe from communications</p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-[#c9a050]/10 text-center" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-xl font-bold text-[#0a5c3a] mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our privacy policy, please contact us:
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

export default PrivacyPolicy;