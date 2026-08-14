import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const courses = [
  {
    name: "Quran Courses",
    path: "/courses/quran-courses",
    subCourses: [
      { name: "Noorani Qaida Course", path: "/courses/norani-qaida" },
      { name: "Madni Qaida", path: "/courses/madni-qaida" },
      { name: "Nazra Quran", path: "/courses/nazra-quran" },
      { name: "Quran Memorization", path: "/courses/quran-memorization" },
      {name: "Quran Interpretation & Translation", path: "/courses/quran-translation",},
    ],
  },
  {
    name: "Namaz – Dua – Kalma",
    path: "/courses/namaz-dua-kalma",
  },
  {
    name: "Basic Islamic Knowledge",
    path: "/courses/basic-islamic-knowledge",
  },
  {
    name: "Obligatory Science Course",
    path: "/courses/obligatory-science",
  },
];

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Fee", path: "/fee" },
  { name: "To Be Teacher", path: "/teachers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [quranOpen, setQuranOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileQuranOpen, setMobileQuranOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setCoursesOpen(false);
    setQuranOpen(false);
    setMobileOpen(false);
    setMobileCoursesOpen(false);
    setMobileQuranOpen(false);
  }, [location.pathname]);

  const isDarkPage =
    location.pathname.startsWith("/courses") ||
    ["/login", "/signup", "/forgot-password", "/fee", "/contact", "/privacy-policy", "/terms-conditions"].includes(
      location.pathname
    );

  return (
    <>
      {/*  NAVBAR  */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isDarkPage || scrolled
            ? "bg-[#0a5c3a]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Al Hafiz Online"
              className="w-11 h-11 rounded-lg object-cover"
            />

            <div>
              <h2 className="text-white font-bold text-lg">
                Al Hafiz-Online
              </h2>

              <p className="text-white/60 text-xs">
                Learn Quran Online
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-2 text-white">

            {/* HOME ABOUT SERVICES */}
            {menu.slice(0, 3).map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="px-4 py-2 rounded-lg hover:bg-[#c9a050]/30 hover:text-[#f5d48a] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* COURSES */}
            <li
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => {
                setCoursesOpen(false);
                setQuranOpen(false);
              }}
            >
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#c9a050]/30 hover:text-[#f5d48a] transition"
              >
                Courses

                <FaChevronDown
                  className={`text-xs transition ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coursesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="w-80 bg-white rounded-xl shadow-2xl p-2">

                    {courses.map((course) => (
                      <div
                        key={course.name}
                        className="relative"
                        onMouseEnter={() =>
                          course.subCourses && setQuranOpen(true)
                        }
                        onMouseLeave={() =>
                          course.subCourses && setQuranOpen(false)
                        }
                      >
                        {/* MAIN COURSE */}
                        {course.subCourses ? (
                          <div className="flex items-center justify-between px-4 py-3 rounded-lg text-[#0a5c3a] hover:bg-[#f8f3e9] hover:text-[#c9a050] cursor-pointer">
                            <span>{course.name}</span>

                            <FaChevronRight
                              className={`text-xs ${
                                quranOpen
                                  ? "text-[#c9a050]"
                                  : "text-gray-400"
                              }`}
                            />
                          </div>
                        ) : (
                          <Link
                            to={course.path}
                            className="block px-4 py-3 rounded-lg text-[#0a5c3a] hover:bg-[#f8f3e9] hover:text-[#c9a050]"
                          >
                            {course.name}
                          </Link>
                        )}

                        {/* QURAN SUB MENU */}
                        {course.subCourses && quranOpen && (
                          <div className="absolute left-full top-0 w-80 bg-white rounded-xl shadow-2xl p-2">

                            {course.subCourses.map((subCourse) => (
                              <Link
                                key={subCourse.name}
                                to={subCourse.path}
                                className="block px-4 py-3 rounded-lg text-[#0a5c3a] hover:bg-[#f8f3e9] hover:text-[#c9a050]"
                              >
                                {subCourse.name}
                              </Link>
                            ))}

                          </div>
                        )}
                      </div>
                    ))}

                  </div>
                </div>
              )}
            </li>

            {/* FEE TEACHER CONTACT */}
            {menu.slice(3).map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="px-4 py-2 rounded-lg hover:bg-[#c9a050]/30 hover:text-[#f5d48a] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* LOGIN */}
          <div className="hidden lg:flex">
            <Link to="/login">
              <button className="px-5 py-2.5 bg-[#c9a050] text-white rounded-full font-semibold hover:bg-[#b8942e] transition">
                Login
              </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/*  MOBILE MENU  */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[380px] bg-[#0a5c3a] text-white z-[60] shadow-2xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 text-2xl hover:text-[#c9a050]"
        >
          <RxCross1 />
        </button>

        {/* MOBILE LOGO */}
        <div className="p-6 border-b border-white/10">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-11 h-11 rounded-lg"
            />

            <div>
              <h2 className="font-bold text-lg">
                Al Hafiz-Online
              </h2>

              <p className="text-xs text-white/60">
                Learn Quran Online
              </p>
            </div>
          </Link>
        </div>

        {/* MOBILE LINKS */}
        <div className="p-6 overflow-y-auto h-[calc(100vh-150px)]">

          <div className="space-y-4">

            {/* HOME ABOUT SERVICES */}
            {menu.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-semibold hover:text-[#c9a050]"
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE COURSES */}
            <div>
              <button
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="w-full flex justify-between items-center text-lg font-semibold"
              >
                Courses

                <FaChevronDown
                  className={`text-sm transition ${
                    mobileCoursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCoursesOpen && (
                <div className="mt-4 ml-4 pl-4 border-l border-[#c9a050]/40 space-y-4">

                  {courses.map((course) => (
                    <div key={course.name}>

                      {course.subCourses ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileQuranOpen(!mobileQuranOpen)
                            }
                            className="w-full flex justify-between text-left text-[#f5d48a] font-semibold"
                          >
                            {course.name}

                            <FaChevronDown
                              className={`text-xs transition ${
                                mobileQuranOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {mobileQuranOpen && (
                            <div className="mt-3 ml-3 space-y-3">

                              {course.subCourses.map((subCourse) => (
                                <Link
                                  key={subCourse.name}
                                  to={subCourse.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-sm text-white/70 hover:text-[#c9a050]"
                                >
                                  {subCourse.name}
                                </Link>
                              ))}

                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={course.path}
                          onClick={() => setMobileOpen(false)}
                          className="block text-white/80 hover:text-[#c9a050]"
                        >
                          {course.name}
                        </Link>
                      )}

                    </div>
                  ))}

                </div>
              )}
            </div>

            {/* FEE TEACHER CONTACT */}
            {menu.slice(3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-semibold hover:text-[#c9a050]"
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* MOBILE LOGIN */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
            >
              <button className="w-full py-3 bg-[#c9a050] rounded-full font-semibold">
                Login
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;