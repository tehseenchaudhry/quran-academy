import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaEnvelope,
  FaCog,
  FaUserCircle,
  FaMoneyBillWave,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaUserGraduate />, label: "Students", path: "/dashboard/students" },
    { icon: <FaChalkboardTeacher />, label: "Teachers", path: "/dashboard/teachers" },
    { icon: <FaBook />, label: "Courses", path: "/dashboard/courses" },
    { icon: <FaMoneyBillWave />, label: "Fee Management", path: "/dashboard/fee" },
    { icon: <FaEnvelope />, label: "Messages", path: "/dashboard/messages" },
    { icon: <FaChartLine />, label: "Reports", path: "/dashboard/reports" },
    { icon: <FaCog />, label: "Settings", path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div
      className={`fixed top-14 left-0 z-40 w-64 h-screen bg-[#0a5c3a] p-4 shadow-xl
      transform transition-transform duration-300 overflow-y-auto
      ${showSidebar ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
    >

      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => setShowSidebar(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-[#c9a050]/20 transition-all duration-300 group"
          >
            <span className="text-[#c9a050] group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 w-full mt-4 border-t border-[#c9a050]/20 pt-4"
        >
          <FaSignOutAlt className="text-red-400" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;