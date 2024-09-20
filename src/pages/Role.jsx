import React from "react";
import { Link } from "react-router-dom";

function Role() {
  return (
      <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="m-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Vous êtes</h3>
          <div className="space-x-4">
            <Link
              to="/signup/patients"
              className="bg-blue-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Patients
            </Link>
            <span>ou</span>
            <Link
              to="/signup/doctors"
              className="bg-purple-primary hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
            >
              Doctors
            </Link>
            <span>?</span>
          </div>
        </div>
      </div>
  );
}

export default Role;
