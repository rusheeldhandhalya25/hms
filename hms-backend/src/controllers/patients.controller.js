import Patient from "../models/patients.model.js";

export const createpatients = async (req,res) =>{
    try{
        const patient = await Patient.create(req.body);

        res.status(201).json({
            message: "patients created successfully ...",
            data: patient
        })

    }
    catch(error){
        res.status(400).json({
            message: error.message
        });
    }
}; 

export const getAllPatients = async (req, res) => {
  try {
    const { status } = req.query;

    let filter = {};

    if (status) {
      filter.status = status;
    }

    const patients = await Patient.find(filter);

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

