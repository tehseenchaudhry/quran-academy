import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaShieldHalved } from "react-icons/fa6";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(60);

  const inputRefs = useRef([]);

  // Countdown
  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const otpCode = otp.join("");

    console.log("OTP:", otpCode);
  };

  const handleResend = () => {
    if (seconds > 0) return;

    console.log("Resend verification email");

    // Yahan baad mein backend API call add karenge

    setSeconds(60);
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="p-8 sm:p-12 md:p-14">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#0a5c3a]/10 flex items-center justify-center">
              <FaShieldHalved className="text-2xl text-[#0a5c3a]" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">

            <p className="text-[#c9a050] font-semibold text-sm uppercase tracking-wider mb-2">
              Verification
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a5c3a]">
              Verify OTP
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Enter the 6-digit OTP sent to your email address.
            </p>

          </div>

          {/* OTP Form */}
          <form onSubmit={handleSubmit}>

            <div className="flex justify-center gap-2 sm:gap-3 mb-7">

              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(e.target.value, index)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  className="w-11 h-12 sm:w-14 sm:h-14 text-center text-xl font-bold text-[#0a5c3a] border border-gray-200 rounded-xl bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                />
              ))}

            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0a5c3a] text-white font-semibold hover:bg-[#c9a050] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Verify OTP
            </button>

          </form>

          {/* Resend Verification Email */}
          <div className="text-center mt-6">

            <p className="text-gray-500 text-sm">
              Didn't receive the verification email?
            </p>

            <button
              type="button"
              onClick={handleResend}
              disabled={seconds > 0}
              className={`mt-2 font-semibold transition ${
                seconds > 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#0a5c3a] hover:text-[#c9a050]"
              }`}
            >
              Resend Verification Email
            </button>

            {/* Countdown */}
            {seconds > 0 && (
              <p className="text-sm text-gray-400 mt-2">
                Resend available in {seconds} seconds
              </p>
            )}

          </div>

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

export default VerifyOtp;