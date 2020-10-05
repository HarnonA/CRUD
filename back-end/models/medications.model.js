const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Category is required"]
    },
    price: {
      type: String,
      required: [true, "Price is required"]
    },
    creationTime: { type: String },
    creationDate: { type: String },
    creationUser: { 
      type: String,
      required: [true, "Price is required"] 
    },
  
    updateTime: { type: String },
    updateDate: { type: String },
    updateUser: { type: String },
  
  });
  const Medication = mongoose.model("Medication", medicationSchema);

  for(var i =0 ; i< 10; i++){
    Medication.insertMany({
      name: 'Medicamento'+i,
      description: "desc",
      category: "Analgesico",
      creationUser: "Admin",
      price: "32,00"
    })
    Medication.insertMany({
      name: 'Medicamento1'+i,
      description: "desc",
      category: "Laxante",
      creationUser: "Admin",
      price: "32,00"
    })
    Medication.insertMany({
      name: 'Medicamento2'+i,
      description: "desc",
      category: "Aspirina",
      creationUser: "Admin",
      price: "32,00"
    })
  }

  module.exports = Medication;