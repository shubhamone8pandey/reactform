const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// MongoDB connection string with username, password, and database name
const uri = "mongodb+srv://shubham18bhu:ReactForm@cluster0.vcdhohp.mongodb.net/reactform";

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
    // If you want to start your API server here, you can put your app.listen() code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Define a Mongoose model
const User = mongoose.model('test', userSchema);

// POST request to insert a name into the database
app.post('/api/users', async (req, res) => {
  try {
    // Create a new user instance
    const newUser = new User({
      name: req.body.name
    });
    
    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
