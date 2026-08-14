import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaUserTie, FaEnvelope, FaPhoneAlt, FaGraduationCap, FaBookOpen, FaGlobe, FaClock, FaVideo, FaLanguage, FaFileUpload, FaUserCheck, FaArrowRight, FaShieldAlt } from "react-icons/fa";

const TeacherApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        fatherName: "",
        email: "",
        phone: "",
        qualification: "",
        specialization: "",
        country: "",
        experience: "",
        introVideo: "",
        languages: [],
        courses: [],
        gender: "",
        certificate: null,
        cnic: null,
        cv: null,
        about: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckbox = (e, field) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [field]: checked
                ? [...prev[field], value]
                : prev[field].filter((item) => item !== value),
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        toast.success("Application submitted successfully! 🎉", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
            style: {
                background: "#0a5c3a",
                color: "#fff",
                fontWeight: "600",
            },
        });

        setFormData({
            fullName: "",
            fatherName: "",
            email: "",
            phone: "",
            qualification: "",
            specialization: "",
            country: "",
            experience: "",
            introVideo: "",
            languages: [],
            courses: [],
            gender: "",
            certificate: null,
            cnic: null,
            cv: null,
            about: "",
        });
    };

    return (
        <section id="teacher-application-form" className="py-10 lg:py-16 bg-gradient-to-br from-[#f8f6f0] via-white to-[#eef7f2]">
            <div className="max-w-5xl mx-auto px-6" data-aos="fade-up" data-aos-delay="100">
                
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
                        Apply Now
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0a5c3a]">
                        Teacher <span className="text-[#c9a050]">Application</span>
                    </h2>

                    <div className="w-24 h-1 bg-[#c9a050] rounded-full mx-auto mt-4"></div>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Join our team of dedicated Quran teachers. Fill in the details below 
                        and our team will review your application.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-[#c9a050]/10">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Grid Top Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {/* Full Name */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaUser className="text-[#c9a050]" />
                                    Full Name <span className="text-[#c9a050]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Father Name */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="150">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaUserTie className="text-[#c9a050]" />
                                    Father Name <span className="text-[#c9a050]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    placeholder="Enter your father's name"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaEnvelope className="text-[#c9a050]" />
                                    Email Address <span className="text-[#c9a050]">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="250">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaPhoneAlt className="text-[#c9a050]" />
                                    Phone Number <span className="text-[#c9a050]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+92 300 1234567"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Qualification */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="300">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaGraduationCap className="text-[#c9a050]" />
                                    Qualification
                                </label>
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    placeholder="Your qualification"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            {/* Specialization */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="350">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaBookOpen className="text-[#c9a050]" />
                                    Specialization
                                </label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    placeholder="Your specialization"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            {/* Country */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="400">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaGlobe className="text-[#c9a050]" />
                                    Country
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Your country"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            {/* Experience */}
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="450">
                                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                    <FaClock className="text-[#c9a050]" />
                                    Teaching Experience
                                </label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    placeholder="Years of experience"
                                    className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Intro Video */}
                        <div className="flex flex-col" data-aos="fade-up" data-aos-delay="500">
                            <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                <FaVideo className="text-[#c9a050]" />
                                Intro Video Link (YouTube)
                            </label>
                            <input
                                type="url"
                                name="introVideo"
                                value={formData.introVideo}
                                onChange={handleChange}
                                placeholder="Paste intro video link"
                                className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                            />
                        </div>

                        {/* Languages */}
                        <div data-aos="fade-up" data-aos-delay="550">
                            <label className="font-medium text-[#0a5c3a] text-sm block mb-3 flex items-center gap-2">
                                <FaLanguage className="text-[#c9a050]" />
                                Languages You Speak
                            </label>
                            <div className="flex flex-wrap gap-4">
                                {["English", "Urdu", "Hindi", "Arabic", "Pashto"].map((lang) => (
                                    <label key={lang} className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#c9a050] transition-colors duration-300">
                                        <input
                                            type="checkbox"
                                            value={lang}
                                            checked={formData.languages.includes(lang)}
                                            onChange={(e) => handleCheckbox(e, "languages")}
                                            className="accent-[#c9a050] w-4 h-4"
                                        />
                                        {lang}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Courses */}
                        <div data-aos="fade-up" data-aos-delay="600">
                            <label className="font-medium text-[#0a5c3a] text-sm block mb-3 flex items-center gap-2">
                                <FaBookOpen className="text-[#c9a050]" />
                                Courses You Can Teach
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {[
                                    "Noorani Qaida Course",
                                    "Hadith Course",
                                    "Islamic Studies Course",
                                    "Nazra Quran Course",
                                    "Quran Reading Course",
                                    "Quran Memorization",
                                    "Arabic Language Course",
                                    "Qiraat Course",
                                    "Quran Recitation Course",
                                    "Ijazah Course",
                                    "Tajweed Course",
                                    "Tafseer Course",
                                    "Quran Translation Course",
                                ].map((course) => (
                                    <label key={course} className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer hover:text-[#c9a050] transition-colors duration-300">
                                        <input
                                            type="checkbox"
                                            value={course}
                                            checked={formData.courses.includes(course)}
                                            onChange={(e) => handleCheckbox(e, "courses")}
                                            className="accent-[#c9a050] w-4 h-4"
                                        />
                                        {course}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Gender */}
                        <div data-aos="fade-up" data-aos-delay="650">
                            <label className="font-medium text-[#0a5c3a] text-sm block mb-3 flex items-center gap-2">
                                <FaUserCheck className="text-[#c9a050]" />
                                Gender
                            </label>
                            <div className="flex gap-6">
                                {["Male", "Female"].map((g) => (
                                    <label key={g} className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#c9a050] transition-colors duration-300">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={g}
                                            checked={formData.gender === g}
                                            onChange={handleChange}
                                            className="accent-[#c9a050] w-4 h-4"
                                        />
                                        {g}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* File Uploads */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" data-aos="fade-up" data-aos-delay="700">
                            {["certificate", "cnic", "cv"].map((fileField, idx) => (
                                <div className="flex flex-col" key={fileField}>
                                    <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                                        <FaFileUpload className="text-[#c9a050]" />
                                        {fileField === "cv" ? "Upload CV" :
                                         fileField === "cnic" ? "Upload CNIC" :
                                         "Upload Certificate"}
                                    </label>
                                    <input
                                        type="file"
                                        name={fileField}
                                        onChange={handleFileChange}
                                        accept=".png,.jpg,.jpeg,.pdf"
                                        className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#c9a050] file:text-white hover:file:bg-[#b8942e]"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* About */}
                        <div data-aos="fade-up" data-aos-delay="750">
                            <label className="block mb-2 text-[#0a5c3a] font-medium text-sm">
                                Write About Yourself (100+ words)
                            </label>
                            <textarea
                                rows="5"
                                name="about"
                                value={formData.about}
                                onChange={handleChange}
                                placeholder="Describe your experience, goals, and personality..."
                                className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="800">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-3 bg-[#0a5c3a] hover:bg-[#c9a050] text-white px-10 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                            >
                                Submit Application
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Security Note */}
                        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
                            <FaShieldAlt className="text-[#c9a050]" />
                            <span>Your information is 100% secure and confidential</span>
                        </div>

                    </form>
                </div>
            </div>

            <ToastContainer />
        </section>
    );
};

export default TeacherApplicationForm;