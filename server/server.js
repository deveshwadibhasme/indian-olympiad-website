
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Mongoose Schemas
const textDataSchema = new mongoose.Schema({
    text: String,
    date: Date
});

const formDataSchema = new mongoose.Schema({
    studentName: String,
    fatherName: String,
    motherName: String,
    dob: Date,
    gender: String,
    branch: String,
    address: String,
    contactNumber: String,
    emailAddress: String,
    previousSchool: String
});

// Mongoose Models
const TextData = mongoose.model('TextData', textDataSchema);
const FormData = mongoose.model('FormData', formDataSchema);

// API Endpoints
app.post('/api/send-data', async (req, res) => {
    try {
        const { text, date } = req.body;
        const newData = new TextData({ text, date });
        await newData.save();
        res.status(201).send('Data saved successfully');
    } catch (error) {
        res.status(500).send('Error saving data');
    }
});

app.get('/api/get-data', async (req, res) => {
    try {
        const data = await TextData.find();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.post('/api/send-form', async (req, res) => {
    try {
        const newFormData = new FormData(req.body);
        await newFormData.save();
        res.status(201).send('Form data saved successfully');
    } catch (error) {
        res.status(500).send('Error saving form data');
    }
});

app.get('/api/get-form', async (req, res) => {
    try {
        const formData = await FormData.find();
        res.json(formData);
    } catch (error) {
        res.status(500).send('Error fetching form data');
    }
});

app.post('/api/verify-password', (req, res) => {
    const { password } = req.body;
    const correctPassword = process.env.ADMIN_PASSWORD; 

    if (password === correctPassword) {
        res.status(200).send({ success:true, message:'Password verified successfully' });
    } else {
        res.status(401).send('Incorrect password');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
