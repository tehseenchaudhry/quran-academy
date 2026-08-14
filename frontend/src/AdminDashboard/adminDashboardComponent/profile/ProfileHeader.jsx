import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaUserCircle, FaCamera } from "react-icons/fa";

const ProfileHeader = ({ profile, isEditing, setIsEditing }) => {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0a5c3a]">My Profile</h1>
          <p className="text-sm text-gray-500">Manage your profile information</p>
        </div>
        <Link to="/dashboard" className="flex items-center gap-2 text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300">
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-[#c9a050]/20 overflow-hidden max-w-3xl mx-auto">
        
        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-[#0a5c3a] to-[#0d7c5b]"></div>

        {/* Profile Info */}
        <div className="relative px-8 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 -mt-12">
            
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#f8f6f0] border-4 border-[#c9a050] flex items-center justify-center text-[#0a5c3a]">
                <FaUserCircle className="text-6xl" />
              </div>
              <button className="absolute bottom-0 right-0 bg-[#c9a050] p-2 rounded-full text-white hover:bg-[#b8942e] transition-colors duration-300">
                <FaCamera className="text-sm" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#c9a050]">{profile.name}</h2>
              <p className="text-[#c9a050]">{profile.role}</p>
              <p className="text-gray-500 text-sm">Joined: {profile.joined}</p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center font-bold gap-2 px-6 py-2 border-2 border-[#c9a050] text-[#c9a050] rounded-xl hover:bg-[#c9a050] hover:text-white transition-all duration-300"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;