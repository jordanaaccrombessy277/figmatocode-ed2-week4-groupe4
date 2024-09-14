import React from 'react';
import avatar from "../assets/avatar.svg";

const data = [
  {
    id: 1,
    doctorName: "Jean-Barron ALOKPON",
    userImage: avatar,
    role: "Dermatologist",
    email: "jeanbarronalokpon@gmail.com",
    phone: "+299 61000000",
    date: "21/12/2022 10:10 AM",
    status: "Approved",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    id: 2,
    doctorName: "Jordana ACCROMBESSY",
    userImage: avatar,
    role: "Gynocologist",
    email: "jordanaaccrombessy@gmail.com",
    phone: "+299 61000001",
    date: "22/12/2022 11:10 AM",
    status: "Defer",
    statusColor: "bg-red-100 text-red-700"
  },
  {
    id: 3,
    doctorName: "Iovann Atcho",
    userImage: avatar,
    role: "Ophthalmologist",
    email: "iovannatcho@gmail.com",
    phone: "+299 61000002",
    date: "23/12/2022 08:30 AM",
    status: "Finished",
    statusColor: "bg-indigo-100 text-indigo-700"
  },
  {
    id: 4,
    doctorName: "Cody Fisher",
    userImage: avatar,
    role: "Cardiologist",
    email: "cody@gmail.com",
    phone: "+299 52000005",
    date: "24/12/2022 09:00 AM",
    status: "Approved",
    statusColor: "bg-green-100 text-green-700"
  }
];

const UserAppointmentTable = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="bg-white border border-gray">
          <thead className='bg-gray-100 text-gray-primary'>
            <tr>
              <th className="text-sm sm:text-lg py-2 px-4">ID</th>
              <th className="text-sm sm:text-lg py-2 px-4">Doctor Name</th>
              <th className="text-sm sm:text-lg py-2 px-4">Email</th>
              <th className="text-sm sm:text-lg py-2 px-4">Phone number</th>
              <th className="text-sm sm:text-lg py-2 px-4">Appointment Date</th>
              <th className="text-sm sm:text-lg py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4">#{item.id}</td>
                <td className="py-2 px-4 flex items-center">
                  <img
                    src={avatar}
                    alt={item.doctorName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className='text-sm sm:text-lg '>{item.doctorName}</p>
                    <p className="text-xs sm:text-sm text-gray-primary">{item.role}</p>
                  </div>
                </td>
                <td className="text-sm sm:text-lg py-2 px-4">{item.email}</td>
                <td className="text-sm sm:text-lg py-2 px-4">{item.phone}</td>
                <td className="text-sm sm:text-lg py-2 px-4">{item.date}</td>
                <td className="text-sm sm:text-lg py-2 px-4">
                  <span className={`text-sm sm:text-lg px-2 py-1 rounded ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAppointmentTable;