import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AppointmentList from '../components/AppointmentList';

function DashboardAdmin() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleTodayFilter = () => {
    setDateFilter(new Date().toISOString().split('T')[0]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen container mx-auto">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-grow overflow-hidden">
        <Header onSearch={handleSearch} toggleSidebar={toggleSidebar} />
        <main className="flex-grow p-6 flex flex-col overflow-hidden">
          <div className="mb-4 flex flex-wrap items-center">
            <input
              type="date"
              onChange={handleDateFilter}
              value={dateFilter}
              className="mr-2 mb-2 p-2 border rounded"
            />
            <select
              onChange={handleStatusFilter}
              className="mr-2 mb-2 p-2 border rounded"
            >
              <option value="">Tous les statuts</option>
              <option value="Confirmed">Confirmé</option>
              <option value="Pending">En attente</option>
              <option value="Cancelled">Annulé</option>
            </select>
            <button 
              onClick={handleTodayFilter}
              className="mr-2 mb-2 bg-purple-primary text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
            >
              Today
            </button>
          </div>
          <div className="flex-grow overflow-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-x-auto border-b border-gray-200 sm:rounded-lg">
                <AppointmentList
                  onPatientClick={handlePatientClick}
                  dateFilter={dateFilter}
                  statusFilter={statusFilter}
                  searchTerm={searchTerm}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedPatient.patient}</h2>
            <p><span className="font-bold">Date :</span> {selectedPatient.date}</p>
            <p><span className="font-bold">Contact :</span> {selectedPatient.contact}</p>
            <p><span className="font-bold">Statut :</span> {selectedPatient.status}</p>
            <p><span className="font-bold">Âge :</span> {selectedPatient.age}</p>
            <p><span className="font-bold">Genre :</span> {selectedPatient.gender}</p>
            <p><span className="font-bold">Raison de la visite :</span> {selectedPatient.reason}</p>
            <p><span className="font-bold">Antécédents médicaux :</span> {selectedPatient.medicalHistory}</p>
            <p><span className="font-bold">Dernière visite :</span> {selectedPatient.lastVisite}</p>
            <button
              onClick={() => setSelectedPatient(null)}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardAdmin;