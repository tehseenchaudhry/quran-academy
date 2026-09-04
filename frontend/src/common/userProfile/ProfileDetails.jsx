import React from "react";
import {
    FaCamera,
    FaUser,
    FaEnvelope,
} from "react-icons/fa6";
import { useMyProfileQuery, useUpdateProfileMutation } from "../../app/api/userApi";
import { useState } from "react";
import { useEffect } from "react";

const ProfileDetails = () => {
    const { data, error, isLoading, isError, isSuccess } = useMyProfileQuery();
    const [updateProfile] = useUpdateProfileMutation();

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",

    })

    useEffect(() => {
        if (data?.user) {
            setFormdata({
                name: data.user.name || "",
                email: data.user.email || "",
            });
        }
    }, [data]);


    const handleChange = (e) => {
        const { name, value } = e.target


        setFormdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSaveChanges = async (e) => {
        e.preventDefault();

  try {
    await updateProfile(formdata).unwrap();

    alert("Profile updated successfully!");
  } catch (error) {
    console.log(error);
    alert("Profile update failed");
  }

    }

    return (
        <>
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
                                value={formdata.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/20 transition"
                            />

                        </div>

                    </div>


                    {/* Name */}
                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Name
                        </label>

                        <div className="relative">

                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a050]" />

                            <input
                                type="text"
                                name="name"
                                value={formdata?.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
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
        </>
    );
};

export default ProfileDetails;