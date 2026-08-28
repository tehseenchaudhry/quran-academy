import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaLock } from "react-icons/fa6";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("New Password:", password);

    // Yahan baad mein backend reset-password API call lagegi
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="p-8 sm:p-12 md:p-14">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
              <FaLock className="text-2xl text-[#0a5c3a]" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">

            <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider mb-2">
              Account Recovery
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a]">
              Create New Password
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Create a strong new password for your account.
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* New Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                New Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  minLength={6}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />

              </div>

            </div>

            {/* Confirm Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  minLength={6}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />

              </div>

            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Reset Password
            </button>

          </form>

          {/* Back To Login */}
          <div className="text-center mt-7">

            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-[#0a5c3a] font-semibold hover:text-[#c9a050] transition"
            >
              <FaArrowLeft className="text-sm" />
              Back to Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ResetPassword;