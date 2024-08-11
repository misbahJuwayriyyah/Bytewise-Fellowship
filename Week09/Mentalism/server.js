const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

mongoose.connect('mongodb+srv://MisbahJuwayriyyah:89548c58@projects.sz8og4s.mongodb.net/Projects?retryWrites=true&w=majority')
.then((response) =>{
  console.log(response );
});

const ProjectList = mongoose.model('ProjectList', new mongoose.Schema({
  name: {type: String},
  phone: {type: Number},
  Description: {type: String},
}));

app.get('/api/projects/', async (req, res) => {
  try {
    const projects = await ProjectList.find();
    console.log(projects);
    res.json(projects);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
    res.send('Welcome to the API'); // You can customize this response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
