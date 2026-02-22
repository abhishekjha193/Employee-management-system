const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: "https://your-vercel-url.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/employees', require('./routes/employeeRoutes'));

app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;

//database connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => console.log(err));