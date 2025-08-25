require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const creds = {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL)}`
};


const SHEET_ID = process.env.GOOGLE_SHEET_ID;

async function accessSheet() {
    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    return doc.sheetsByIndex[0];
}

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
    father: String,
    motherName: String,
    dob: Date,
    gender: String,
    branch: String,
    address: String,
    contactNumber: String,
    email: String,
    previousSchool: String
});

// Mongoose Models
const TextData = mongoose.model('TextData', textDataSchema);
const FormData = mongoose.model('FormData', formDataSchema);


app.post('/api/send-form', async (req, res) => {
    try {
        const sheet = await accessSheet();
        const newFormData = new FormData(req.body);

        await newFormData.save();
        await sheet.addRow({
            studentName: req.body.studentName,
            father: req.body.father, 
            motherName: req.body.motherName,
            dob: req.body.dob,
            gender: req.body.gender,
            branch: req.body.branch,
            address: req.body.address,
            contactNumber: req.body.contactNumber,
            email: req.body.email,
            previousSchool: req.body.previousSchool
        });

        res.status(201).send('Form data saved successfully');
    } catch (error) {
        console.error("Google Sheets / Mongo Error:", error);
        res.status(500).json({
            success: false,
            message: "Error saving Form Data",
            error: error.message
        });
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

app.put('/api/edit-text/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { text, date } = req.body;
        const updatedData = await TextData.findByIdAndUpdate(id, { text, date }, { new: true });
        if (!updatedData) {
            return res.status(404).send('Data not found');
        }
        res.status(200).send('Data updated successfully');
    } catch (error) {
        res.status(500).send('Error updating data');
    }
});

app.delete('/api/delete-text/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await TextData.findByIdAndDelete({ _id: id });
        if (!deletedData) {
            return res.status(404).send('Data not found');
        }
        res.status(200).send('Data deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting data');
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

app.post('/api/verify-password', (req, res) => {
    const { password } = req.body;
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (password === correctPassword) {
        res.status(200).send({ success: true, message: 'Password verified successfully' });
    } else {
        res.status(401).send('Incorrect password');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
