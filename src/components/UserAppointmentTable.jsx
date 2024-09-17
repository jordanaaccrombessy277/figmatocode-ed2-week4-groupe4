import React from 'react';
import avatar from "../assets/avatar.svg";

const data = [
  {
    id: 1,
    doctorName: "Jean-Barron ALOKPON",
    userImage: avatar,
    role: "Dermatologist",
    contact: "jeanbarronalokpon@gmail.com",
    reason: "Dermatological consultation",
    date: "21/12/2022 10:10",
    status: "Approved",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    id: 2,
    doctorName: "Jordana ACCROMBESSY",
    userImage: avatar,
    role: "Gynocologist",
    contact: "jordanaaccrombessy@gmail.com",
    reason: "Post-consultation",
    date: "22/12/2022 11:10",
    status: "Defer",
    statusColor: "bg-red-100 text-red-700"
  },
  {
    id: 3,
    doctorName: "Iovann Atcho",
    userImage: avatar,
    role: "Ophthalmologist",
    contact: "iovannatcho@gmail.com",
    reason: "Eye consultation",
    date: "23/12/2022 08:30",
    status: "Finished",
    statusColor: "bg-indigo-100 text-indigo-700"
  },
  {
    id: 4,
    doctorName: "Cody Fisher",
    userImage: avatar,
    role: "Cardiologist",
    contact: "cody@gmail.com",
    reason: "Cardiac assessment",
    date: "24/12/2022 09:00",
    status: "Approved",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    id: 5,
    doctorName: "Jean-Barron ALOKPON",
    userImage: avatar,
    role: "Dermatologist",
    contact: "+299 52000006",
    reason: "Dermatological exam",
    date: "21/12/2022 10:10",
    status: "Approved",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    id: 6,
    doctorName: "Jordana ACCROMBESSY",
    userImage: avatar,
    role: "Gynocologist",
    contact: "+299 52000001",
    reason: "Consultation",
    date: "22/12/2022 11:10",
    status: "Defer",
    statusColor: "bg-red-100 text-red-700"
  },
  {
    id: 7,
    doctorName: "Prince EKPINSE",
    userImage: avatar,
    role: "Ophthalmologist",
    contact: "princeekpinse@gmail.com",
    reason: "Eye exam",
    date: "23/12/2022 08:30",
    status: "Finished",
    statusColor: "bg-indigo-100 text-indigo-700"
  },
  {
    id: 8,
    doctorName: "Chaldrak DOKPA",
    userImage: avatar,
    role: "Cardiologist",
    contact: "chaldrakdokpa@gmail.com",
    reason: "General consultation",
    date: "16/09/2024 09:00",
    status: "Approved",
    statusColor: "bg-green-100 text-green-700"
  }
];

const UserAppointmentTable = ({ selectedDate, selectedStatus }) => {
  // Fonction pour reformater la date du format "DD/MM/YYYY" au format ISO "YYYY-MM-DD"
  const reformatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`; // Retourne la date au format "YYYY-MM-DD"
  };

  // Filtrer les rendez-vous par date si la date est sélectionnée
  const filteredData = data.filter((item) => {
    const appointmentDate = new Date(reformatDate(item.date.split(' ')[0])); // Reformater la date
    const isSameDate = selectedDate
      ? appointmentDate.toISOString().split('T')[0] === selectedDate
      : true;

    const matchesStatus = selectedStatus
      ? item.status === selectedStatus
      : true;

    return isSameDate && matchesStatus;
  });

  return (
    <div className="overflow-x-auto px-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-3 px-4 text-gray-primary text-sm sm:text-lg">ID</th>
            <th className="text-left py-3 px-4 text-gray-primary text-sm sm:text-lg">Doctor Name</th>
            <th className="text-left py-3 px-4 text-gray-primary text-sm sm:text-lg">Appointment Date & Time</th>
            <th className="text-left py-3 px-4 text-gray-primary text-sm sm:text-lg">Contact</th>
            <th className="text-left py-3 px-4 text-gray-primary text-sm sm:text-lg">Status</th>
            <th className="text-left py-3 px-4 text-gray-primary text-sm sm:text-lg">Reason</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-sm sm:text-base">#{item.id}</td>
              <td className="py-3 px-4 flex items-center">
                <img
                  src={item.userImage}
                  alt={item.doctorName}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base">{item.doctorName}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{item.role}</p>
                </div>
              </td>
              <td className="py-3 px-4 text-sm sm:text-base">{item.date}</td>
              <td className="py-3 px-4 text-sm sm:text-base">{item.contact}</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${item.statusColor}`}>
                  {item.status}
                </span>
              </td>
              <td className="py-3 px-4 text-sm sm:text-base">{item.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAppointmentTable;
