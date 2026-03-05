import React, { useState } from "react";
import apiClient from "./api/axiosConfig"; // Import the centralized API client

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobileno: "",
    gender: "",
    disease: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    // Simple validation
    for (const key in formData) {
      if (formData[key] === "") {
        setError(`Please fill out the ${key} field.`);
        setIsLoading(false);
        return;
      }
    }

    try {
      const response = await apiClient.post("/patients", formData);
      setMessage("Patient created successfully!");
      console.log(response.data);
      setFormData({ name: "", age: "", mobileno: "", gender: "", disease: "" });
    } catch (err) {
      if (err.request) {
        setError("Cannot connect to server. Please ensure the backend is running on port 5005.");
      } else {
        setError("An unexpected error occurred while creating the patient.");
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Tailwind CSS classes
  const inputClasses = "mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-500 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";
  const labelClasses = "block text-sm font-medium text-gray-300";

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border border-gray-700 rounded-lg shadow-lg bg-gray-900">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Add New Patient
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className={labelClasses}>Name</label>
          <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClasses}/>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className={labelClasses}>Age</label>
          <input id="age" type="number" name="age" value={formData.age} onChange={handleChange} required className={inputClasses}/>
        </div>
        <div className="mb-4">
          <label htmlFor="mobileno" className={labelClasses}>Mobile No</label>
          <input id="mobileno" type="text" name="mobileno" value={formData.mobileno} onChange={handleChange} required className={inputClasses}/>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className={labelClasses}>Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className={inputClasses}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="disease" className={labelClasses}>Disease</label>
          <input id="disease" type="text" name="disease" value={formData.disease} onChange={handleChange} required className={inputClasses}/>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white disabled:bg-gray-600 disabled:cursor-not-allowed">
          {isLoading ? "Submitting..." : "Add Patient"}
        </button>
      </form>
      {message && <p className="text-green-600 mt-4 text-center">{message}</p>}
      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default AddPatientForm;