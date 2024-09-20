import React, { useState } from "react";
import UserAppointmentTable from "../components/UserAppointmentTable";

function DashboardUser() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleTodayClick = () => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  };

  const handleClearFilters = () => {
    setSelectedDate("");
    setSelectedStatus("");
  };

  return (
    <div className="p-2 sm:p-4 rounded shadow w-full">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Appointment List</h2>
      <form className="flex flex-col sm:flex-row gap-2">
        <div>
          <input
            className="border rounded cursor-pointer px-4 py-2"
            type="date"
            name="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>

        <div>
          <select
            className="border rounded px-4 py-2"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="">All Statuses</option>
            <option value="Approved">Approved</option>
            <option value="Defer">Defer</option>
            <option value="Finished">Finished</option>
          </select>
        </div>

        <div>
          <button
            type="button"
            className="bg-purple-primary rounded px-4 py-2 text-white font-bold text-sm sm:text-base cursor-pointer"
            onClick={handleTodayClick}
          >
            Now
          </button>
        </div>

        {(selectedDate || selectedStatus ) && (
          <div>
            <button
              type="button"
              className="bg-red-500 rounded px-4 py-2 text-white font-bold text-sm sm:text-base cursor-pointer"
              onClick={handleClearFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </form>

      <div className="w-full overflow-x-auto mt-4">
        <UserAppointmentTable selectedDate={selectedDate} selectedStatus={selectedStatus} />
      </div>
    </div>
  );
}

export default DashboardUser;
