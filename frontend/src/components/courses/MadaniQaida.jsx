import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaGlobe, FaDesktop, FaArrowRight } from "react-icons/fa";

const MadaniQaida = () => {
    return (
        <section className="min-h-screen py-24 px-6 lg:px-16 font-serif bg-[#f8f6f0]">

            {/*  HEADING  */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#c9a050] mb-10 tracking-wide" data-aos="fade-down">
                Learn <span className="text-[#0a5c3a]">Madani Qaida</span>
            </h1>

            <p className="max-w-4xl mx-auto text-center text-lg md:text-xl text-gray-700 leading-relaxed mb-16" data-aos="fade-up">
                The <strong className="text-[#c9a050]">Madani Qaida</strong> is your first step toward mastering the sacred art of Quranic recitation.
                With expert guidance, you'll learn Tajweed, correct pronunciation, and the spiritual essence of each verse —
                creating a deep connection with the Divine words.
            </p>

            {/*  MAIN CONTENT  */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative" data-aos="fade-up">

                {/*  LEFT CARDS  */}
                <div className="md:w-1/2 space-y-8 bg-[#0a5c3a] text-white p-10 rounded-3xl shadow-xl relative" data-aos="fade-right">

                    <div className="bg-white/10 hover:bg-white/20 transition-all duration-500 p-5 rounded-2xl cursor-pointer border-l-4 border-[#c9a050]">
                        <h2 className="text-2xl font-semibold mb-2 text-[#c9a050]">Personalized Learning Path</h2>
                        <p className="text-lg leading-relaxed text-emerald-50">
                            Our teachers customize your lessons according to your pace and level, ensuring that every concept is understood with clarity and confidence.
                        </p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all duration-500 p-5 rounded-2xl cursor-pointer border-l-4 border-[#c9a050]">
                        <h2 className="text-2xl font-semibold mb-2 text-[#c9a050]">Learn with Ease and Comfort</h2>
                        <p className="text-lg leading-relaxed text-emerald-50">
                            Enjoy structured online classes that fit your daily routine. Learn peacefully from your home while staying spiritually connected.
                        </p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all duration-500 p-5 rounded-2xl cursor-pointer border-l-4 border-[#c9a050]">
                        <h2 className="text-2xl font-semibold mb-2 text-[#c9a050]">Build a Strong Quranic Foundation</h2>
                        <p className="text-lg leading-relaxed text-emerald-50">
                            Master the basics of Tajweed and gain fluency in recitation, preparing you for lifelong spiritual excellence and Quranic proficiency.
                        </p>
                    </div>

                </div>

                {/*  DIVIDER  */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[3px] h-[90%] bg-[#c9a050] rounded-full"></div>

                {/*  RIGHT CONTENT  */}
                <div className="relative w-full md:w-1/2 flex flex-col items-center" data-aos="zoom-in">

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8" data-aos="fade-up">
                        <Link to="/contact">
                            <button className="bg-[#c9a050] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#b8942e] hover:scale-105 transition-all duration-300 cursor-pointer">
                                Start Learning Now
                            </button>
                        </Link>
                        <a href="/assets/madani-qaida.pdf" download className="bg-[#0a5c3a] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#c9a050] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2">
                            Download Qaida
                        </a>
                    </div>

                    {/* Image */}
                    <div className="relative w-full overflow-hidden rounded-3xl shadow-lg group">
                        <img
                            alt="Madani Qaida Learning"
                            className="w-full h-[550px] object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-110"
                            src="https://images.pexels.com/videos/9116996/pexels-photo-9116996.jpeg?cs=tinysrgb&dpr=1&w=500"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-40 transition-all duration-700 rounded-3xl"></div>
                    </div>

                </div>
            </div>

            {/*  BOTTOM CARDS  */}
            <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto" data-aos="fade-up">

                {/* Card 1 */}
                <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:shadow-2xl group hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#c9a050]">
                    <div className="flex justify-center mb-4 transition-transform duration-700 group-hover:scale-110">
                        <FaBookOpen className="w-12 h-12 text-[#0a5c3a]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#c9a050] mb-3">Who Will Teach Me?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Our certified Quran tutors are professionals in Tajweed and Arabic phonetics, offering one-on-one mentorship with care and dedication.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:shadow-2xl group hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#c9a050]">
                    <div className="flex justify-center mb-4 transition-transform duration-700 group-hover:scale-110">
                        <FaGlobe className="w-12 h-12 text-[#0a5c3a]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#c9a050] mb-3">Multilingual Teachers</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                        You can learn in English, Urdu, or Arabic — we ensure everyone across the world can access authentic Quranic learning easily.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:shadow-2xl group hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#c9a050]">
                    <div className="flex justify-center mb-4 transition-transform duration-700 group-hover:scale-110">
                        <FaDesktop className="w-12 h-12 text-[#0a5c3a]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#c9a050] mb-3">How Do Online Classes Work?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Classes are conducted live via Zoom or Google Meet with screen sharing, recitation practice, and real-time corrections by teachers.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default MadaniQaida;