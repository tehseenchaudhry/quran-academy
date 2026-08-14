import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import FeeStats from "../adminDashboardComponent/feeManagement/FeeStats";
import FeeSearch from "../adminDashboardComponent/feeManagement/FeeSearch";
import FeeTable from "../adminDashboardComponent/feeManagement/FeeTable";
import AddFeeModal from "../adminDashboardComponent/feeManagement/AddFeeModal";
import EditFeeModal from "../adminDashboardComponent/feeManagement/EditFeeModal";

const FeeManagement = () => {
  const [fees, setFees] = useState([
    { id: 1, student: "Muhammad Ali", course: "Tajweed", amount: 50, dueDate: "2025-01-15", status: "Paid" },
    { id: 2, student: "Ayesha Khan", course: "Noorani Qaida", amount: 30, dueDate: "2025-01-20", status: "Pending" },
    { id: 3, student: "Omar Farooq", course: "Nazra Quran", amount: 40, dueDate: "2025-01-10", status: "Overdue" },
    { id: 4, student: "Fatima Zahra", course: "Islamic Studies", amount: 35, dueDate: "2025-01-25", status: "Paid" },
    { id: 5, student: "Abdullah Ahmed", course: "Quran Memorization", amount: 60, dueDate: "2025-01-05", status: "Overdue" },
    { id: 6, student: "Hassan Raza", course: "Tajweed Advanced", amount: 55, dueDate: "2025-02-01", status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);
  const [newFee, setNewFee] = useState({ student: "", course: "", amount: "", dueDate: "", status: "Pending" });

  const filteredFees = fees.filter((f) => {
    const matchSearch = f.student.toLowerCase().includes(search.toLowerCase()) ||
      f.course.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || f.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleAddFee = (e) => {
    e.preventDefault();
    if (!newFee.student || !newFee.course || !newFee.amount || !newFee.dueDate) return;
    const newId = fees.length ? fees[fees.length - 1].id + 1 : 1;
    setFees([...fees, { id: newId, ...newFee }]);
    setNewFee({ student: "", course: "", amount: "", dueDate: "", status: "Pending" });
    setIsAddModalOpen(false);
  };

  const handleEditFee = (e, editData) => {
    e.preventDefault();
    setFees(fees.map((f) => 
      f.id === selectedFee.id ? { ...f, ...editData } : f
    ));
    setIsEditModalOpen(false);
    setSelectedFee(null);
  };

  const handleDeleteFee = (id) => {
    if (window.confirm("Are you sure you want to delete this fee record?")) {
      setFees(fees.filter((f) => f.id !== id));
    }
  };

  const handleViewFee = (fee) => {
    alert(`Student: ${fee.student}\nCourse: ${fee.course}\nAmount: $${fee.amount}\nDue Date: ${fee.dueDate}\nStatus: ${fee.status}`);
  };

  const totalRevenue = fees.reduce((sum, f) => sum + Number(f.amount), 0);
  const paid = fees.filter(f => f.status === "Paid").reduce((sum, f) => sum + Number(f.amount), 0);
  const pending = fees.filter(f => f.status === "Pending").reduce((sum, f) => sum + Number(f.amount), 0);
  const overdue = fees.filter(f => f.status === "Overdue").reduce((sum, f) => sum + Number(f.amount), 0);

  return (
    <div className="min-h-screen lg:ms-64 mt-14 bg-[#f8f6f0] p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0a5c3a]">Fee Management</h1>
          <p className="text-sm text-gray-500">Manage all fee records</p>
        </div>
        <Link to="/dashboard" className="flex items-center gap-2 text-[#c9a050] hover:text-[#b8942e] transition-colors duration-300">
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      {/* Stats */}
      <FeeStats 
        totalRevenue={totalRevenue} 
        paid={paid} 
        pending={pending} 
        overdue={overdue} 
      />

      {/* Search */}
      <FeeSearch 
        search={search}
        setSearch={setSearch}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onAddClick={() => setIsAddModalOpen(true)}
      />

      {/* Table */}
      <FeeTable 
        fees={filteredFees}
        onEdit={(fee) => {
          setSelectedFee(fee);
          setIsEditModalOpen(true);
        }}
        onDelete={handleDeleteFee}
        onView={handleViewFee}
      />

      {/* Add Modal */}
      <AddFeeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddFee}
        newFee={newFee}
        setNewFee={setNewFee}
      />

      {/* Edit Modal */}
      <EditFeeModal 
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedFee(null);
        }}
        onSubmit={handleEditFee}
        fee={selectedFee}
      />

    </div>
  );
};

export default FeeManagement;