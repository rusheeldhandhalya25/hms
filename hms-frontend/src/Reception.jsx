import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Reception = () => {
  const initialValues = {
    name: "",
    age: "",
    gender: "",
    mobileno: "",
    disease: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.number()
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .required("Age is required"),
    gender: Yup.string()
      .oneOf(["Male", "Female", "Other"], "Invalid gender")
      .required("Gender is required"),
    mobileno: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    disease: Yup.string().required("This field is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:5005/patients",
        values
      );
      console.log("Patient data submitted:", response.data);
      alert("Patient registered successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.code === "ERR_NETWORK") {
        alert("Cannot connect to server. Please ensure the backend server is running on port 5005.");
      } else {
        alert("Failed to register patient. Please check the console for details.");
      }
    }
    setSubmitting(false);
  };

  const inputClasses = "mt-1 block w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out hover:bg-gray-900";
  const labelClasses = "block text-sm font-semibold text-gray-300 mb-1.5";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-800">
        <div className="bg-gray-800 px-8 py-10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-gray-800/50 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-gray-800/50 blur-2xl"></div>
          
          <h2 className="text-3xl font-bold text-white text-center relative z-10">Patient Registration</h2>
          <p className="text-gray-400 text-center mt-2 text-sm relative z-10 font-medium">Enter patient details for new admission</p>
        </div>
        
        <div className="p-8 sm:p-10 bg-gray-900">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="col-span-2">
                    <label htmlFor="name" className={labelClasses}>Patient Name</label>
                    <Field type="text" name="name" id="name" placeholder="John Doe" className={inputClasses} />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1 font-medium" />
                  </div>

                  <div>
                    <label htmlFor="age" className={labelClasses}>Age</label>
                    <Field type="number" name="age" id="age" placeholder="25" className={inputClasses} />
                    <ErrorMessage name="age" component="div" className="text-red-500 text-xs mt-1 font-medium" />
                  </div>

                  <div>
                    <label htmlFor="gender" className={labelClasses}>Gender</label>
                    <Field as="select" name="gender" id="gender" className={inputClasses}>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="text-red-500 text-xs mt-1 font-medium" />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="mobileno" className={labelClasses}>Phone Number</label>
                    <Field type="tel" name="mobileno" id="mobileno" placeholder="9876543210" className={inputClasses} />
                    <ErrorMessage name="mobileno" component="div" className="text-red-500 text-xs mt-1 font-medium" />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="disease" className={labelClasses}>Diseases / Symptoms</label>
                    <Field as="textarea" name="disease" id="disease" rows="3" placeholder="Fever, Headache..." className={inputClasses} />
                    <ErrorMessage name="disease" component="div" className="text-red-500 text-xs mt-1 font-medium" />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-gray-900/50 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? "Registering..." : "Register Patient"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Reception;