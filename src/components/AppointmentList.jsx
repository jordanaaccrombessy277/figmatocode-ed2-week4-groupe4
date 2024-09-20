import React from 'react';

function AppointmentList({ onPatientClick, dateFilter, statusFilter, searchTerm }) {
  const appointments = [
    { id: 1, patient: 'Sophie Dubois', doctor: 'Dr. Martin', date: '2024-01-15 09:30', contact: 'sophie.dubois@email.com', status: 'Confirmed', age: 35, gender: 'Female', reason: 'General consultation', medicalHistory: 'Peanut allergy', lastVisit: '2023-12-01' },
    { id: 2, patient: 'Pierre Lefebvre', doctor: 'Dr. Rousseau', date: '2024-01-20 14:00', contact: '06 12 34 56 78', status: 'Pending', age: 42, gender: 'Male', reason: 'Back pain', medicalHistory: 'Hypertension', lastVisit: '2023-11-15' },
    { id: 3, patient: 'Marie Leclerc', doctor: 'Dr. Dupont', date: '2024-02-05 11:15', contact: 'marie.leclerc@email.com', status: 'Confirmed', age: 28, gender: 'Female', reason: 'Pregnancy follow-up', medicalHistory: 'No major history', lastVisit: '2023-12-20' },
    { id: 4, patient: 'Thomas Moreau', doctor: 'Dr. Lambert', date: '2024-02-10 16:45', contact: '07 98 76 54 32', status: 'Cancelled', age: 55, gender: 'Male', reason: 'Diabetes check', medicalHistory: 'Type 2 diabetes', lastVisit: '2023-10-30' },
    { id: 5, patient: 'Camille Girard', doctor: 'Dr. Bernard', date: '2024-03-01 10:30', contact: 'camille.girard@email.com', status: 'Confirmed', age: 31, gender: 'Female', reason: 'Dermatological exam', medicalHistory: 'Family history of melanoma', lastVisit: '2024-01-05' },
    { id: 6, patient: 'Lucas Petit', doctor: 'Dr. Leroy', date: '2024-03-15 13:00', contact: '06 23 45 67 89', status: 'Pending', age: 19, gender: 'Male', reason: 'Vaccination', medicalHistory: 'Mild asthma', lastVisit: '2023-09-22' },
    { id: 7, patient: 'Emma Roux', doctor: 'Dr. Fournier', date: '2024-04-02 15:30', contact: 'emma.roux@email.com', status: 'Confirmed', age: 47, gender: 'Female', reason: 'Post-surgery follow-up', medicalHistory: 'Recent appendectomy', lastVisit: '2024-02-18' },
    { id: 8, patient: 'Antoine Durand', doctor: 'Dr. Martin', date: '2024-04-20 11:00', contact: 'antoine.durand@email.com', status: 'Confirmed', age: 62, gender: 'Male', reason: 'Cardiac assessment', medicalHistory: 'History of heart attack', lastVisit: '2023-11-05' },
    { id: 9, patient: 'Léa Mercier', doctor: 'Dr. Rousseau', date: '2024-05-10 09:45', contact: '06 34 56 78 90', status: 'Pending', age: 25, gender: 'Female', reason: 'ENT consultation', medicalHistory: 'Recurrent otitis', lastVisit: '2023-08-12' },
    { id: 10, patient: 'Hugo Lemoine', doctor: 'Dr. Dupont', date: '2024-05-25 14:15', contact: 'hugo.lemoine@email.com', status: 'Confirmed', age: 39, gender: 'Male', reason: 'Orthopedic follow-up', medicalHistory: 'Tibia fracture in 2022', lastVisit: '2024-03-01' },
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchDate = !dateFilter || appointment.date.startsWith(dateFilter);
    const matchStatus = !statusFilter || appointment.status === statusFilter;
    const matchSearch = !searchTerm || appointment.patient.toLowerCase().includes(searchTerm.toLowerCase());
    return matchDate && matchStatus && matchSearch;
  });

  return (
    <div className="overflow-x-auto h-full">
      {filteredAppointments.length > 0 ? (
        <table className="w-full bg-white shadow-md rounded mb-4">
          <thead className="sticky top-0 bg-gray-200">
            <tr className="text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Patient</th>
              <th className="py-3 px-6 text-left">Date and Time</th>
              <th className="py-3 px-6 text-left">Contact</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Medical History</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id} className="border-b cursor-pointer border-gray-200 hover:bg-gray-100"  onClick={() => onPatientClick(appointment)}>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2">👤</div>
                    <span>{appointment.patient}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{appointment.date}</td>
                <td className="py-3 px-6 text-left">{appointment.contact}</td>
                <td className="py-3 px-6 text-left">{appointment.medicalHistory}</td>
                <td className="py-3 px-6 text-left">
                  <span className={`py-1 px-3 rounded-full text-xs ${
                    appointment.status === 'Confirmed' ? 'bg-green-200 text-green-600' :
                    appointment.status === 'Pending' ? 'bg-yellow-200 text-yellow-600' :
                    'bg-red-200 text-red-600'
                  }`}>
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-4 text-gray-600">No results found for the current filter settings.</div>
      )}
    </div>
  );
}

export default AppointmentList;