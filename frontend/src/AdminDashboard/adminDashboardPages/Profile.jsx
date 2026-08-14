import React, { useState } from "react";
import ProfileHeader from "../adminDashboardComponent/profile/ProfileHeader";
import ProfileInfo from "../adminDashboardComponent/profile/ProfileInfo";
import ChangePassword from "../adminDashboardComponent/profile/ChangePassword";
import AccountSettings from "../adminDashboardComponent/profile/AccountSettings";


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@alhafiz.com",
    phone: "+92 300 1234567",
    role: "Super Admin",
    joined: "January 2025",
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0] p-6">
      <ProfileHeader 
        profile={profile} 
        isEditing={isEditing} 
        setIsEditing={setIsEditing} 
      />
      
      <ProfileInfo 
        profile={profile} 
        setProfile={setProfile} 
        isEditing={isEditing} 
        onSave={handleSaveProfile} 
      />
      
      <ChangePassword />
      
      <AccountSettings />
    </div>
  );
};

export default Profile;