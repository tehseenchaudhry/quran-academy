import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CourseStats from "../adminDashboardComponent/dashboardCourses/CourseStats";
import CourseSearch from "../adminDashboardComponent/dashboardCourses/CourseSearch";
import CoursesTable from "../adminDashboardComponent/dashboardCourses/CoursesTable";
import AddCourseModal from "../adminDashboardComponent/dashboardCourses/AddCourseModal";
import EditCourseModal from "../adminDashboardComponent/dashboardCourses/EditCourseModal";

// Components Import


const DashboardCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "Norani Qaida", category: "Foundation", level: "Beginner", duration: "3 Months", status: "Active", students: 45 },
    { id: 2, title: "Tajweed Course", category: "Recitation", level: "Intermediate", duration: "6 Months", status: "Active", students: 32 },
    { id: 3, title: "Hifz Program", category: "Memorization", level: "Advanced", duration: "Flexible", status: "Active", students: 18 },
    { id: 4, title: "Quran Translation", category: "Understanding", level: "Intermediate", duration: "4 Months", status: "Inactive", students: 25 },
    { id: 5, title: "Islamic Studies", category: "Islamic Knowledge", level: "Beginner", duration: "3 Months", status: "Active", students: 38 },
    { id: 6, title: "Quran Tafseer", category: "Understanding", level: "Advanced", duration: "6 Months", status: "Active", students: 12 },
  ]);

  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({ title: "", category: "", duration: "", level: "Beginner", status: "Active" });

  // Filter courses
  const filteredCourses = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    const matchLevel = filterLevel === "All" || c.level === filterLevel;
    return matchSearch && matchLevel;
  });

  // Add course
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse.title || !newCourse.category || !newCourse.duration) return;
    const newId = courses.length ? courses[courses.length - 1].id + 1 : 1;
    setCourses([...courses, { id: newId, ...newCourse, students: 0 }]);
    setNewCourse({ title: "", category: "", duration: "", level: "Beginner", status: "Active" });
    setIsAddModalOpen(false);
  };

  // Edit course
  const handleEditCourse = (e, editData) => {
    e.preventDefault();
    setCourses(courses.map((c) => 
      c.id === selectedCourse.id ? { ...c, ...editData } : c
    ));
    setIsEditModalOpen(false);
    setSelectedCourse(null);
  };

  // Delete course
  const handleDeleteCourse = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  // Stats
  const totalCourses = courses.length;
  const activeCourses = courses.filter(c => c.status === "Active").length;
  const categories = [...new Set(courses.map(c => c.category))].length;

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0] p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0a5c3a]">Courses Management</h1>
          <p className="text-sm text-gray-500">Manage all courses in your academy</p>
        </div>
        <Link to="/dashboard" className="flex items-center gap-2 text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300">
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      {/* Stats */}
      <CourseStats total={totalCourses} active={activeCourses} categories={categories} />

      {/* Search */}
      <CourseSearch 
        search={search}
        setSearch={setSearch}
        filterLevel={filterLevel}
        setFilterLevel={setFilterLevel}
        onAddClick={() => setIsAddModalOpen(true)}
      />

      {/* Table */}
      <CoursesTable 
        courses={filteredCourses}
        onEdit={(course) => {
          setSelectedCourse(course);
          setIsEditModalOpen(true);
        }}
        onDelete={handleDeleteCourse}
      />

      {/* Add Modal */}
      <AddCourseModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddCourse}
        newCourse={newCourse}
        setNewCourse={setNewCourse}
      />

      {/* Edit Modal */}
      <EditCourseModal 
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCourse(null);
        }}
        onSubmit={handleEditCourse}
        course={selectedCourse}
      />

    </div>
  );
};

export default DashboardCourses;