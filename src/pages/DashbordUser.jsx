import React from 'react';
import UserAppointmentTable from '../components/UserAppointmentTable';

function DashboardUser() {
  return (
    <div className="p-2 sm:p-4 rounded shadow w-full">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Appointment List</h2>

      {/* Ajout de 'w-full' pour garantir que le conteneur occupe toute la largeur */}
      <div className="w-full overflow-x-auto">
        <UserAppointmentTable />
      </div>
    </div>
  );
}

export default DashboardUser;
