import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const SixKalmas = () => {
    const [selectedKalma, setSelectedKalma] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const kalmas = [
        {
            id: 1,
            name: "Kalma Tayyibah",
            description: "The foundation of Islamic belief declaring the oneness of Allah and acceptance of Prophet Muhammad ﷺ as His final messenger. This declaration brings spiritual purification and serves as the core identity of every Muslim.",
            image: "https://cdn.pixabay.com/photo/2024/03/08/11/26/ai-generated-8620558_1280.png"
        },
        {
            id: 2,
            name: "Kalma Shahadat",
            description: "A testimony of faith emphasizing Allah's absolute oneness without partners. It establishes the believer's commitment to Islamic principles and the prophethood of Muhammad ﷺ.",
            image: "https://img.freepik.com/premium-photo/young-asian-muslim-boy-wear-skullcap-holding-holy-book-quran_603656-7796.jpg"
        },
        {
            id: 3,
            name: "Kalma Tamjeed",
            description: "Focuses on glorifying and praising Allah's perfection and majesty. It reminds Muslims to acknowledge Allah's greatness in every aspect of their daily lives.",
            image: "https://images.pexels.com/photos/9127599/pexels-photo-9127599.jpeg"
        },
        {
            id: 4,
            name: "Kalma Tawheed",
            description: "Reinforces the concept of absolute monotheism, affirming that Allah alone deserves worship. It protects against shirk and strengthens spiritual conviction.",
            image: "https://img.freepik.com/premium-photo/student-learning-quran-online-using-laptop-while-sitting-mosque-generative-ai_437323-30027.jpg"
        },
        {
            id: 5,
            name: "Kalma Astaghfar",
            description: "Teaches humility through seeking forgiveness from Allah. It serves as a means of spiritual cleansing and returning to Allah's mercy after mistakes.",
            image: "https://areeb-academy.com/wp-content/uploads/2024/07/23.jpg"
        },
        {
            id: 6,
            name: "Kalma Radd-e-Kufr",
            description: "Protects faith by seeking refuge from disbelief and reaffirming Islamic beliefs. It strengthens the believer's commitment to Islamic principles.",
            image: "https://resala-academy.com/wp-content/uploads/2021/01/Muslim-woman-and-her-son-on-laptop.jpg"
        }
    ];

    const openModal = (kalma) => {
        setSelectedKalma(kalma);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedKalma(null);
        document.body.style.overflow = "auto";
    };

    return (
        <section className="py-16 px-6 lg:px-16 bg-[#f8f6f0]">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <span className="inline-block px-5 py-2 rounded-full bg-[#009966]/10 text-[#009966] font-semibold text-sm uppercase tracking-[3px] border border-[#009966]/20 mb-4">
                    Islamic Foundation
                </span>
                <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                    The Six Kalmas
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Foundation of Islamic Belief and Spirituality
                </p>
                <div className="w-24 h-1 bg-[#0a5c3a] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {kalmas.map((kalma, index) => (
                    <div
                        key={kalma.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        onClick={() => openModal(kalma)}
                    >
                        <div className="relative overflow-hidden h-56">
                            <img
                                alt={kalma.name}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                src={kalma.image}
                            />
                            <div className="absolute top-4 left-4 bg-[#009966]/90 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                                {kalma.id}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-emerald-800 mb-2">
                                {kalma.name}
                            </h3>
                            <p className="text-[#c9a050] text-sm leading-relaxed line-clamp-3">
                                {kalma.description}
                            </p>
                                <div className="flex flex-wrap justify-center gap-4 mt-4 ">
                                    <a href="/namaz-Journey.jpg" download className="bg-[#0a5c3a] text-white px-8 py-3 rounded-lg hover:bg-[#009966] transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold flex items-center gap-2">
                                        <FaDownload /> Download PDF
                                    </a>
                                </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default SixKalmas;