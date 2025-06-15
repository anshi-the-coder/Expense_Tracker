const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const expenseRoutes = require('./routes/expenseRoutes');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');

require('dotenv').config();
// connectDB();

const app = express();
const PORT = 5000;
connectDB('mongodb://localhost:27017/expense_Tracker')
//.then(()=> console.log("Mongodb connected"))

app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRoutes);
app.use('/api/auth', authRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));