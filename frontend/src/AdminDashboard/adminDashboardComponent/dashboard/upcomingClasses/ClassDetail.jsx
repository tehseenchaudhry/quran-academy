import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaVideo, FaClock, FaUsers, FaChalkboardTeacher, FaCalendarAlt, FaArrowLeft, FaPlay, FaDownload, FaComments } from "react-icons/fa";

const ClassDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample class data (normally API se aayega)
  const classData = {
    id: parseInt(id),
    subject: "Quran with Tajweed",
    teacher: "Ustadh Ahmed",
    time: "10:00 AM",
    date: "Today",
    duration: "45 min",
    students: 8,
    description: "Learn Quran recitation with proper Tajweed rules and pronunciation. This class focuses on practical application of Tajweed rules in daily recitation.",
    zoomLink: "https://zoom.us/j/123456789",
    materials: [
      "Tajweed Rules PDF",
      "Surah Al-Fatihah Practice",
      "Lesson Notes"
    ]
  };

  // Agar class nahi milti to redirect
  if (!classData || classData.id !== parseInt(id)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f0]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0a5c3a]">Class Not Found</h2>
          <Link to="/dashboard" className="text-[#c9a050] mt-4 inline-block">Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0] p-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#0a5c3a] hover:text-[#c9a050] transition-colors duration-300 mb-4"
      >
        <FaArrowLeft /> Back to Dashboard
      </button>

      {/* Class Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-[#c9a050]/20 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a5c3a] to-[#0d7c5b] p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <FaVideo className="text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{classData.subject}</h1>
              <p className="text-white/70">{classData.teacher}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#f8f6f0] rounded-xl p-4 text-center">
              <FaClock className="text-[#c9a050] mx-auto text-xl mb-2" />
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-semibold text-[#0a5c3a]">{classData.time}</p>
            </div>
            <div className="bg-[#f8f6f0] rounded-xl p-4 text-center">
              <FaCalendarAlt className="text-[#c9a050] mx-auto text-xl mb-2" />
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-semibold text-[#0a5c3a]">{classData.date}</p>
            </div>
            <div className="bg-[#f8f6f0] rounded-xl p-4 text-center">
              <FaClock className="text-[#c9a050] mx-auto text-xl mb-2" />
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-semibold text-[#0a5c3a]">{classData.duration}</p>
            </div>
            <div className="bg-[#f8f6f0] rounded-xl p-4 text-center">
              <FaUsers className="text-[#c9a050] mx-auto text-xl mb-2" />
              <p className="text-sm text-gray-500">Students</p>
              <p className="font-semibold text-[#0a5c3a]">{classData.students}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-bold text-[#0a5c3a] text-lg mb-2">About This Class</h3>
            <p className="text-gray-600 leading-relaxed">{classData.description}</p>
          </div>

          {/* Materials */}
          <div className="mb-6">
            <h3 className="font-bold text-[#0a5c3a] text-lg mb-3 flex items-center gap-2">
              <FaDownload className="text-[#c9a050]" /> Materials
            </h3>
            <div className="flex flex-wrap gap-2">
              {classData.materials.map((item, index) => (
                <span key={index} className="px-4 py-2 bg-[#f8f6f0] rounded-lg text-sm text-gray-600 border border-[#c9a050]/20">
                  📄 {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={classData.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0a5c3a] text-white rounded-xl font-semibold hover:bg-[#c9a050] transition-all duration-300"
            >
              <FaPlay /> Join Class Now
            </a>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0a5c3a] text-[#0a5c3a] rounded-xl font-semibold hover:bg-[#0a5c3a] hover:text-white transition-all duration-300">
              <FaComments /> Ask Question
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ClassDetail;