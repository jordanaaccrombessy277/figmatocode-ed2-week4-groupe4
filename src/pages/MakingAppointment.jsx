import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendar.css';
import TimeSelect from '../Components/TimeSelect';

function MakingAppointment() {
  // État pour la date sélectionnée, l'heure, le nom et la raison de l'appel
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  // État pour afficher ou masquer le popup
  const [showModal, setShowModal] = useState(false);
  // État pour le message de confirmation
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Fonction pour gérer les changements de date
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Fonction pour gérer les changements d'heure
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  // Fonction pour gérer les changements dans le champ du nom
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Fonction pour gérer les changements dans le champ de raison
  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  // Fonction pour afficher un message de confirmation
  const handleConfirm = () => {
    // Vérifier que tous les champs sont remplis
    if (name && reason && selectedTime) {
      // Créer le message de confirmation
      const formattedDate = date.toLocaleDateString(); // Formater la date
      const message = `${name}, your appointment is registered for ${reason} for ${formattedDate} at ${selectedTime}.`;
      // Mettre à jour l'état du message de confirmation et afficher le popup
      setConfirmationMessage(message);
      setShowModal(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Fonction pour ajouter des classes CSS conditionnelles pour les dates du calendrier
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      if (date < firstDayOfMonth || date > lastDayOfMonth) {
        return 'react-calendar__tile--disabled';
      }
    }
    return null;
  };

  return (
    <div className="flex justify-center items-center font-Sora min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Book Your Appointment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Section pour le calendrier */}
          <div className="lg:w-1/2">
            <p className="text-lg font-medium mb-4">Select Date:</p>
            <div className="border border-gray-300 rounded-md p-4">
              <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={tileClassName}
              />
            </div>
          </div>

          {/* Section pour les champs de saisie */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Sélecteur d'heure */}
            <div>
              <TimeSelect selectedTime={selectedTime} onTimeChange={handleTimeChange} />
            </div>

            {/* Champ pour le nom */}
            <div>
              <label className="text-lg font-medium mb-2">Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Champ pour la raison */}
            <div>
              <label htmlFor="reason" className="text-lg font-medium mb-2">
                Reason of Appointment:
              </label>
              <textarea
                id="reason"
                rows="1"
                value={reason}
                onChange={handleReasonChange}
                className="block w-full p-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your reason here..."
              ></textarea>
            </div>

            {/* Bouton de confirmation */}
            <div className="mt-4">
              <button
                onClick={handleConfirm}
                className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:opacity-80"
              >
                Confirm
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 backdrop-blur-sm bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <p className="text-lg text-green-500">{confirmationMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MakingAppointment;
