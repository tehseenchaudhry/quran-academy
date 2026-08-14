import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import TeacherStats from "../adminDashboardComponent/teachers/TeacherStats";
import TeacherSearch from "../adminDashboardComponent/teachers/TeacherSearch";
import TeachersTable from "../adminDashboardComponent/teachers/TeachersTable";
import AddTeacherModal from "../adminDashboardComponent/teachers/AddTeacherModal";
import EditTeacherModal from "../adminDashboardComponent/teachers/EditTeacherModal";

// Components Import

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Ustadh Ahmed", email: "ahmed@example.com", subject: "Tajweed", status: "Active", students: 12 },
    { id: 2, name: "Ustadha Fatima", email: "fatima@example.com", subject: "Noorani Qaida", status: "Active", students: 8 },
    { id: 3, name: "Ustadh Muhammad", email: "muhammad@example.com", subject: "Islamic Studies", status: "Active", students: 15 },
    { id: 4, name: "Ustadha Ayesha", email: "ayesha@example.com", subject: "Nazra Quran", status: "Pending", students: 6 },
    { id: 5, name: "Ustadh Ibrahim", email: "ibrahim@example.com", subject: "Quran Memorization", status: "Active", students: 10 },
  ]);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [newTeacher, setNewTeacher] = useState({ name: "", email: "", subject: "", status: "Active" });

  // Filter teachers
  const filteredTeachers = teachers.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || t.status === filterStatus;
    return matchSearch && matchStatus;
  });

  // Add teacher
  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (!newTeacher.name || !newTeacher.email || !newTeacher.subject) return;
    const newId = teachers.length ? teachers[teachers.length - 1].id + 1 : 1;
    setTeachers([...teachers, { id: newId, ...newTeacher, students: 0 }]);
    setNewTeacher({ name: "", email: "", subject: "", status: "Active" });
    setIsAddModalOpen(false);
  };

  // Edit teacher
  const handleEditTeacher = (e, editData) => {
    e.preventDefault();
    setTeachers(teachers.map((t) => 
      t.id === selectedTeacher.id ? { ...t, ...editData } : t
    ));
    setIsEditModalOpen(false);
    setSelectedTeacher(null);
  };

  // Delete teacher
  const handleDeleteTeacher = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers(teachers.filter((t) => t.id !== id));
    }
  };

  // Stats
  const totalTeachers = teachers.length;
  const activeTeachers = teachers.filter(t => t.status === "Active").length;
  const pendingTeachers = teachers.filter(t => t.status === "Pending").length;

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0] p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0a5c3a]">Teachers Management</h1>
          <p className="text-sm text-gray-500">Manage all teachers in your academy</p>
        </div>
        <Link to="/dashboard" className="flex items-center gap-2 text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300">
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      {/* Stats */}
      <TeacherStats total={totalTeachers} active={activeTeachers} pending={pendingTeachers} />

      {/* Search */}
      <TeacherSearch 
        search={search}
        setSearch={setSearch}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onAddClick={() => setIsAddModalOpen(true)}
      />

      {/* Table */}
      <TeachersTable 
        teachers={filteredTeachers}
        onEdit={(teacher) => {
          setSelectedTeacher(teacher);
          setIsEditModalOpen(true);
        }}
        onDelete={handleDeleteTeacher}
      />

      {/* Add Modal */}
      <AddTeacherModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddTeacher}
        newTeacher={newTeacher}
        setNewTeacher={setNewTeacher}
      />

      {/* Edit Modal */}
      <EditTeacherModal 
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedTeacher(null);
        }}
        onSubmit={handleEditTeacher}
        teacher={selectedTeacher}
      />

    </div>
  );
};

export default Teachers;