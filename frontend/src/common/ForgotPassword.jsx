import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa6";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reset password for:", email);
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* FORM SIDE */}
        <div className="p-8 sm:p-12 md:p-14 flex flex-col justify-center">

          {/* Heading */}
          <div className="mb-8">

            <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider mb-2">
              Account Recovery
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a]">
              Forgot Password?
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Enter your email address and we'll send you a link to
              reset your password.
            </p>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">

                <FaEnvelope
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />

              </div>

            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Send OTP
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

export default ForgotPassword;