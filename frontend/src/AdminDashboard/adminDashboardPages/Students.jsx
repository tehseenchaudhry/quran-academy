import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import StudentStats from "../adminDashboardComponent/students/StudentStats";
import StudentSearch from "../adminDashboardComponent/students/StudentSearch";
import StudentsTable from "../adminDashboardComponent/students/StudentsTable";
import AddStudentModal from "../adminDashboardComponent/students/AddStudentModal";
import EditStudentModal from "../adminDashboardComponent/students/EditStudentModal";

// Components Import


const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Muhammad Ali", email: "muhammad@example.com", course: "Quran with Tajweed", status: "Active", enrolled: "Jan 2025", progress: 85 },
    { id: 2, name: "Ayesha Khan", email: "ayesha@example.com", course: "Noorani Qaida", status: "Active", enrolled: "Feb 2025", progress: 72 },
    { id: 3, name: "Omar Farooq", email: "omar@example.com", course: "Nazra Quran", status: "Active", enrolled: "Mar 2025", progress: 64 },
    { id: 4, name: "Fatima Zahra", email: "fatima@example.com", course: "Islamic Studies", status: "Active", enrolled: "Jan 2025", progress: 91 },
    { id: 5, name: "Abdullah Ahmed", email: "abdullah@example.com", course: "Quran Memorization", status: "Pending", enrolled: "Apr 2025", progress: 48 },
  ]);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", course: "", status: "Active" });

  // Filter students
  const filteredStudents = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || s.status === filterStatus;
    return matchSearch && matchStatus;
  });

  // Add student
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.email || !newStudent.course) return;
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    setStudents([...students, { id: newId, ...newStudent, enrolled: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), progress: 0 }]);
    setNewStudent({ name: "", email: "", course: "", status: "Active" });
    setIsAddModalOpen(false);
  };

  // Edit student
  const handleEditStudent = (e, editData) => {
    e.preventDefault();
    setStudents(students.map((s) => 
      s.id === selectedStudent.id ? { ...s, ...editData } : s
    ));
    setIsEditModalOpen(false);
    setSelectedStudent(null);
  };

  // Delete student
  const handleDeleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  // Stats
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === "Active").length;
  const pendingStudents = students.filter(s => s.status === "Pending").length;

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0] p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0a5c3a]">Students Management</h1>
          <p className="text-sm text-gray-500">Manage all students enrolled in your academy</p>
        </div>
        <Link to="/dashboard" className="flex items-center gap-2 text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300">
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      {/* Stats */}
      <StudentStats total={totalStudents} active={activeStudents} pending={pendingStudents} />

      {/* Search */}
      <StudentSearch 
        search={search}
        setSearch={setSearch}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onAddClick={() => setIsAddModalOpen(true)}
      />

      {/* Table */}
      <StudentsTable 
        students={filteredStudents}
        onEdit={(student) => {
          setSelectedStudent(student);
          setIsEditModalOpen(true);
        }}
        onDelete={handleDeleteStudent}
      />

      {/* Add Modal */}
      <AddStudentModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddStudent}
        newStudent={newStudent}
        setNewStudent={setNewStudent}
      />

      {/* Edit Modal */}
      <EditStudentModal 
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedStudent(null);
        }}
        onSubmit={handleEditStudent}
        student={selectedStudent}
      />

    </div>
  );
};

export default Students;