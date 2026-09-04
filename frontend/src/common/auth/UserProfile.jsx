import React, { useState } from "react";
import {
  FaCamera,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaRightFromBracket,
  FaUser,
  FaEnvelope,
} from "react-icons/fa6";
import { useMyProfileQuery } from "../../app/api/userApi";

const UserProfile = () => {

   const { data, error, isLoading, isError, isSuccess } = useMyProfileQuery();
  const [ showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    username: "",
    email: "",
    fullName: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    console.log("Profile:", profile);

    // Baad mein backend API yahan connect hogi
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    console.log("Password update:", passwords);

    // Baad mein backend API yahan connect hogi
  };

  const handleLogout = () => {
    console.log("Logout");

    // Baad mein /logout API connect hogi
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] px-4 sm:px-6 py-8 sm:py-12">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider">
            Account Settings
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a] mt-1">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your profile information and account security.
          </p>

        </div>

        <div className="space-y-6">

          {/* Personalization */}
          <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">

            <div className="flex items-center gap-3 mb-7">

              <div className="w-11 h-11 rounded-xl bg-[#0a5c3a]/10 flex items-center justify-center">
                <FaUser className="text-[#0a5c3a]" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0a5c3a]">
                  Personalization
                </h2>

                <p className="text-sm text-gray-500">
                  Customize your profile
                </p>
              </div>

            </div>

            {/* Profile Picture */}
            <div className="flex flex-col sm:flex-row items-center gap-6">

              <div className="relative">

                <div className="w-28 h-28 rounded-full bg-[#f8f6ef] border-2 border-[#c9a050] flex items-center justify-center overflow-hidden">

                  <FaUser className="text-5xl text-[#0a5c3a]" />

                </div>

                <button
                  type="button"
                  className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-[#0a5c3a] text-white flex items-center justify-center shadow-md hover:bg-[#c9a050] transition"
                >
                  <FaCamera className="text-sm" />
                </button>

              </div>

              <div className="text-center sm:text-left">

                <h3 className="font-bold text-gray-800">
                  Profile Picture
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Max 5 MB
                </p>

                <p className="text-sm text-gray-500">
                  Only JPEG, JPG, PNG
                </p>

                <button
                  type="button"
                  className="mt-3 px-5 py-2.5 rounded-xl bg-[#0a5c3a] text-white text-sm font-semibold hover:bg-[#c9a050] transition"
                >
                  Upload Picture
                </button>

              </div>

            </div>

          </section>

          {/* Edit Details */}
          <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">

            <div className="mb-7">

              <h2 className="text-xl font-bold text-[#0a5c3a]">
                Edit Details
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Update your personal information.
              </p>

            </div>

            <form onSubmit={handleSaveChanges} className="space-y-5">

              {/* Email */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                  <input
                    type="email"
                    name="email"
                    value={data?.profile?.email}
                    onChange={handleProfileChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                  />

                </div>

              </div>

              {/* Username */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>

                <div className="relative">

                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                  <input
                    type="text"
                    name="username"
                    value={profile.username}
                    onChange={handleProfileChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                  />

                </div>

              </div>

              {/* Full Name */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="relative">

                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                  <input
                    type="text"
                    name="name"
                    value={data?.profile?.name}
                    onChange={handleProfileChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                  />

                </div>

              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition shadow-md"
              >
                Save Changes
              </button>

            </form>

          </section>

          {/* Change Password */}
          <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">

            <div className="mb-7">

              <h2 className="text-xl font-bold text-[#0a5c3a]">
                Change Password
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Keep your account secure with a strong password.
              </p>

            </div>

            <form onSubmit={handleUpdatePassword} className="space-y-5">

              {/* Current Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>

                <div className="relative">

                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                  <input
                    type={ showPassword ? "text" : "password"}
                    name="currentPassword"
                    value={passwords. showPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter current password"
                    required
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(! showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a5c3a]"
                  >
                    { showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>

                </div>

              </div>

              {/* New Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>

                <div className="relative">

                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                  <input
                    type={ showPassword ? "text" : "password"}
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter new password"
                    required
                    minLength={6}
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                  />

                  {/* <button
                    type="button"
                    onClick={() => setShowPassword(! showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a5c3a]"
                  >
                    { showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button> */}

                </div>

              </div>

              {/* Confirm Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>

                <div className="relative">

                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                  <input
                    type={ showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                    required
                    minLength={6}
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                  />

                  {/* <button
                    type="button"
                    onClick={() =>
                      showPassword(!  showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a5c3a]"
                  >
                    {  showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button> */}

                </div>

              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition shadow-md"
              >
                Update Password
              </button>

            </form>

          </section>

          {/* Logout */}
          <section className="bg-white rounded-3xl shadow-lg border border-red-100 p-6 sm:p-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div>

                <h2 className="text-xl font-bold text-gray-800">
                  Logout
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Sign out from your account on this device.
                </p>

              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-red-200 text-red-600 font-semibold hover:bg-red-50 transition"
              >
                <FaRightFromBracket />
                Logout
              </button>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
};

export default UserProfile;