import React, { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";

const UserProfilePassword = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">

      <div className="mb-7">

        <h2 className="text-xl font-bold text-[#0a5c3a]">
          Change Password
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Keep your account secure with a strong password.
        </p>

      </div>


      <form className="space-y-5">

        {/* Current Password */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Current Password
          </label>

          <div className="relative">

            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

            <input
              type={showPassword ? "text" : "password"}
              name="currentPassword"
              placeholder="Enter current password"
              required
              className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a5c3a]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
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
              type={showPassword ? "text" : "password"}
              name="newPassword"
              placeholder="Enter new password"
              required
              minLength={6}
              className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
            />

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
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm new password"
              required
              minLength={6}
              className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
            />

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
  );
};

export default UserProfilePassword;