const express = require('express');
require('dotenv').config();

const server = express();

const { PORT = 8080 } = process.env;

server.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})