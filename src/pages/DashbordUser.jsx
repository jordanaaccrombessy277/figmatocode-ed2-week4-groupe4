import React from 'react';
import UserAppointmentTable from '../components/UserAppointmentTable';

function DashboardUser() {
  return (
    <div className="p-4 rounded shadow">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Appointment List</h2>

      <UserAppointmentTable />
    </div>
  );
}

export default DashboardUser;
