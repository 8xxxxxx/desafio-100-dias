const app = require('./app');
const connectDB = require('config/database');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server in the port ${PORT}`);
});