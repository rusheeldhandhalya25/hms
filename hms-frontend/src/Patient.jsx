import React from 'react';

const Patient = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Patient Portal</h1>
        <p className="text-gray-400 mt-2">View your medical history, upcoming appointments, and prescriptions.</p>
      </div>

      <div className="bg-gray-900 overflow-hidden shadow-xl rounded-2xl border border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-lg font-bold text-white">My Dashboard</h2>
        </div>
         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors group cursor-pointer">
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">My Appointments</h3>
              <p className="mt-2 text-gray-500 text-sm">No upcoming appointments found.</p>
           </div>
           <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors group cursor-pointer">
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">Medical Records</h3>
              <p className="mt-2 text-gray-500 text-sm">Access your past prescriptions and reports.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;